import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route , Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddTask from './components/AddTask';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import Pagination from './components/Pagination';
import Settings from './components/Settings';
import UpdateTask from './components/UpdateTask';

function App() {
  const [tasks,setTasks] = useState([])
  const [loading,setLoading] = useState(false)
  const [completedTheme,setCompletedTheme] = useState('gray-theme')

  const [currentPage,setCurrentPage] = useState(1)
  const [tasksPerPage] = useState(5)

  const fetchTasks = async () => {
    setLoading(true)
    const res = await fetch('http://127.0.0.1:8000/api/task/')
    const data = await res.json()
    setLoading(false)
    return data
  }

  useEffect(() => {
    const getTasks = async () => {
      const tasksInServer = await fetchTasks()
      setTasks(tasksInServer)
    }
    getTasks()
  },[])

  const addTask = async (task) => {
    const res = await fetch('http://127.0.0.1:8000/api/task-create/',
    {
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/task-delete/${id}`,
    {
      method:'DELETE',
    })

    setTasks(tasks.filter(task => task.id !== id))
  }

  const editTask = async (editedTask) => {
    await fetch(`http://127.0.0.1:8000/api/task-update/${editedTask.id}`,
    {
      method:'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(editedTask)
    })

    setTasks(await fetchTasks())
  }
  
  const indexOfLastTask = currentPage * tasksPerPage
  const indexOfFirstTask = indexOfLastTask - tasksPerPage
  const pageTasks = tasks.slice(indexOfFirstTask,indexOfLastTask)

  const paginate = (page) => {
    setCurrentPage(page)
  }

  const setCompletedColor = (color) => {
    setCompletedTheme(color)
  }
  // if(edit){
  //   task =<AddTask addNewTask={addTask} toEdit={edit} taskEdit={editState} handleEditTask={editTask} />;
  // }

  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/to-do' element={
          <div className='content-container'>
          <AddTask addNewTask={addTask}/>
          <Tasks getTasks = {pageTasks} loading={loading} onToggle={ editTask} onDelete={deleteTask} completedThemeColor={completedTheme} />
          <Pagination totalTasks={tasks.length} tasksPerPage={tasksPerPage} paginate={paginate}/>
          <Settings completedColor={setCompletedColor}/>
          </div>
        }/>
        <Route path={'/to-do/update/:id'} element={ <UpdateTask onEdit={editTask}/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

import Button from './Button'
import { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const UpdateTask = ({onEdit}) => {
    const [id,setId] = useState(0)
    const [task,setTask] = useState('')
    const [date,setDate] = useState('')
    const [completed,setCompleted] = useState(false)

    const fetchTask = async (id) => {
        const res = await fetch(`http://127.0.0.1:8000/api/task/${id}`)
        const data = await res.json()
        return data
      }

    const urlParams = useParams();
    const navigate = useNavigate()
    // const id = urlParams.id

    useEffect(() => {
        const id = urlParams.id;
        const getTask = async () => {
            const taskInServer = await fetchTask(id)
            setId(id)
            setTask(taskInServer.task)
            setDate(taskInServer.date)
            setCompleted(taskInServer.completed)
        }
        getTask()

    },[])

    const editForm = (e) => {
        e.preventDefault()
        onEdit({ id:id , task:task , date :date , completed:completed})
        navigate('/to-do')
    }

  return (
    <div className='update-container'>
        <form className='update-form' onSubmit={editForm}>
            <div className='form-header'>
                <span> Edit Task</span>
            </div>
            <div className='update-content'>
                <ul className='form-grid'>
                    <li className='form-control update-item'>
                        <label>Task ID</label>
                        <div className='form-group'>
                            <span>{id}</span>
                        </div>
                    </li>
                    <li className='form-control update-item'>
                        <label>Date</label>
                        <div className='form-group'>
                            <input type='date' value={date} onChange={(e) => {setDate(e.target.value)}}></input>
                        </div>
                    </li>
                    <li className='form-control update-item'>
                        <label>Task</label>
                        <div className='form-group'>
                            <input className='update-task' type='text' value={task} onChange={(e) => {setTask(e.target.value)}} ></input>
                        </div>
                    </li>
                    <li className='form-control update-item'>
                        <label>Completed</label>
                        <div className='form-group'>
                            <input type='checkbox' checked={completed} onChange={(e) => {setCompleted(e.target.checked)}} ></input>
                        </div>
                    </li>
                    <Button  title='Edit' btnClass='btn btn-primary btn-edit' btnType='submit' />
                </ul>
            </div>
        </form>

        <button className='btn btn-black' type='button' onClick={() => navigate('/to-do')}> Back to tasks </button>
    </div>
  )
}

export default UpdateTask

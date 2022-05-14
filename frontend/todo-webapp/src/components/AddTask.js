import Button from "./Button"
import { useState } from "react"

const AddTask = ({addNewTask}) => {
  const [task,setTask] = useState('')
  const [date,setDate] = useState('')

  const submitTask = (e) => {
    e.preventDefault()

    if (!task ){
      alert('please add a task')
      return
    }

    if (!date){
      alert('please add a Date')
      return
    }

    addNewTask({date,task})
    setDate('')
    setTask('')
  }

  return (
    <form className='add-task-container' onSubmit={submitTask}>
        <div className='form-control'>
            <input type='date' value={date} onChange={(e) => setDate(e.target.value)} ></input>
        </div>
        <div className='form-control add-activity'>
            <input className="add-task" type='text' value={task} onChange={(e) => setTask(e.target.value)} maxLength={25} placeholder='Add an activity'></input>
        </div>
        <div className='form-control'>
            <Button  title='Add' btnClass='btn btn-primary-outline' btnType='submit' />
        </div>
    </form>
  )
}

export default AddTask

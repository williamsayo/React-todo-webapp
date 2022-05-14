import React from 'react'
import BlankButton from './BlankButton'
import { Link } from 'react-router-dom'

const Task = ({task, onToggle,removeTask,completedThemeColor}) => {
  
  return (
    <div className={`grid-container ${task.completed ? `completed-${completedThemeColor}` : ''}`}>
      <div className={`task-item date ${task.completed ? 'white-text' : ''}`}>
          {task.date ? task.date : 'No date'}
      </div>
      <div className='task-item'>
        <button className='task btn-blank' onDoubleClick={() => onToggle({...task, completed:!task.completed})}>{task.task}</button>
      </div>
      <div className='task-item update-task'>
        <Link  className='fa fa-pencil-square-o update-task btn-blank' to={`/to-do/update/${task.id}`} >

        </Link>
      </div>
      <div className='task-item remove-task'>
        <BlankButton name= 'fa fa-trash fa-shake' title='remove-task' performAction={removeTask} taskId = {task.id} />
      </div>
    </div>
  )
}

export default Task

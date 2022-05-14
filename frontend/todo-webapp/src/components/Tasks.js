import React from 'react'
import Task from './Task'

const Tasks = ({ getTasks,onToggle,onDelete,loading,completedThemeColor}) => {
  return (
    <div className='task-container'>
        <div className='header grid-container'>
            <div className='header-item header-item-1'> Date </div>
            <div className='header-item header-item-2'> Activity </div>
            {/* <div className='header-item header-item-3'> Status </div> */}
            <div className='header-item header-item-4'> Update </div>
            <div className='header-item header-item-5'> Remove </div>
        </div>

        {loading ?  <div className='error-task'>
          <i className="fa-solid fa-spinner fa-spin-pulse fa-2x"></i>
          </div>
        :
         (getTasks.length > 0 ? getTasks.map(task => (
          <Task key={task.id} task={task} onToggle = {onToggle} removeTask={onDelete} completedThemeColor={completedThemeColor}/>
      )) : <div className='error-task'> No Task available </div>)}
    </div>
  )
}

export default Tasks

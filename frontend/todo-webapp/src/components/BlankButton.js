
const BlankButton = ({name,title,performAction,taskId}) => {
  return (
    <button type='button' className='btn-blank' onClick={() => performAction(taskId)}>
      <i className={` ${name} ${title} `} aria-hidden="true" style={{'--fa-animation-duration':'2s'}}></i>
    </button>
  )
}

export default BlankButton

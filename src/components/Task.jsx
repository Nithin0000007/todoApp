import React from 'react'

const Task = (props) => {
  return (
    <div className='task'>
      <span className="task-input" >{props.task}</span>
      {/* <button className='check-btn'><i class="fa-solid fa-check"></i></button> */}
      <button className='delete-btn' onClick={()=>{props.deleteBtnHandler(props.task)}}><i className="fa-solid fa-trash"></i></button>
    </div>
  )
}

export default Task

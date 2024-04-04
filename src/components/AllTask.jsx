import React from 'react'
import Task from './Task'

const AllTask = (props) => {

    return (
        <div className="all-task">
            {props.toDos.map((todo, index) => { return <Task deleteBtnHandler={props.deleteBtnHandler} key={index} task={todo} /> })}
        </div>
    )
}

export default AllTask

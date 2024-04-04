import '../styleSheets//App.css'

import AllTask from './AllTask'
import { useEffect, useState } from 'react';


function App() {

  let todoList = []

  if (localStorage.getItem("todo-list") !== null) {
    todoList = JSON.parse(localStorage.getItem("todo-list"))
  }

  const [task, setTask] = useState([''])
  const [toList, setToList] = useState(todoList)

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(toList))
  }, [toList])

  let onChangeHandler = (e) => {
    setTask(e.target.value)
  }

  let onClickHandler = () => {
    if (task.length > 0) {
      setToList([...toList, task])
      setTask('')
    }
    else { alert("task can't be empty") }
  }

  let onDeleteBtn = (deletetask) => {
    setToList(toList.filter((tsk) => tsk !== deletetask));
}

let keyPressHandler = (e) => {
  if(e.key === 'Enter'){
    onClickHandler()
  }
}

  return (
    <div className="container">
      <div className="page">
        <div className="input-div">
          <input value={task} type="text" id="input" placeholder="Enter the task" onChange={onChangeHandler} onKeyDown={keyPressHandler} ></input>
          <button id="add-btn"  onClick={onClickHandler}>+</button>
        </div>
        <AllTask toDos={toList} deleteBtnHandler={onDeleteBtn} />
      </div>
    </div>
  );
}

export default App;

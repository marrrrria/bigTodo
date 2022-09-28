import React from "react";
import Task from './Task';

function TaskList({tasks, toggleDone, deleteTask, sortList}) {
  // const [counts, setCounts] = React.useState({
  //   done: 0,
  //   toDo: tasks.length,
  // })

  // function addTodo() {
  //   setCounts((counts) => {
  //     return {}
  //   })
  // }

  return (
    <ul>
      {tasks.sort(sortList).map(task => <Task key={task.id} task={task} toggleDone={toggleDone} deleteTask={deleteTask}/>)}
    </ul>
  )
}

export default TaskList
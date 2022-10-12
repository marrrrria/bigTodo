import React from "react";
import Task from './Task';

function TaskList({tasks, toggleDone, deleteTask, sortList}) {
  
  return (
    <ul>
      {tasks.sort(sortList).map(task => <Task key={task.id} task={task} toggleDone={toggleDone} deleteTask={deleteTask}/>)}
    </ul>
  )
}

export default TaskList
import React, { useContext } from "react";
import Context from "../context";
// import ShowSubTasks from '../components/ShowSubTasks'

function Task({task, toggleDone, deleteTask}) {
  const {dragStart, dragOver, dragLeave, dragEnd, dragDrop, getCounts} = useContext(Context);

  const done = [];
  const hidden = [];

  if (task.completed) {
    done.push('done')
  }

  if (task.hidden) {
    hidden.push('hidden')
  }

  if (task.tag === 1) {
    hidden.push('imp-emer')
  }

  if (task.tag === 2) {
    hidden.push('important')
  }

  if (task.tag === 3) {
    hidden.push('not-important')
  }

  return (
    <li className={'task ' + hidden.join(' ')}
        draggable={true}
        onDragStart={(e) => dragStart(e, task)}
        onDragLeave={(e) => dragLeave(e)}
        onDragOver={(e) => dragOver(e)}
        onDragEnd={(e) => dragEnd(e)}
        onDrop={(e) => dragDrop(e, task)}
        /*onClick={() => ShowSubTasks(task.subTasks)}*/>
      <span className={done.join(' ')}>
        <input type="checkbox" onChange={() => {toggleDone(task.id); getCounts()}} checked={task.completed}/>
        {task.title}
        
      </span>
      <button className="delete" onClick={() => deleteTask(task.id)}>&times;</button>
      
    </li>
  )

}

export default Task


// {
//         task.subTasks ? <ul className="hidden">
//         {task.subTasks.map(subTask => {
//           return (
//           <li>
//             <span className={done.join(' ')}>
//             <input type="checkbox" onChange={() => toggleDone(task.id)}/>
//               {subTask.title}
//             </span>
//             <button className="delete" onClick={() => deleteTask(task.id)}>&times;</button>
//           </li>
//           )
//         })}
        
//       </ul> : <p></p>


//       }





// const [state, setState] = React.useState({
//     done: false,
//     important: false,
//   })

//   let classes = 'task';

//   const inputChange = () => {
//     setState((state) => {
  //     return {
//       done: !state.done,
//     }})
//   }

//   const importantHandler = () => {
//     setState((state) => {
  //      return {
//       important: !state.important,
//     }
//     })
//   }

//   if(state.important) {
//     classes += ' i-not-e'
//   }

//   if(state.done) {
//     classes += ' done'
//   }


//   return (
//     <li className={classes} onClick={importantHandler}>
//       <span >
//         <input type="checkbox" onChange={inputChange}/>
//         {task.title}
//       </span>
      
//     </li>
//   )
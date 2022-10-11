import React from "react";

// function Counts({counts}) {
//   return (
//     <div className="counts">
//       <p>{counts.toDo} TODO</p>
//       <p>{counts.done} DONE</p>
//     </div>
//   )
// }

function Counts({list}) {

  const counts = {
    toDo: list.filter(el => !el.completed).length, 
    done: list.filter(el => el.completed).length,  
  }

  return (
    <div className="counts">
      <p>{counts.toDo} TODO</p>
      <p>{counts.done} DONE</p>
    </div>
  )
}

export default Counts;
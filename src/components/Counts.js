import React from "react";

function Counts({counts}) {

  // const [counts, setCounts] = React.useState({
  //   toDo: list.filter(el => !el.completed).length, 
  //   done: list.filter(el => el.completed).length,  
  // })

  // function getCounts() {

  //   setCounts(counts => {
  //     return { 
  //       toDo: list.filter(el => !el.completed).length, 
  //       done: list.filter(el => el.completed).length,  
  //     }
  //   })

  //   console.log(counts)
  // }

  return (
    <div className="counts">
      <p>{counts.toDo} TODO</p>
      <p>{counts.done} DONE</p>
    </div>
  )
}

export default Counts;
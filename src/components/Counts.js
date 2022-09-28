import React from "react";

function Counts({counts}) {
  return (
    <div className="counts">
      <p>{counts.toDo} TODO</p>
      <p>{counts.done} DONE</p>
    </div>
  )
}

export default Counts;
import React from "react";

function Filter({filterAll, filterActive, filterDone}) {
  return (
    <div className="filter">
      <button onClick={(e) => filterAll(e)}>ALL</button>
      <button onClick={filterActive}>Active</button>
      <button onClick={filterDone}>Done</button>
    </div>
  )
}

export default Filter
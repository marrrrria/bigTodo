import React from "react";

function Filter({filterAll, filterActive, filterDone}) {
  return (
    <div className="filter">
      <button style={{ borderRadius: '10px 0 0 10px', borderWidth: '1px 0 1px 1px'}} onClick={(e) => filterAll(e)}>ALL</button>
      <button onClick={filterActive}>Active</button>
      <button style={{ borderRadius: '0 10px 10px 0', borderWidth: '1px 1px 1px 0'}} onClick={filterDone}>Done</button>
    </div>
  )
}

export default Filter
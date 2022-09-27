import React from "react";

function TaskColors() {
  return (
    <div className="task-colors" style={{marginBottom: '20px', fontSize: '20px'}}>
      <div className="item-color">
        <div className="task-color i-e"></div> {"Important and Emergency"}
      </div>
      <div className="item-color">
        <div className="task-color i-not-e"></div> {"Important but Not Emergency"}
      </div>
      <div className="item-color">
        <div className="task-color not-i-e"></div> {"Not Important and Emergency"}
      </div>
      <div className="item-color">
        <div className="task-color not-i-not-e"></div> {"Not Important Not Emergency"}
      </div>
    </div>
  )
}

export default TaskColors;
import React from "react";

function ProgressBar({bgColor, completed}) {
  return (
    <div>
      <div>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar
import React from "react";

function ProgressBar({bgcolor, completed}) {

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "black",
    borderRadius: 50,
    margin: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 5,
    color: "black",
    fontWeight: 'bold',
  }

  return (
    <div styles={containerStyles}>
      <div styles={fillerStyles}>
        <span styles={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar
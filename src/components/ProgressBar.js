import React from "react";

function ProgressBar({bgcolor, completed, title}) {

  const styles = {
    containerStyles: {
      height: '30px',
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: '50px',
      margin: '10px 0 20px 0',
  },
    fillerStyles: {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'end',
  },
    labelStyles: {
      padding: 5,
      color: "white",
      fontWeight: 'bold',
  }
  }

  return (
    <>
    <p style={{fontSize: '20px'}}>{title}</p>
    <div style={styles.containerStyles}>
      <div style={styles.fillerStyles}>
        <span style={styles.labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
    </>
    
  )
}

export default ProgressBar
import React from "react";

export default function SearchPanel({search}) {
  const style = {
    marginBottom: '20px',
    borderRadius: '10px',
    height: '30px',
    paddingLeft: '20px',
  }

  // const [value, setValue] = React.useState('')

  // function changeValue(e) {
  //   e.preventDefault()
  //   setValue(e.target.value)
  // }

  return (
    <input style={style} type="text" placeholder="Search..." onChange={(e) => {search(e.target.value)}}/>
  )
}
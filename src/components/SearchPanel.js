import React from "react";

// export default function SearchPanel({list, search}) {
export default function SearchPanel({getValue}) {

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
    // <input style={style} type="text" placeholder="Search..." onChange={(e) => {search(list, e.target.value)}}/>
    <input style={style} type="text" placeholder="Search..." onChange={(e) => {getValue(e.target.value)}}/>

  )
}
import React from "react";

const useValueHook = () => {
  const [value, setValue] = React.useState('')

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value,
  }

}

function AddTask({addTask}) {

  const input = useValueHook();

  function submit(event) {
    event.preventDefault();

    if(input.value().trim()) {
      addTask(input.value())
      input.clear()
    }
  }


  return (
    <form onSubmit={submit} className="add-task">
      <input type="text" {...input.bind}/>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTask
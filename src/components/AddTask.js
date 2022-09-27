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


function AddTask({addTask, setS}) {

  const inputTask = useValueHook();
  const inputTag = useValueHook();

  function submit(event) {
    event.preventDefault();

    if(inputTask.value().trim()) {
      addTask(inputTask.value(), inputTag.value())
      setS({isOpen: false})
      inputTask.clear();
      inputTag.clear();
    }
  }


  return (
    <form onSubmit={submit} className="add-task">
      <input type="text" {...inputTask.bind} placeholder="Enter Your Plans"/>
      <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
        <div>
          <input onChange={(e) => inputTag.bind.onChange(e)} type='radio' id="important-emergency" name="tag" value="1" checked={'1' === inputTag.value()}/><label htmlFor="important-emergency">Important and Emergency</label>
        </div>
        <div>
          <input onChange={(e) => inputTag.bind.onChange(e)} type='radio' id="important" name="tag" value="2" checked={'2' === inputTag.value()}/><label htmlFor="important">Important but Not Emergency</label>
        </div>
        <div>
          <input onChange={(e) => inputTag.bind.onChange(e)} type='radio' id="not-important" name="tag" value="3" checked={'3' === inputTag.value()}/><label htmlFor="not-important">Not Important and Emergency</label>
        </div>
        <div>
          <input onChange={(e) => inputTag.bind.onChange(e)} type='radio' id="not-important" name="tag" value="0" checked={'0' === inputTag.value() || '' === inputTag.value()}/><label htmlFor="not-important">Not Important Not Emergency</label>
        </div>
        
      </div>
      
      
      <button style={{marginLeft: '20px'}} type="submit">Add</button>
    </form>
  )
}

export default AddTask
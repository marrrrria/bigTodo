import TaskList from "./components/TaskList";
import React from "react";
import AddTask from "./components/AddTask";
import Context from "./context";
import Filter from "./components/Filter";
import BalanceWidget from "./components/BalanceWidget";
import TaskColors from "./components/TaskColors"
import ModalAddTask from "./components/ModalAddTask";
import Counts from './components/Counts'
// import ShowDate from "./components/Date";


function App() {

  const tags = {
    notImportantNotEmergency: 0,
    importantEmergency: 1,
    importantNotEmergency: 2,
    notImportantEmergency: 3,
    // health: 3,
    // money: 4,
    // selfDevelopment: 5,
    // family: 6,
  }
  
  const tasks = [
    {
      id: 1,
      title: 'Buy something sweet',
      completed: false,
      // showSubTasks: false,
      // subTasks: [
      //   {
      //     id: 11,
      //     title: 'cat',
      //     completed: false,
      //   },
      //   {
      //     id: 12,
      //     title: 'c',
      //     completed: false,
      //   },
      //   {
      //     id: 13,
      //     title: 'a',
      //     completed: false,
      //   },
      //   {
      //     id: 14,
      //     title: 't',
      //     completed: false,
      //   },
      // ]
      hidden: false,
      tag: tags.importantEmergency,
    },
    {
      id: 2,
      title: 'cat',
      completed: false,
      hidden: false,
      tag: tags.importantNotEmergency,
    },
    {
      id: 3,
      title: 'dog',
      completed: false,
      hidden: false,
      tag: tags.notImportantEmergency,
    },
    {
      id: 4,
      title: 'mice',
      completed: false,
      hidden: false,
      tag: tags.importantEmergency,
    },
    {
      id: 5,
      title: 'style',
      completed: false,
      hidden: false,
      tag: tags.importantEmergency,
    }
  ]

  const [list, setList] = React.useState(tasks)

  function toggleDone(id) {
    setList(list.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item
    }))
  }

  function deleteItem(id) {
    setList(list => list.filter(item => item.id !== id).map(item => {
      if(item.id > id){
        return {...item, id: item.id-1}
      }
      return item      
    }))
    getCounts()
  }

  function addItem(title, tag) {
    console.log(title, tag)
    setList(list => [...list, {
      id: list.length+1,
      title: title,
      completed: false,
      hidden: false,
      tag: +tag,
    }])
    console.log(list)
  }

  function changeColor(e, color) {
    if(e.target.localName === "li") {
      e.target.style.background=color 
      e.target.children[0].style.background=color
    }
    if(e.target.localName === "span") {
      e.target.style.background=color
      e.target.parentElement.style.background=color
    }
  
  }

  let [currentItem, setCurrentItem] = React.useState(null)

  function dragStart(e, item) {
    setCurrentItem(item)
  }

  function dragOver(e) {
    e.preventDefault()
    changeColor(e, "lightgrey")
  }

  function dragLeave(e) {
    changeColor(e, "white")
  }

  function dragEnd(e) {

  }

  function dragDrop(e, dropItem) {   

    changeColor(e, "white")

    setList(list.map(item => {
      if(item.id === currentItem.id) {
        return {...item, id: dropItem.id}
      }
      if (item.id > currentItem.id && item.id <= dropItem.id) {
        return {...item, id: item.id-1}
      }
      if(item.id < currentItem.id && item.id >= dropItem.id) {
        return {...item, id: item.id+1}
      }
      return item;
    }))
  
  }

  const sortList = (a,b) => {
    if (a.id > b.id) {
      return 1
    } else {return -1}
  }

  function filterAll(e) {
    // console.log(e)
    // e.target.style.background = "blue"
    setList(list => list.map(item => {
      return {...item, hidden: false}
    }))
    // console.log(list)
  }

  function filterActive() {
    setList(list => list.map(item => {
      if(item.completed) {
        item.hidden = true
      } else {item.hidden = false}
      return item
    }))
    // console.log(list.filter(item => item.completed !== true))
  }

  function filterDone() {
    setList(list => list.map(item => {
      if(!item.completed) {
        item.hidden = true
      } else {item.hidden = false}
      return item
    }))
    console.log(list.filter(item => item.completed !== false))
  }






  const [counts, setCounts] = React.useState({
    toDo: list.filter(el => !el.completed).length, 
    done: list.filter(el => el.completed).length,  
  })

  function getCounts() {

    setCounts(counts => {
      return { 
        toDo: list.filter(el => !el.completed).length, 
        done: list.filter(el => el.completed).length,  
      }
    })

    // list.forEach(item => {
    //   if(item.completed) {
    //     setCounts(counts => {
    //       return {...counts, done: counts.done + 1}
    //     })
    //   } else {setCounts(counts => {
    //     return {...counts, toDo: counts.toDo + 1}
    //   })}
    // })
    console.log(list)
  }






  return (
    <Context.Provider value={{dragStart, dragOver, dragLeave, dragEnd, dragDrop, getCounts}}>
      {/* <ShowDate/> */}
      <div className="wrapper">
        <div className="flex">
          <BalanceWidget/>

          <TaskColors/>
          
        </div>
        <ModalAddTask addTask={addItem}/>
        <Filter filterAll={filterAll} filterActive={filterActive} filterDone={filterDone}/>
        <Counts counts={counts}/>
        {/* <Counts list={list}/> */}
        <div style={{minHeight: '300px'}}>
          {list.length ? <TaskList tasks={list} toggleDone={toggleDone} deleteTask={deleteItem} sortList={sortList}/> : <h1>NO PLANS!</h1>}
        </div>
        
        {/* <AddTask addTask={addItem}/> */}
      </div>
    </Context.Provider>
  );
}

export default App;

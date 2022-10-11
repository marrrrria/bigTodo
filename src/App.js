import TaskList from "./components/TaskList";
import React from "react";
import Context from "./context";
import Filter from "./components/Filter";
import BalanceWidget from "./components/BalanceWidget";
import TaskColors from "./components/TaskColors"
import ModalAddTask from "./components/ModalAddTask";
import Counts from './components/Counts'
import SearchPanel from "./components/SearchPanel";
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

  const [state, setState] = React.useState({
    list: tasks,
    currentItem: null,
    searchValue: '',
    filterValue: '',
  })
  // console.log(state,"1")
  // const [list, setList] = React.useState(tasks)

  // function toggleDone(id) {
  //   console.log(id)
  //   setList(list.map(item => {
  //     console.log(item)
  //     if (item.id === id) {
  //       item.completed = !item.completed;
  //     }
  //     return item
  //   }))
  // }

  function toggleDone(id) {
    console.log(state.list[0],"2")
    const result = state.list.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item
    })
    setState((state) => {
      return {
        ...state,
        list: result,
    }
    })
    

    //   state.list.map(item => {
    //   if (item.id === id) {
    //     item.completed = !item.completed;
    //   }
    //   return item
    // }))
    // console.log(state.list[0],"3")
  }

  function deleteItem(id) {
    setState(({list}) => list.filter(item => item.id !== id).map(item => {
      if(item.id > id){
        return {...item, id: item.id-1}
      }
      return item      
    }))
    getCounts()
    // setList(list => list.filter(item => item.id !== id).map(item => {
    //   if(item.id > id){
    //     return {...item, id: item.id-1}
    //   }
    //   return item      
    // }))
    // getCounts()
  }

  function addItem(title, tag) {
  
    setState(({list}) => [...list, {
      id: list.length+1,
      title: title,
      completed: false,
      hidden: false,
      tag: +tag,
    }])

    // setList(list => [...list, {
    //   id: list.length+1,
    //   title: title,
    //   completed: false,
    //   hidden: false,
    //   tag: +tag,
    // }])
  
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

    setState(({list}) => list.map(item => {
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

    // setList(list.map(item => {
    //   if(item.id === currentItem.id) {
    //     return {...item, id: dropItem.id}
    //   }
    //   if (item.id > currentItem.id && item.id <= dropItem.id) {
    //     return {...item, id: item.id-1}
    //   }
    //   if(item.id < currentItem.id && item.id >= dropItem.id) {
    //     return {...item, id: item.id+1}
    //   }
    //   return item;
    // }))
  
  }

  const sortList = (a,b) => {
    if (a.id > b.id) {
      return 1
    } else {return -1}
  }


  function filter(list, flag) {
    switch(flag) {
      case 'active': return list.filter(item => !item.completed);
      case 'done': return list.filter(item => item.completed);
      default: return list;
    }
  }




    console.log(state,"21")
  const [counts, setCounts] = React.useState({
    toDo: state.list.filter(el => !el.completed).length, 
    done: state.list.filter(el => el.completed).length,  
    // toDo: list.filter(el => !el.completed).length, 
    // done: list.filter(el => el.completed).length, 
  })

  function getCounts() {

    setCounts(counts => {
      return { 
        toDo: state.list.filter(el => !el.completed).length, 
        done: state.list.filter(el => el.completed).length,  
      //   toDo: list.filter(el => !el.completed).length, 
      //   done: list.filter(el => el.completed).length,  
      }
    })
  }


  const [searchValue, setSearchValue] = React.useState('')

  function getSearchValue(value) {
    setSearchValue(value.toLowerCase())
  }

  function search(list, value) {
    if (!value.length) {
      return list
    }
    return list.filter(item => item.title.toLowerCase().includes(value))

  }

  const [filterValue, setFilterValue] = React.useState('') 

  function changeFilterValue(value) {
    setFilterValue(value);
  }

  const visibleList = filter(search(state.list, searchValue), filterValue)
  // const visibleList = filter(search(list, searchValue), filterValue)



  return (
    <Context.Provider value={{dragStart, dragOver, dragLeave, dragEnd, dragDrop, getCounts}}>
      {/* <ShowDate/> */}
      <div className="wrapper">
        <div className="flex">
          <BalanceWidget/>

          <TaskColors/>
          
        </div>
        <ModalAddTask addTask={addItem}/>
        <Filter changeFilter={changeFilterValue}/>
        <Counts counts={counts}/>
        <SearchPanel getValue={getSearchValue}/>
        <div style={{minHeight: '300px'}}>
          {state.list.length ? <TaskList tasks={visibleList} toggleDone={toggleDone} deleteTask={deleteItem} sortList={sortList}/> : <h1>NO PLANS!</h1>}
          {/* {list.length ? <TaskList tasks={visibleList} toggleDone={toggleDone} deleteTask={deleteItem} sortList={sortList}/> : <h1>NO PLANS!</h1>} */}

        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

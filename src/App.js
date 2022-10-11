import TaskList from "./components/TaskList";
import React from "react";
import Context from "./context";
import Filter from "./components/Filter";
import BalanceWidget from "./components/BalanceWidget";
import TaskColors from "./components/TaskColors"
import ModalAddTask from "./components/ModalAddTask";
import Counts from './components/Counts'
import SearchPanel from "./components/SearchPanel";

function App() {

  const tags = {
    notImportantNotEmergency: 0,
    importantEmergency: 1,
    importantNotEmergency: 2,
    notImportantEmergency: 3,
  }
  
  const tasks = [
    {
      id: 1,
      title: 'Buy something sweet',
      completed: false,
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

  function toggleDone(id) {
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
    

    // setState(({list}) => {
    //   return {
    //     list: list.map(item => {
    //     if(item.id === id) {
    //       item.completed = !item.completed;
    //     }
    //     return item;
    //   })
    // }
    // })
  }

  function addItem(title, tag) {

    setState(state => {
      return {
        ...state,
        list: [...state.list, {
          id: state.list.length+1,
          title: title,
          completed: false,
          hidden: false,
          tag: +tag,
        }]
      }
    })
  
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

  function dragStart(e, item) {
    setState(state => {
      return {
        ...state,
        currentItem: item,
      }
    })
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

    let result = state.list.map(item => {
      if(item.id === state.currentItem.id) {
        return {...item, id: dropItem.id}
      }
      if (item.id > state.currentItem.id && item.id <= dropItem.id) {
        return {...item, id: item.id-1}
      }
      if(item.id < state.currentItem.id && item.id >= dropItem.id) {
        return {...item, id: item.id+1}
      }
      return item;
    });

    setState(state => {
      return {
        ...state,
        list: result,
      }
    })  
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

  function getSearchValue(value) {
    setState(state => {
      return {
        ...state,
        searchValue: value.toLowerCase()
      }
    });
  }

  function search(list, value) {
    if (!value.length) {
      return list
    }
    return list.filter(item => item.title.toLowerCase().includes(value))

  }

  function changeFilterValue(value) {
    setState(state => {
      return {
        ...state,
        filterValue: value,
      }
    })
  }

  function deleteItem(id) {
    let result = state.list.filter(item => item.id !== id).map(item => {
      if(item.id > id){
        return {...item, id: item.id-1}
      }
      return item      
    });

    setState(state => {
      return {
        ...state,
        list: result,
      }
    })
  }

  const visibleList = filter(search(state.list, state.searchValue), state.filterValue)



  return (
    <Context.Provider value={{dragStart, dragOver, dragLeave, dragEnd, dragDrop}}>
      {/* <ShowDate/> */}
      <div className="wrapper">
        <div className="flex">
          <BalanceWidget/>

          <TaskColors/>
          
        </div>
        <ModalAddTask addTask={addItem}/>
        <Filter changeFilter={changeFilterValue}/>
        <Counts list={state.list}/>
        <SearchPanel getValue={getSearchValue}/>
        <div style={{minHeight: '300px'}}>
          {state.list.length ? <TaskList tasks={visibleList} toggleDone={toggleDone} deleteTask={deleteItem} sortList={sortList}/> : <h1>NO PLANS!</h1>}

        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

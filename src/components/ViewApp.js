import React from "react"
import BalanceWidget from "./BalanceWidget"
import TaskColors from "./TaskColors"
import ModalAddTask from './ModalAddTask'
import Filter from "./Filter"
import Counts from "./Counts"
import SearchPanel from "./SearchPanel"
import TaskList from "./TaskList"

export default function ViewApp({addItem, changeFilterValue, list, getSearchValue, visibleList, toggleDone, deleteItem, sortList}) {
  return (
    <div className="wrapper">
      <div className="flex">
        <BalanceWidget/>

        <TaskColors/>
          
      </div>
      <ModalAddTask addTask={addItem}/>
      <Filter changeFilter={changeFilterValue}/>
      <Counts list={list}/>
      <SearchPanel getValue={getSearchValue}/>
      <div style={{minHeight: '300px'}}>
        {list.length ? <TaskList tasks={visibleList} toggleDone={toggleDone} deleteTask={deleteItem} sortList={sortList}/> : <h1>NO PLANS!</h1>}

      </div>
    </div>
  )
}
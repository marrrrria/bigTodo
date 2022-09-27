import React from "react";
import './Modal.css'
import AddTask from "./AddTask";


export default class Modal extends React.Component {
  state = {
    isOpen: false,
    addTask: this.props.addTask,
  }

  render() {
    
    return (
      <React.Fragment>
        <button className="new-task-button" onClick={() => this.setState({isOpen: true})}>New...</button>
        { this.state.isOpen && (
            <div className="modal">
              <div className="modal-body">
                <button className="cancel-button" onClick={() => this.setState({isOpen: false})}>&times;</button>
                <h1>Modal Title</h1>
                <p>Article text</p>
                <AddTask addTask={this.state.addTask} setS={this.setState.bind(this)}/>
                
              </div>
            </div>
        )
        }
      </React.Fragment>
    )
  }
}
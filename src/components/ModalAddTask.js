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
        <button onClick={() => this.setState({isOpen: true})}>Open Modal</button>
        { this.state.isOpen && (
            <div className="modal">
              <div className="modal-body">
                <h1>Modal Title</h1>
                <p>Article text</p>
                <AddTask addTask={this.state.addTask}/>
                <button onClick={() => this.setState({isOpen: false})}>Close Modal</button>
              </div>
            </div>
        )
        }
      </React.Fragment>
    )
  }
}
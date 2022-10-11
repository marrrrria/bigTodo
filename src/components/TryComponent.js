import React, {Component} from "react";
import API from "./API";

export default class TryComponent extends Component {
  api = new API()
  
  state = {
    data: null
  }

  constructor() {
    super();
    this.updateData()
  }

  updateData() {
    this.api.getTasks().then((tasks) => this.setState({
      data: tasks,
    }))
  }

  render() {
    const {data} = this.state
    return(
      <div>
        <div>{data[0].title}</div>
      </div>
    )
  }
}
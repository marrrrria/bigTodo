import React, {Component} from "react";
import API from "./API";

export default class TryComponent extends Component {
  api = new API()
  
  state = {
    data: [],
  }

  componentDidMount() {
    this.updateData()
  }

  updateData() {
    this.api.getTasks().then((tasks) => this.setState({
      data: tasks,
    }))
  }

  render() {
    const {data} = this.state
    // console.log(data)
    return(
      <div>
        <div>{data.map(item => item.title)}</div>
      </div>
    )
  }
}
import React, { Component } from "react";
import RobotStore from "../stores/RobotStore";
import Robot from "./Robot";
import RobotForm from "./RobotForm";

class RobotList extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }
  componentDidMount() {
    this.store = new RobotStore();
    this.setState({
      robots: this.store.getRobots(),
    });
    this.store.emitter.addListener("UPDATE", () => {
      this.setState({
        robots: this.store.getRobots(),
      });
    });
  }

  onAdd(newRobot) {
    this.store.addRobot(newRobot);
  }

  render() {
    return (
      <div>
        {this.state.robots.map((e, i) => (
          <Robot item={e} key={i} />
        ))}
        <RobotForm onAdd={this.onAdd} store={this.store} />
      </div>
    );
  }
}

export default RobotList;

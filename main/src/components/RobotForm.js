import React, { Component } from "react";

class RobotForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      type: "",
      mass: "",
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => (this.name = e.target.value)}
        />
        <input
          type="text"
          placeholder="type"
          onChange={(e) => (this.type = e.target.value)}
        />
        <input
          type="text"
          placeholder="mass"
          onChange={(e) => (this.mass = e.target.value)}
        />
        <input
          type="button"
          value="add"
          onClick={() => {
            let newRobot = {};
            newRobot.name = this.state.name;
            newRobot.type = this.state.type;
            newRobot.mass = this.state.mass;
            this.props.onAdd(newRobot);
          }}
        />
      </div>
    );
  }
}

export default RobotForm;

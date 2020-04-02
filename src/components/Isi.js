import React, { Component } from "react";
import ItemAktifitas from "./ItemAktifitas";

// const data = require("./data.json"); // ambil data

class Isi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  // button component
  refresh() {
    this.setState({ refreshing: true });
  }

  // callback komponen isi
  onComponentRefresh() {
    this.setState({ refreshing: false });
  }

  render() {
    const { activities } = this.props; // ES6 destructuring
    const { refreshing } = this.state;
    return (
      <div className="content">
        <div className="line"></div>
        {activities.map(activity => (
          <ItemAktifitas activity={activity} />
        ))}
      </div>
    );
  }
}

export default Isi;

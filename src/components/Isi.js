import React, { Component } from "react";
import ItemAktifitas from "./ItemAktifitas";

// const data = require("./data.json"); // ambil data

class Isi extends Component {
  // constructor(props) {
  //   this.state = {
  //     activities: []
  //   };
  // }

  render() {
    const { activities } = this.props; // ES6 destructuring
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

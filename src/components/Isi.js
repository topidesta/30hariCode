import React, { Component } from "react";
import ItemAktifitas from "./ItemAktifitas";

class Isi extends Component {
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

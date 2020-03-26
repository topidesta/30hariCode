import React, { Component } from "react";

class Isi extends Component {
  render() {
    const { activities } = this.props; // ES6 destructuring

    return (
      <div className="content">
        <div className="line"></div>
        {/* item timeline */}
        {activities.map(activity => {
          return (
            <div key={activity.pengguna.id} className="item">
              <div className="avatar">
                <img alt={activity.text} src={activity.pengguna.avatar} /> Doug
              </div>
              <span className="time">{activity.timestamp}</span>
              <p>{activity.text}</p>
              <div className="commentCount">{activity.komentar.length}</div>
            </div>
          );
        })}

        {/* .... */}
      </div>
    );
  }
}

export default Isi;

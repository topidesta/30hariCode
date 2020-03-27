import React, { Component } from "react";

class ItemAktifitas extends Component {
  render() {
    const { activity } = this.props;
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
  }
}

export default ItemAktifitas;

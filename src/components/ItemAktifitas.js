import React, { Component } from "react";
import moment from "moment";

class ItemAktifitas extends Component {
  render() {
    const { activity } = this.props;
    return (
      <div key={activity.pengguna.id} className="item">
        <div className="avatar">
          <img alt={activity.text} src={activity.pengguna.avatar} /> Doug
        </div>
        <span className="time"> {moment(activity.created_at).fromNow()}</span>
        <p>{activity.text}</p>
        <div className="commentCount">{activity.komentar.length}</div>
      </div>
    );
  }
}

export default ItemAktifitas;

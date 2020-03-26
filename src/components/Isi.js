import React, { Component } from "react";

class Isi extends Component {
  render() {
    return (
      <div className="content">
        <div className="line"></div>
        {/* item timeline */}
        <div className="item">
          <div className="avatar">
            <img
              alt="Doug"
              src="http://www.croop.cl/UI/twitter/images/doug.jpg"
            />{" "}
            Doug
          </div>
          <span className="time">An hour ago</span>
          <p>Ate Lunch</p>
          <div className="commentCount">2</div>
        </div>
        {/* .... */}
      </div>
    );
  }
}

export default Isi;

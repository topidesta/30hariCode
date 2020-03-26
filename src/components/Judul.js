import React, { Component } from "react";

class Judul extends Component {
  render() {
    return (
      <div className="panel">
        <div className="header">
          <div className="menuIcon">
            <div className="dashTop"></div>
            <div className="dashBottom"></div>
            <div className="circle"></div>
          </div>
          <span className="title">{this.props.title}</span>
          <input type="text" className="searchInput" placeholder="Search... " />
          <div className="fa fa-search searchIcon"></div>
        </div>
      </div>
    );
  }
}

export default Judul;

import React from "react";
import "./Custom.css";
import Judul from "./components/Judul";
import Isi from "./components/Isi";

function App() {
  return (
    <div className="demo">
      <div className="notificationsFrame">
        <div className="panel">
          <Judul title="Timeline" />
          <Judul title="Profile" />
          <Judul title="Settings" />
          <Judul title="Chat" />
          <Isi />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./Custom.css";
import Judul from "./components/Judul";
import Isi from "./components/Isi";

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "Ari", text: "Me too!" }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2,
      name: "Ari",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "Nate", text: "I am so jealous" }]
  }
];

function App() {
  return (
    <div className="demo">
      <div className="notificationsFrame">
        <div className="panel">
          <Judul title="Timeline" />
          <Isi activities={activities} />
        </div>
      </div>
    </div>
  );
}

export default App;

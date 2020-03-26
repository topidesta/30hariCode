import React from "react";
import "./Custom.css";
import Judul from "./components/Judul";
import Isi from "./components/Isi";

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    pengguna: {
      id: 1,
      nama: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    komentar: [{ from: "Ari", text: "Me too!" }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    pengguna: {
      id: 2,
      nama: "Ari",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    komentar: [{ from: "Nate", text: "I am so jealous" }]
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

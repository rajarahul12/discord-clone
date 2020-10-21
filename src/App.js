import React from "react";
import "./App.css";
import Chat from "./Chat";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Chat />
    </div>
  );
}

export default App;

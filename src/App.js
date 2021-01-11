import React from "react"
import Header from "./Header"
import './App.css';
import SideBar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"

function App() {
  return (
    // BEM naming convention
    <div className="app">

      <Header />
      <div className="app_body">

        <div id="fb-root"></div>

        <SideBar />
        <Feed />
        <Widgets />


      </div>

    </div>
  );
}

export default App;

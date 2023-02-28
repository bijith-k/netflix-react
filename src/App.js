import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { action, comedy, horror, originals } from "./urls";

function App() {
  return (
    <div className="App">
       <NavBar />
       <Banner />
       <RowPost url={originals} title='Netflix Originals' />
       <RowPost url={action} title='Action' isSmall />
       <RowPost url={comedy} title='Comedy' isSmall />
       <RowPost url={horror} title='Horror' isSmall />
    </div>
  );
}

export default App;

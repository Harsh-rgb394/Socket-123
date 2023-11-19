import React from "react"
import Talk from "./pages/chat/Talk";
import Meet from "./pages/join/Meet";

import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact Component={Meet}/>
      <Route path="/chat"  Component={Talk}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App;

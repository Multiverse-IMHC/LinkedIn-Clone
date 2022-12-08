import React from "react";
import Home from "./Home/Home"
import Header from "./Home/Header"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignInPage from "./components/Login/SignInPage";

function App() {
  return( <div>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element= {<SignInPage/>}/>
    <Route path = "/home" element= {<div><Header/><Home/></div>
}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;



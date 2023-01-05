import React from "react";
import Home from "./Home/Home";
import Header from "./Home/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./components/Login/SignInPage";
import SignupForm from "./components/Signup.js/SignupForm";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="/home"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

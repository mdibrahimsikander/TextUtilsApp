import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import React, { useState } from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }); 
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#152238";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar
        title="Text Utils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes> 
          <Route path="/About" element={<About mode={mode} />}></Route>
          <Route path="/" element={<TextArea showAlert={showAlert} heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.background = "#042743"
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode"
      // setInterval(()=>{
      //   document.title = "TextUtils - is Amezing"
      // },2000)
      // setInterval(()=>{
      //   document.title = "Install TextUtils - Now"
      // },1500)
    }
    else {
      setMode("light")
      document.body.style.background = "white"
      showAlert("Light mode has been enabled", "success")
      // // document.title = "TextUtils - Light Mode"
    }
  }

  const toggleGrayMode = () => {
    if (mode === "light" || mode === "dark" || mode === "success" || mode === "danger" || mode === "warning") {
      setMode("secondary")
      document.body.style.background = "#6C757D"
      showAlert("Secondary mode has been enabled", "success")
    }
  }
  const toggleSuccessMode = () => {
    if (mode === "light" || mode === "dark" || mode === "secondary" || mode === "danger" || mode === "warning") {
      setMode("success")
      document.body.style.background = "#198754"
      showAlert("success mode has been enabled", "success")
    }
  }
  const toggleDangerMode = () => {
    if (mode === "light" || mode === "dark" || mode === "secondary" || mode === "success" || mode === "warning") {
      setMode("danger")
      document.body.style.background = "#dc3545"
      showAlert("danger mode has been enabled", "success")
    }
  }
  const toggleWarningMode = () => {
    if (mode === "light" || mode === "dark" || mode === "secondary" || mode === "success" || mode === "danger") {
      setMode("warning")
      document.body.style.background = "#ffc107"
      showAlert("warning mode has been enabled", "success")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleGrayMode={toggleGrayMode} toggleSuccessMode={toggleSuccessMode} toggleDangerMode={toggleDangerMode} toggleWarningMode={toggleWarningMode} />
          <Alert alert={alert} />
          {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */}
          {/* <About/> */}
        <Routes>
          <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert} />}/>
          <Route path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

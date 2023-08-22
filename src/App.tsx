import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Desc from "./components/Desc";
import Home from "./components/Home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Hero />
              <Desc />
            </>
          }
        />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;

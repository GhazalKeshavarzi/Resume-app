import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Education from "./pages/Education";
import Hobbies from "./pages/Hobbies";
import Language from "./pages/Language";
import Graphic from "./pages/Graphic";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="Education" element={<Education />} exact />
        <Route path="Hobbies" element={<Hobbies />} exact />
        <Route path="Language" element={<Language />} exact />
        <Route path="Graphic" element={<Graphic />} exact />
        <Route path="SignUp" element={<SignUp />} exact />
      </Routes>
    </Router>
  );
}

export default App;

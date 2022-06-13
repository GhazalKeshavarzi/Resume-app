import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Education from "./pages/Education";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="Education" element={<Education />} exact />
      </Routes>
    </Router>
  );
}

export default App;

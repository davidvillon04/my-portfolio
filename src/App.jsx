import { Routes, Route } from "react-router-dom";

// Importing the routes
import Home from "./routes/Home.jsx";
import Projects from "./routes/Projects.jsx";
import About from "./routes/About.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;

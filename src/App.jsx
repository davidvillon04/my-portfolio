import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

// Importing the routes
import Home from "./routes/Home.jsx";
import Projects from "./routes/Projects.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";

function App() {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.44)",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;

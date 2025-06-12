import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />

        {/* Adding Private Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/addproject"
          element={
            <PrivateRoute>
              <AddProject />
            </PrivateRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <PrivateRoute>
              <ProjectList />
            </PrivateRoute>
          }
        />
        <Route
          path="/skills"
          element={
            <PrivateRoute>
              <Skills />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
    
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./auth/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";

const App = () => {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

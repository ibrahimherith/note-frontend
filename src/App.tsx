import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/auth/Login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;

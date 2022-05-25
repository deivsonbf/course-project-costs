import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NewProject from "./pages/NewProject";

import Main from "./Components/layout/Main/Main";

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">New Project</Link>
      </ul>

      <Main custom="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/company" element={<Company />}></Route>
          <Route exact path="/newproject" element={<NewProject />}></Route>
        </Routes>
      </Main>

      <p>Footer</p>
    </Router>
  );
}

export default App;

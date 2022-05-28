import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NewProject from "./pages/NewProject";

import Main from "./Components/layout/Main/Main";
import Footer from "./Components/layout/Footer/Footer";
import Header from "./Components/layout/Header/Header";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Header />

      <Main custom="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/company" element={<Company />}></Route>
          <Route exact path="/project" element={<Projects />}></Route>
          <Route exact path="/newproject" element={<NewProject />}></Route>
        </Routes>
      </Main>

      <Footer />
    </Router>
  );
}

export default App;

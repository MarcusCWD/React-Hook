import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import SubmittedForm from "./pages/SubmittedForm";
// import PostPage from "./pages/PostPage";

// import react router stuff
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact Us</Link>
          </li>
          {/* <li>
            <Link to="/posts">Posts</Link>
          </li> */}
        </ul>
      </nav>
      <Routes>
        
        {/* Home route */}
        <Route path="/" element={<Home/>} />
        {/* About Us route */}
        <Route path="/about" element={<About />} />
        {/* Contact Us route */}
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/form-submitted" element={<SubmittedForm />} />

        {/* <Route path="/posts/:post_id" element={<PostPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./styles/app.scss";
import "./styles/dynamic.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dynamic from "./components/Dynamic";
import ArticleTwo from "./components/ArticleTwo";
import ArticleOne from "./components/ArticleOne";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Dynamic />} />
        <Route path="/posts" element={<Dynamic />} />
        <Route path="/posts/article-one" element={<ArticleOne />} />
        <Route path="/posts/article-two" element={<ArticleTwo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

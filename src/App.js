import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./styles/app.scss";
import "./styles/dynamic.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dynamic from "./components/Dynamic";
import ArticleTwo from "./components/ArticleTwo";
import ArticleOne from "./components/ArticleOne";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
      <ScrollToTop />
    </Router>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;

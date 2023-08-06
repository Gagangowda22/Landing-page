import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <section id="top-container">
          <h1 className="logo">Blog.</h1>
          <p>
            A statically generated blog example using{" "}
            <a href="https://nextjs.org/" target="blank">
              Next.js
            </a>{" "}
            and Markdown.
          </p>
        </section>
        <section className="main">
          <Link to={"/posts"}>
            <img
              src="https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fdynamic-routing%2Fcover.jpg&w=1920&q=75"
              alt="Cover"
            />
          </Link>
        </section>
        <section className="about">
          <div className="left">
            <Link to={"/posts"}>Dynamic Routing and Static Generation</Link>
            <p className="date">March 16, 2020</p>
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Praesent elementum facilisis leo vel fringilla est ullamcorper
              eget. At imperdiet dui accumsan sit amet nulla facilities morbi
              tempus.
            </p>
            <div className="author">
              <img
                src="https://next-blog-starter.vercel.app/assets/blog/authors/jj.jpeg"
                alt="author_logo_1"
              />
              <h3>JJ Kasper</h3>
            </div>
          </div>
        </section>
        <section className="bottom">
          <div className="title">
            <h1>More Stories</h1>
          </div>
          <div className="container">
            <div className="left">
              <Link to={"/posts/article-two"}>
                <img
                  alt="Learn How to Pre-render Pages Using Static Generation with Next.js"
                  src="https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=1920&q=75"
                  className="cover-image"
                />
              </Link>
              <Link to={"/posts/article-two"}>
                Learn How to Pre-render Pages Using Static Generation with
                Next.js
              </Link>
              <p className="date">March 16, 2020</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Praesent elementum facilisis leo vel fringilla est ullamcorper
                eget. At imperdiet dui accumsan sit amet nulla facilities morbi
                tempus.
              </p>
              <div className="author">
                <img
                  src="https://next-blog-starter.vercel.app/assets/blog/authors/tim.jpeg"
                  alt="author_another"
                />
                <p>Tim Neutkens</p>
              </div>
            </div>
            <div className="right">
              <Link to={"/posts/article-one"}>
                <img
                  src="https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fpreview%2Fcover.jpg&w=1920&q=75"
                  alt="Cover right"
                  className="cover-image"
                />
              </Link>
              <Link to={"/posts/article-one"}>
                Preview Mode for Static Generation
              </Link>
              <p className="date">March 16, 2020</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Praesent elementum facilisis leo vel fringilla est ullamcorper
                eget. At imperdiet dui accumsan sit amet nulla facilities morbi
                tempus.
              </p>
              <div className="author">
                <img
                  src="https://next-blog-starter.vercel.app/assets/blog/authors/joe.jpeg"
                  alt="author_one_more"
                />
                <p>Joe Haddad</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

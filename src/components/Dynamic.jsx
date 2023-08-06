import React from "react";
import { Link } from "react-router-dom";

const Dynamic = () => {
  return (
    <main>
      <h2 className="logo-dynamic">
        <Link to={"/"}>Blog.</Link>
      </h2>
      <article>
        <div className="title">Dynamic Routing and Static Generation</div>
      </article>
      <div className="author">
        <img
          src="https://next-blog-starter.vercel.app/assets/blog/authors/jj.jpeg"
          alt="author_logo_1"
        />
        <h3>JJ Kasper</h3>
      </div>
      <div className="main">
        <img
          src="https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fdynamic-routing%2Fcover.jpg&w=1920&q=75"
          alt="cover"
        />
      </div>
      <div className="article">
        <p className="date">March 16, 2020</p>
        <p className="first">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
          elementum facilisis leo vel fringilla est ullamcorper eget. At
          imperdiet dui accumsan sit amet nulla facilities morbi tempus.
          Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus
          aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa
          ultricies.
        </p>
        <p className="second">
          Venenatis cras sed felis eget velit. Consectetur libero id faucibus
          nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus
          egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id
          aliquet risus feugiat in ante metus dictum at tempor. Sed blandit
          libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed
          adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum
          neque egestas congue quisque egestas diam in arcu. Nisi lacus sed
          viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan
          tortor posuere ac ut consequat semper viverra. Fringilla ut morbi
          tincidunt augue interdum velit euismod.
        </p>
        <h2 className="title">Lorem Ipsum</h2>
        <p>
          Tristique senectus et netus et malesuada fames ac turpis. Ridiculous
          mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis
          nunc sed id semper. Egestas tellus rutrum tellus pellentesque.
          Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis
          blandit turpis cursus in hac habitasse platea dictumst quisque. Eros
          donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor
          consequat id porta nibh. Adipiscing elit duis tristique sollicitudin
          nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut
          tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia
          at quis risus sed vulputate.
        </p>
      </div>
    </main>
  );
};

export default Dynamic;

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h3 className="footer-title">Statically Generated with Next.js.</h3>
        <div className="footer-right">
          <div className="buttons-container">
            <a
              href="https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts"
              target="blank"
              className="button"
            >
              Read Documentation
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
              target="blank"
              className="github"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

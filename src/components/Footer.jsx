import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <p>Ratio Calculator</p>
      <p>© 2025 Ratio Calculator. All rights reserved.</p>

      <div className="footer-meta">
        <a
          href="https://github.com/do-haru/ratiocalc.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <span className="footer-divider">|</span>
        <span className="footer-version">Version 1.0.0</span>
      </div>
      <p className="footer-email">doharu05@naver.com</p>
    </footer>
  );
};

export default Footer;

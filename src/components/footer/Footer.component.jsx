export default function Footer() {
  return (
    <footer className="footer">
      <ul className="sections">
        <li className="section social">
          <h3>Follow Me</h3>
          <a href="https://github.com/AlexRamosGlz" target="_blank">
            <img
              src="https://img.icons8.com/?size=100&id=106562&format=png&color=e2e2e2"
              alt="github logo"
            ></img>
            <p>GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/jorge-ramos-gonzalez/"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/?size=100&id=8808&format=png&color=e2e2e2"
              alt="linkedIn logo"
            />
            <p>LinkedIn</p>
          </a>
        </li>
        <li className="section legal">
          <h3>Legal</h3>
          <ul className="section-options">
            <li>
              <a>Privacy</a>
            </li>
            <li>
              <a>Cookies</a>
            </li>
          </ul>
        </li>
        <li className="section Privacy">
          <h3>Privacy</h3>
          <ul className="section-options">
            <li>
              <a>Conditions</a>
            </li>
            <li>
              <a>Permitions</a>
            </li>
            <li>
              <a>Contract</a>
            </li>
            <li>
              <a>Provacy Policy</a>
            </li>
          </ul>
        </li>
        <li className="section company">
          <h3>Company</h3>
          <ul className="section-options">
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Work with us</a>
            </li>
          </ul>
        </li>
      </ul>
      <p className="copyright">&copy; Copyright 2024. All right reserved</p>
    </footer>
  );
}

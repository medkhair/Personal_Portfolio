import Inner from "./Inner";

function Footer({ person }) {
    return (
        <footer>
            <Inner className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-logo">
                        {person.firstName} {person.lastName}
                    </h3>
                    <p className="footer-tagline">{person.title}</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#projects-part-1">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect With Me</h4>
                    <div className="footer-social">
                        <a
                            href="https://github.com/medkhair"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <i className="bi bi-github"></i>
                        </a>
                        <a
                            href="https://ma.linkedin.com/in/mohammed-khair-souiba-32a59632b"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/medkhair.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="mailto:souibamohammedkhair@gmail.com" aria-label="Email">
                            <i className="bi bi-envelope"></i>
                        </a>
                    </div>
                </div>
            </Inner>

            <div className="footer-bottom">
                <Inner className="footer-bottom-content">
                    <p>
                        © 2025 {person.firstName} {person.lastName}. All rights
                        reserved.
                    </p>
                    <p>
                        Crafted with{" "}
                        <i className="bi bi-heart-fill"></i> and{" "}
                        <i className="bi bi-cup-hot-fill"></i>
                    </p>
                </Inner>
            </div>
        </footer>
    );
}

export default Footer;
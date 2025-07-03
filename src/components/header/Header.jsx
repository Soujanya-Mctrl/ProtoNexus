import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Soujanya</a>

                <div className="nav_menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i class="fi fi-rs-home"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i class="fi fi-rs-user"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i class="fi fi-rs-document"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i class="fi fi-rs-mountains"></i>Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i class="fi fi-rs-paper-plane"></i>Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
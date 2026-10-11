import { useState } from 'react'
import './navbar.css'

function Navbar({
    theme,
    toggleTheme,
    lang,
    toggleLang,
    site_name,
    routes,
    activeSection
}) {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <nav>
            <div className="nav__container">

                <a
                    href="#home"
                    className={`site_title ${
                        activeSection === 'home' ? 'active' : ''
                    }`}
                    onClick={closeMenu}
                >
                    {site_name}
                </a>

                <button
                    className="menu-toggle"
                    aria-label={
                        lang === 'fa'
                            ? 'باز کردن منو'
                            : 'Open menu'
                    }
                    onClick={() => setMenuOpen(prev => !prev)}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                <div className={`links ${menuOpen ? 'active' : ''}`}>

                    {routes.map((element) => {
                        const sectionId = element.href.slice(1)
                        const isActive = activeSection === sectionId

                        return (
                            <a
                                key={element.href}
                                href={element.href}
                                className={`nav__links ${
                                    isActive ? 'active' : ''
                                }`}
                                aria-current={
                                    isActive ? 'location' : undefined
                                }
                                onClick={closeMenu}
                            >
                                {element.name}
                            </a>
                        )
                    })}

                    <div className="nav-actions">

                        <button
                            className="nav-btn lang-btn"
                            onClick={toggleLang}
                            aria-label="Change language"
                        >
                            {lang === 'fa' ? 'EN' : 'FA'}
                        </button>

                        <button
                            className="nav-btn theme-btn"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
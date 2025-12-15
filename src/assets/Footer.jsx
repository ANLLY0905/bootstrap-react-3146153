import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer-visumbrio">

            {/* ICONOS */}
            <div className="footer-icons">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-facebook"></i>
            </div>

            {/* LINKS */}
            <div className="footer-links">
                <span>Ayuda</span>
                <span className="divider">|</span>
                <span>Términos</span>
                <span className="divider">|</span>
                <span>Privacidad</span>
            </div>

            {/* COPYRIGHT */}
            <p className="footer-copy">
                © 2024 VISUMBRIO. All rights reserved.
            </p>

        </footer>

    )
}


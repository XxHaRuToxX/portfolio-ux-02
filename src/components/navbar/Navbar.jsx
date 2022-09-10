import React, { useState } from 'react';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/esj-7-logo.png';
import './navbar.css';

const Menu = () => (
    <>
        <p><a href="#home">Inicio</a></p>
        <p><a href="#wgpt3">¿Qué es ESJ-7?</a></p>
        <p><a href="#possibility">Resume</a></p>
        <p><a href="#features">Estudios</a></p>
        <p><a href="#blog">Librerías</a></p>
    </>
)

export const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3-navbar">
            <div className="gpt3-navbar-links">
                <div className="gpt3-navbar-links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3-navbar-links-container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3-navbar-sign">
                <p>Sign in</p>
                <button type={"button"} >Sign up</button>
            </div>
            <div className="gpt3-navbar-menu">
                {
                    toggleMenu
                        ? (<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />)
                        : (<RiMenu2Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />)
                }
                {
                    toggleMenu && (
                        <div className="gpt3-navbar-menu-container scale-up-center" >
                            <div className="gpt3-navbar-menu-container-links">
                                <Menu />
                                <div className="gpt3-navbar-menu-container-links-sign">
                                    <p>Sign in</p>
                                    <button type={"button"} >Sign up</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
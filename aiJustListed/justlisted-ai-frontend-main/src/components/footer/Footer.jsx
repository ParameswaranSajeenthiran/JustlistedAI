import React from 'react'
import "./footer.scss"
import { NAVITEM1 } from '../../utils/navitem/navItem'
import { NavLink, Link } from 'react-router-dom'
import logo from "../../assets/logo.png"

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="container-row">
                    <div className="nvigations">
                        <img src={logo} alt="" />
                        <div className="footer-nav-links">
                            {NAVITEM1.map((ITEM, i) => (
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-buttonactive " : ""
                                } key={i} to={ITEM.PATH}>
                                    {ITEM.TITLE}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="subscribe">
                        <label htmlFor="">Newsletter</label>
                        <form >
                            <input type="email" placeholder='johndoe@shuffle.dev' />
                            <button type='submit'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="terms-rights">
                    <div className="rights">
                        © 2021 Flex. All rights reserved.
                    </div>
                    <div className="nav-terms">
                        <Link to={"term"}>Term</Link>
                        <Link to={"Privacy"}>Privacy</Link>
                        <Link to={"Cookies"}>Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

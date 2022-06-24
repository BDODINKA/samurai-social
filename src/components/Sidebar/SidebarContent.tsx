import React from "react";
import {NavLink} from "react-router-dom";


export const SidebarContent = () => {
    return (
        <nav className="sidebar__nav">

            <ul>
                <li className="Sidebar__item">
                    <NavLink to='/Main'>Home</NavLink>
                </li>
                <li className="Sidebar__item">
                    <NavLink to='/Events'>Event</NavLink>
                </li>
                <li className="Sidebar__item">
                    <NavLink to='/MarketPlace'>MarketPlace</NavLink>
                </li>
                <li className="Sidebar__item">
                    <NavLink to='/Files'>Files</NavLink>
                </li>
                <li className="Sidebar__item">
                    <NavLink to='/Friends'>Friends</NavLink>
                </li>
            </ul>
        </nav>
    )
}
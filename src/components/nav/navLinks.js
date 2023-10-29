import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ tabs }) => {
    return(
        <div className="container">
            <ul className="nav">
                {tabs.map((tab) => (
                    <li key={tab.id}>
                        <NavLink to={`/${tab.id}`}>
                        {tab.title}
                        </NavLink>
                    </li> 
                ))}
            </ul>
        </div>
    )
};

export default NavLinks;

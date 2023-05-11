/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) => isActive ? "active me-4" : "text-decoration-none me-4"}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
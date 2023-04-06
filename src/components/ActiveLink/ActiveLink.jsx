import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "border-bottom border-warning border-4 text-warning text-decoration-none"
                    : "text-decoration-none"}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
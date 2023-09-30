import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LogoutBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    
    const state = useSelector((state)=> state.setItem)
    return (
        <>
            <NavLink to="/" className="btn btn-outline-dark ms-2">
                <span className="fa fa-log-out me-1"></span> Logout ({state?.length})
            </NavLink>
        </>
    )
}

export default LogoutBtn
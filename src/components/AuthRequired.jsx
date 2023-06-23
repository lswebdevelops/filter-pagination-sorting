import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
    // Fake authentification
    const isLoggedIn = true;
        // if the user is not logged in 
    if (!isLoggedIn) {
        // redirect them to the / login route 
        return <Navigate to="/login" />
    }
    // otherwise: 
    return(
        <h2><Outlet /></h2>
    )

}



import React from 'react';
import { Navigate, Outlet } from 'react-router';

const Authorization = ({allowedRole}) => {

    const role = localStorage.getItem('role') //author

    return (
        <>
            {role ==  allowedRole  ? <Outlet/> : <Navigate to={'/unauthorized'}/> }
        </>
    );
}

export default Authorization;

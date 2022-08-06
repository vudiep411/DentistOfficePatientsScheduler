import { Navigate } from 'react-router-dom';

import React from 'react';

export function PrivateRoute({children}) {
    const user = JSON.parse(localStorage.getItem('profile'))
return user ? children : <Navigate to="/login"/>
}
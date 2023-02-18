import React from 'react';
import {useAuthContext} from "../components/context/AuthContext";
import {Navigate} from "react-router-dom";

function ProtectedRoute({children, requireAdmin}) {
  const {user} = useAuthContext();

  if(!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace={true}/>
  }
  return children
}

export default ProtectedRoute;
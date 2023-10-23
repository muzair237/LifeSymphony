import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuthProtection = (Component) => {
  return (props) => {
    const authUser = sessionStorage.getItem('authUser');

    if (authUser) {
      // If the user is logged in, prevent access to the login page
      return <Navigate to="/dashboard" />;
    }

    // If the user is not logged in, render the component
    return <Component {...props} />;
  };
};

export default withAuthProtection;

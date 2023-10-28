import React from 'react';
import { Navigate } from 'react-router-dom';

const withOTPProtection = (Component) => {
  return (props) => {
    const authUser = sessionStorage.getItem('authUser');
    const otpAddress = sessionStorage.getItem('otpAddress');
    const page = window.location.pathname;
    const otpConfirmed = sessionStorage.getItem('otpConfirmed');

    if (authUser) {
      // If the user is logged in, prevent access to the login page
      return <Navigate to="/dashboard" />;
    }

    if (!otpAddress) {
      // If the "otpAddress" is not present, redirect to the login page
      return <Navigate to="/login" />;
    }

    if (page === '/updatePassword' && !otpConfirmed) {
      // If the page is '/updatePassword' and 'otpConfirmed' is false, redirect to the login page
      return <Navigate to="/login" />;
    }

    // If the user is not logged in, "otpAddress" is present, and conditions are satisfied, render the component
    return <Component {...props} />;
  };
};

export default withOTPProtection;

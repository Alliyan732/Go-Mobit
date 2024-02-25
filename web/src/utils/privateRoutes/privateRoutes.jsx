import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute(props) {
    const navigate = useNavigate();

    useEffect(() => {
      const isAuthenticated = sessionStorage.getItem("authenticated");
  
      if (!isAuthenticated) {
        navigate('/signin');
      }
    }, [navigate]);


  const { Component } = props;

  return (
    <div>
      <Component />
    </div>
  );
}

export default PrivateRoute;

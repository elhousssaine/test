import { useSelector } from "react-redux";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import React, { useEffect } from "react";

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();


  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  // show unauthorized screen if no user is found in redux store
  if (!isAuthenticated) {
    
    return (
      <div className="unauthorized">
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to="/login">Login</NavLink> to gain access
        </span>
      </div>
    );
  }
  

  return children;
};

export default RequireAuth;

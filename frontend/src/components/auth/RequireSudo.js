import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const RequireSudo = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { userInfo } = useSelector((state) => state.auth);

  // show unauthorized screen if is not admin in redux store
  if (!userInfo.isAdmin)
    return (
      <div className="unauthorized">
        <h1>
          Unauthorized
          <br />
          contact the admin
        </h1>
      </div>
    );

  return children;
};

export default RequireSudo;

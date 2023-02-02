import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const AdminRestrict = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  //the admin have no acees in those pages
  if (userInfo.isAdmin) {
    return (
      <div className="unauthorized">
        <h2>Admin can't upload or consult projects or blogs</h2>
        <span>Logout and connect as normal user</span>
      </div>
    );
  }
  return children;
};

export default AdminRestrict;

import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h2>SideBar: AdminLayout</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;

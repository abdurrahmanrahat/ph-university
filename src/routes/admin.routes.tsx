import AdminDashboard from "../pages/admin/AdminDashboard/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent/CreateStudent";

export const adminPaths = [
  {
    index: true,
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: "create-student",
    element: <CreateStudent></CreateStudent>,
  },
  {
    path: "create-admin",
    element: <CreateAdmin></CreateAdmin>,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty></CreateFaculty>,
  },
];

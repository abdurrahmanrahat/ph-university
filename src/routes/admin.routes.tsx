import AdminDashboard from "../pages/admin/AdminDashboard/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent/CreateStudent";

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: <CreateStudent />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Offered Course",
        path: "/admin/offered-course",
        element: <CreateAdmin />,
      },
    ],
  },
];

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
    path: "create-admin",
    element: <CreateAdmin></CreateAdmin>,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty></CreateFaculty>,
  },
  {
    path: "create-student",
    element: <CreateStudent></CreateStudent>,
  },
];

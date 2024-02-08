import FacultyDashboard from "../pages/faculty/FacultyDashboard/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse/OfferedCourse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];

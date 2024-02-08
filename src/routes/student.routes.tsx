import OfferedCourse from "../pages/student/OfferedCourse/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];

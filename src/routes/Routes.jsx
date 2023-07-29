import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../layout/Login";
import SignUp from "../layout/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Home from "../pages/Home/Home";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import StudentHome from "../pages/Dashboard/StudentDashboard/StudentHome";
import SelectedClasses from "../pages/Dashboard/StudentDashboard/SelectedClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/student-home",
        element: <StudentHome></StudentHome>,
      },
      {
        path: "/dashboard/selectedClasses",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "/dashboard/enrolled-classes",
        element: <SelectedClasses></SelectedClasses>,
      },
    ],
  },
]);

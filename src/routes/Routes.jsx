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
import AdminHome from "../pages/Dashboard/AdminDashboard/AdminHome";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers";
import StudentRoute from "./StudentRoute";
import InstructorHome from "../pages/Dashboard/InstructorDashboard/InstructorHome";
import AdminRoute from "./AdminRoute";
import EnrolledClasses from "../pages/Dashboard/StudentDashboard/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/StudentDashboard/Payment/PaymentHistory";
import Payment from "../pages/Dashboard/StudentDashboard/Payment/Payment";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../pages/Dashboard/InstructorDashboard/MyClasses";
import AddClass from "../pages/Dashboard/InstructorDashboard/AddClass";

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
      // student routes
      {
        path: "/dashboard/student-home",
        element: (
          <StudentRoute>
            <StudentHome></StudentHome>
          </StudentRoute>
        ),
      },
      {
        path: "/dashboard/selectedClasses",
        element: (
          <StudentRoute>
            <SelectedClasses></SelectedClasses>
          </StudentRoute>
        ),
      },
      {
        path: "/dashboard/enrolled-classes",
        element: (
          <StudentRoute>
            <EnrolledClasses></EnrolledClasses>
          </StudentRoute>
        ),
      },
      {
        path: "/dashboard/payment-history",
        element: (
          <StudentRoute>
            <PaymentHistory></PaymentHistory>
          </StudentRoute>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
      // admin routes
      {
        path: "/dashboard/admin-home",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-classes",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      // instructor routes
      {
        path: "/dashboard/instructor-home",
        element: (
          <InstructorRoute>
            <InstructorHome></InstructorHome>
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/my-classes",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/add-class",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/Home/Home";
import Login from "../page/Shared/LogIn/Login";
import Signup from "../page/Shared/Singup/Signup";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import ClassesPage from "../page/Home/ClassesPage/ClassesPage";
import InstructorsPage from "../page/Home/InstructorsPage/InstructorsPage";
import Dashboard from "../layouts/Dashboard";
import ManageUsers from "../page/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../page/Dashboard/Admin/ManageClasses/ManageClasses";
import AddClass from "../page/Dashboard/Instuctors/AddClass/AddClass";
import MyClasses from "../page/Dashboard/Instuctors/MyClasses/MyClasses";
import SeclectedClass from "../page/Dashboard/Student/SeclectedClass/SeclectedClass";
import PaymentHistory from "../page/Dashboard/Student/PaymentHistory/PaymentHistory";
import EnrolledClass from "../page/Dashboard/Student/EnrolledClass/EnrolledClass";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "/classes",
        element: <ClassesPage />,
      },
      {
        path: "/instructors",
        element: <InstructorsPage />,
      },
    ]},
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
        {
          path: "manageusers",
          element: <ManageUsers />,
        },
        {
          path: "manageclass",
          element: <ManageClasses/>
        },
        {
          path: "addclass",
          element: <AddClass/>
        },
        {
          path: "myclasses",
          element: <MyClasses/>
        },
        {
          path: "seclectedClass",
          element: <SeclectedClass/>
        },
        {
          path: "phistroy",
          element: <PaymentHistory/>
        },
        {
          path: "enrolledclass",
          element: <EnrolledClass/>
        }
      ],
    },
]);

export default router;

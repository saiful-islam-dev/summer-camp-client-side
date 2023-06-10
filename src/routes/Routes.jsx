import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/Home/Home";
import Login from "../page/Shared/LogIn/Login";
import Signup from "../page/Shared/Singup/Signup";
import ErrorPage from "../page/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: 'signup',
          element: <Signup/>
        },
      ]
    },
  ]);
  
export default router;
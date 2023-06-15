import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import Classes from "../pages/Classes/Classes";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import Instructors from "../pages/Instructors/Instructors";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import Payment from "../pages/Dashboard/Payment/Payment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "classes",
        element: (
          
            <Classes></Classes>
         
        ),
      },
      {
        path: "instructor",
        element: <PrivateRoutes> <Instructors></Instructors></PrivateRoutes>,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      //  student dashboard
      {
        path: "selectedClass",

        element: <SelectedClass></SelectedClass>,
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>
       
      },

      // instructor Routes
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },

      // Admin Routes
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "manageClass",
        element: <ManageClasses></ManageClasses>,
      },
    ],
  },
]);

export default router;

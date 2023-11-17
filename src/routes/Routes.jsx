import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RoomDetails from "../components/RoomDetails/RoomDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/roomDetails/:id",
        element: <RoomDetails></RoomDetails>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
]);

export default router;
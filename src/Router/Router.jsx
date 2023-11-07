import { createBrowserRouter } from "react-router-dom";
import Root from "../Mainlayout/Root";
import Home from "../Pages/Homepage/Home";
import Error from "../Pages/Errorpage/Error";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Availablefoods from "../Components/Availablefoods";
import Addfoods from "../Components/AddFoods";
import Foodrequest from "../Components/FoodRequest";
import Managefoods from "../Components/ManageFoods";
import Privetrout from "./Privetrout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/availablefoods",
                element: <Privetrout><Availablefoods></Availablefoods></Privetrout>,
            },
            {
                path: "/addfood",
                element: <Privetrout><Addfoods></Addfoods></Privetrout>,
            },
            {
                path: "/managefoods",
                element: <Privetrout><Managefoods></Managefoods></Privetrout>,
            },
            {
                path: "/foodrequest",
                element: <Foodrequest></Foodrequest>,
            },
            {
                path: "/login",
                element:<Login></Login>,
            },
            {
                path: "/signup",
                element:<Signup></Signup>,
            },
        ]
    },

])

export default router;

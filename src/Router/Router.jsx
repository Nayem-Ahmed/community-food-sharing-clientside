import { createBrowserRouter } from "react-router-dom";
import Root from "../Mainlayout/Root";
import Home from "../Pages/Homepage/Home";
import Error from "../Pages/Errorpage/Error";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Addfoods from "../Components/AddFoods";
import Foodrequest from "../Components/FoodRequest";
import Managefoods from "../Components/ManageFoods";
import Privetrout from "./Privetrout";
import AvailableFoods from "../Components/AvailableFoods";
import Singlepage from "../Components/Singlepage";
import Manage from "../Components/Manage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                loader:()=>fetch('https://commuinity-food-server.vercel.app/addfoods'),
                element: <Home></Home>,
            },
            {
                path: "/availablefoods",
                loader:()=>fetch('https://commuinity-food-server.vercel.app/addfoods'),
                element:<AvailableFoods></AvailableFoods>,
            },
            {
                path: "/addfood",
                element: <Privetrout><Addfoods></Addfoods></Privetrout>,
            },
            {
                path: "/managefoods",
                loader:()=>fetch('https://commuinity-food-server.vercel.app/addfoods'),
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
            {
                path: "/singlepagedetails/:id",
                loader:({params})=> fetch(`https://commuinity-food-server.vercel.app/addfoods/${params.id}`),
                element:<Privetrout><Singlepage></Singlepage> </Privetrout>,
            },
            {
                path: "/manage/:id",
                loader:({params})=> fetch(`https://commuinity-food-server.vercel.app/addfoods/${params.id}`),
                element:<Privetrout><Manage></Manage></Privetrout>,
            },
        ]
    },

])

export default router;

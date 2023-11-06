import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Homepage/Navbar";
import Footer from "../Pages/Footer";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
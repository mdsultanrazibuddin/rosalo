import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default Main;
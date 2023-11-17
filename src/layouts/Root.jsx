import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
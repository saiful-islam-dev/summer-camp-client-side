import { Outlet } from "react-router-dom";
import Footer from "../page/Shared/Footer/Footer";
import Navbar from "../page/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className="md:min-h-[calc(100vh-341px)]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;
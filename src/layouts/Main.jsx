import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;
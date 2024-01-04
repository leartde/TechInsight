import { Outlet } from "react-router-dom";
import "./index.css";
import "./app.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
    return ( 
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
}
 
export default App;
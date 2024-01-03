import { Outlet } from "react-router-dom";
import "./index.css";
import "./app.css";
import Navbar from "./components/Navbar";
const App = () => {
    return ( 
        <>
        <Navbar/>
        <Outlet/>
        </>
    );
}
 
export default App;
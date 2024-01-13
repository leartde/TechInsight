import { Outlet } from "react-router-dom";
import "./index.css";
import "./app.css";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
const App = () => {
    return ( 
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </LocalizationProvider >
    );
}
 
export default App;
import { Outlet } from "react-router-dom";
import "./index.css";
import "./app.css";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    return ( 
       
       <div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            
            <Navbar/>
            <Outlet/>
            <Footer/>
            
            </LocalizationProvider >
            <ToastContainer
        autoClose={2000}
        position='top-left'
        />
       </div>
        
    );
}
 
export default App;
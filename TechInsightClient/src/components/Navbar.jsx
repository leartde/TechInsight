import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaFacebook, FaXmark } from "react-icons/fa6";
import { FaDribbble} from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { useState } from "react";
import Cookies from "universal-cookie";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("token");


    console.log(isMenuOpen);
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/discover", link: "Discover"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/contact", link: "Contact"},
    ];
    return (
        <header className="bg-white text-gray-400 fixed top-0 left-0 right-0 shadow z-50">
            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                <a href="/" className="text-xl font-bold text-gray-400 "> Tech<span className="text-[#009bd6]">Insight</span></a>
                {/* nav items for large devies */}
                <ul className="md:flex gap-12 text-lg hidden">
                    {
                        navItems.map((item)=><li key={item.link} className="text-gray-400 hover:text-gray-600"> <NavLink className={({ isActive, isPending, isTransitioning }) =>
                            [
                                isPending ? "pending" : "",
                                isActive ? "active" : "",
                                isTransitioning ? "transitioning" : "",
                            ].join(" ")
                        }
                       
                        to={item.path}> {item.link} </NavLink> </li>)
                    }
                </ul>
                {/* {menu icons} */}
                <div className="text-gray-600 md:flex gap-4 items-center hidden">
                    {/* <a href="https://www.facebook.com" className="hover:text-[#009bd6]"> <FaFacebook/> </a>
                    <a href="https://dribbble.com" className="hover:text-[#009bd6]"> <FaDribbble/> </a>
                    <a href="https://x.com/" className="hover:text-[#009bd6]"> <FaTwitter/> </a> */}
    
                   {
                    token? <button onClick={()=>{
                        cookies.remove("token");
                        navigate("/")
                    }} className="bg-[#009bd6] px-6 py-2 font-medium rounded hover:bg-[#4597b8]
                    transition-all duration-20 ease-in text-white
    
                    " > Logout</button>: <Link to='/login' className="bg-[#009bd6] px-6 py-2 font-medium rounded hover:bg-[#4597b8]
                    transition-all duration-20 ease-in text-white
    
                    " > Log In</Link>
                   }
                </div>
    
                {/* mobile menu button */}
                <div className="text-gray-400 md:hidden">
                    <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className="cursors-pointer">
                        {
                            isMenuOpen? <FaXmark className="w-5 h-5"/> : <FaBars className="w-5 h-5"/>
                        }
    
                         </button>
                </div>
    
                {/* mobile menu  */}
                <div className="absolute">
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white
                
                ${isMenuOpen?"fixed top-0 left-0 w-full transition-all ease-out":"hidden"}`}>
                    {
                        navItems.map((item)=><li key={item.link} onClick={()=>setIsMenuOpen(false)} className="text-black"> <NavLink to={item.path}> {item.link} </NavLink> </li>)
                    }
                </ul>
    
                </div>
                
            </nav>
        </header>
    );
}
 
export default Navbar;
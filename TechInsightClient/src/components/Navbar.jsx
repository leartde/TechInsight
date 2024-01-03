import { NavLink } from "react-router-dom";
import { FaBars, FaFacebook, FaXmark } from "react-icons/fa6";
import { FaDribbble} from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    console.log(isMenuOpen);
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/example", link: "Example"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/contact", link: "Contact"},
    ]
    return (
       <header className="bg-black text-white fixed top-0 left-0 right-0">
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center ">
            <a href="/" className="text-xl font-bold text-white "> Tech<span className="text-orange-500">Insight</span></a>
            {/* nav items for large devies */}
            <ul className="md:flex gap-12 text-lg hidden">
                {
                    navItems.map((item)=><li key={item.link} className="text-white"> <NavLink className={({ isActive, isPending, isTransitioning }) =>
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
            <div className="text-white md:flex gap-4 items-center hidden">
                <a href="/" className="hover:text-orange-500"> <FaFacebook/> </a>
                <a href="/" className="hover:text-orange-500"> <FaDribbble/> </a>
                <a href="/" className="hover:text-orange-500"> <FaTwitter/> </a>
                <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500
                transition-all duration-20 ease-in 

                "> Log In</button>
            </div>

            {/* mobile menu button */}
            <div className="text-white md:hidden">
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
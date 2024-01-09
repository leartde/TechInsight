import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaFacebook, FaXmark } from "react-icons/fa6";
import { FaDribbble} from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Cookies from "universal-cookie";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("token");
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeDropdown = () => {
    setIsAvatarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


    console.log(isMenuOpen);
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/discover", link: "Discover Users"},
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
  {token ? (
    <div className="relative">
      <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        ref={dropdownRef}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={token.profilePicUrl}
        alt="User dropdown"
        onClick={() => setIsAvatarOpen(!isAvatarOpen)}
        onClickAway={() => setIsAvatarOpen(!isAvatarOpen)}
        
      />

      <div
        id="userDropdown"
        className={' absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 ' + (isAvatarOpen ? 'block' : 'hidden')}
      >
        <div className="px-4 py-3 text-sm text-gray-900 ">
          <div>{token.username}</div>
          <div className="font-medium truncate">{token.email}</div>
        </div>

        <div className="py-2 ">
            <Link to={`/profile/${token.id}`} className="block px-4 py-2 text-sm text-gray-700   hover:bg-gray-600  hover:text-white"> Profile Page </Link>
        </div>
        {
          token.userRole == 1 && <div className="py-2">
          <Link className="block px-4 py-2 text-sm text-gray-700   hover:bg-gray-600  hover:text-white" to ={`/dashboard`}> Dashboard </Link>
        </div>
        }

        <div className="py-1  w-full">
          <button onClick={() => {
            cookies.remove("token");
            navigate("/");
            setIsAvatarOpen(false);
          }}
            className="w-full text-left px-4   py-2 text-sm text-gray-700 hover:bg-gray-600  dark:hover:text-white">
            Sign out
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Link
      to="/login"
      className="bg-[#009bd6] px-6 py-2 font-medium rounded hover:bg-[#4597b8] transition-all duration-20 ease-in text-white"
    >
      Log In
    </Link>
  )}
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
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import dashome from "/images/dashome.png"
import dashbook from "/images/dashbook.png"
import dashactivity from "/images/dashactivity.png"
import dashwallet from "/images/dashwallet.png"
import dashset from "/images/dashset.png"
import dashdisimg from "/images/dashdisimg.png"
import dashlogout from "/images/dashlogout.png"
import Home from "../Pages/Home";
import Support from "../Pages/Support" 

const Sidebar = () => {
    const navlinks = [
        { name: "Dashboard", image: dashome , path: "/" },
        { name: "Project", image: dashbook, path: "/project" },
        { name: "Activities", image: dashactivity, path: "/activities" },
        { name: "Billing", image: dashwallet, path: "/billing" },
      ];                                                                                                                                                                                                            
    return(


        <div className="fixed w-[25%] min-h-screen h-full flex flex-col justify-between text-white p-6">
        <div className="w-[30%] [h-30%] flex flex-col">
        <img src="/images/nlogo.png" alt="the nhub logo" className="pl-2" />
          <nav className={`pt-[1rem]   w-full text-white `}>
            <ul className="flex flex-col gap-[0.8rem] items-center w-full">
              {navlinks.map(({ name, path, image }, index) => (
                <li key={index} className="w-full">
                  <NavLink
                    to={path}
                    onClick={() => window.scroll(0, 0)}
                    className={({ isActive }) =>
                      isActive
                        ? " bg-gray-800  flex w-[180px] items-center rounded-lg  gap-3 p-5"
                        : "hover:bg-gray-800 w-[180px] rounded-lg flex items-center gap-3 p-5"
                    }
                  >
                    <img src= {image}  />

                      <p>{name}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
  
  <div className="flex flex-col justify-between gap-9 ">
  <div className="flex flex-col gap-8">
        <Link to={""}>
 <div className="flex">
         <img src={dashlogout} alt="" />
        <h1>Log Out</h1>
    </div>
    </Link>

     <Link to="/support">
     <div className="flex">
         <img src= {dashset} alt="" />
        <h1>Support</h1>
    </div>
    </Link>
    </div>


<Link to="/settings"
 className={({ isActive }) =>
  isActive ? "bg-gray-800 flex w-[180px] items-center rounded-lg gap-3 p-5" :
  "hover:bg-gray-800 w-[180px] rounded-lg flex items-center gap-3 p-5"
}
onClick={() => setIsActive(!isActive)}

>
     <div className="flex gap-2">
        <div>
        <img src= {dashdisimg} alt="" />
        </div>
      <div>
       <h1>John Doe</h1>
        <p>Johndoe@gmail.com</p>
       </div>
     </div>
     </Link>
     </div>

      </div>





    );
};

export default Sidebar;
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { PiBell } from "react-icons/pi";

const DashboardHeader = ({ className }) => {
  const location = useLocation();
  const [path, setPath] = useState("");
  // console.log(location.pathname)
  useEffect(() => {
    const currentLocation = location.pathname;
    setPath(currentLocation);
  }, [location.pathname]);

  const pathfinder = [
    {
      id: 1,
      path: "/",
      text: "Dashboard",
    },
    {
      id: 2,
      path: "project",
      text: "Project",
    },
    {
      id: 3,
      path: "activities",
      text: "Activities",
    },
    {
      id: 4,
      path: "billing",
      text: "Billings",
    },
    {
      id: 5,
      path: "support",
      text: "Support",
    },
    {
      id: 6,
      path: "settings",
      text: "Settings",
    },
    {
      id: 7,
      path: "personalinformation",
      text: "Settings / personal information",
    },
    {
      id: 8,
      path: "notification",
      text: "Settings / notification prefrence",
    },
    {
      id: 9,
      path: "security",
      text: "Settings / security",
    },
  ];
  return (
    <header
      className={`px-10 py-5 flex justify-between w-full text-white bg-black ${className}`}
    >
      
      <div >
        {pathfinder.map((finder, idx) => (
          <div key={finder.id} className="">
            {path == `/${finder.path}` && (
              
                <p>{finder.text}</p>
            )}
          </div>
        ))}
      </div>
      <PiBell className=" text-[1.5rem] font-extrabold" />
    </header>
  );
};

export default DashboardHeader;

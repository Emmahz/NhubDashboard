import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

const Layout = (props) => {
  return (
    <div className=" flex h-[100vh] overflow-hidden">
       <div className=" w-[20%]  bg-black ">
          <Sidebar className=""/>
        </div>
      <main className=" w-[80%] h-full bg-gray-200 overflow-auto ">
       
        <DashboardHeader className=" sticky top-0 " />
        <section className="  w-full overflow-y-auto ">{props.children}</section>
        
      </main>
    </div>
  );
};
export default Layout;

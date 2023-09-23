import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <NavBar></NavBar>
        <div className="min-h-[55vh]">
        <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

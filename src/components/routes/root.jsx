import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import BannerImage from "../BannerImage/BannerImage";





const Root = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage ? (
        <div className="mb:pt-10 pt-3">
          <Navbar></Navbar>
          <Banner></Banner>
          <BannerImage></BannerImage>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      ) : (
          <div className="other-class">
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        )}
    </>
  );
};

export default Root;
// Import Hooks
import { NavLink } from "react-router-dom";
import { useTheme } from "../Navbar/ToggleTheme/ToggleTheme";

const Featured = () => {
  const {theme} = useTheme()
  return (
     
   /*  <div
      className="flex justify-center items-center w-full bg-cover min-h-screen"
      style={{
        backgroundImage: `url(${theme === "black" ? dark : light})`,
      }}
      </div>
      > */
     <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full flex justify-center items-center bg-cover min-h-screen">
    <img src={theme === "black" ? './slides/bannerDark1.svg' : './slides/bannerLight1.svg'} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full flex justify-center items-center bg-cover min-h-screen">
    <img src={theme === "black" ? './slides/bannerDark2.svg' : './slides/bannerLight2.svg'} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full flex justify-center items-center bg-cover min-h-screen">
    <img src={theme === "black" ? './slides/bannerDark3.svg' : './slides/bannerLight3.svg'} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full flex justify-center items-center bg-cover min-h-screen">
    <img src={theme === "black" ? './slides/bannerDark4.svg' : './slides/bannerLight4.svg'} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
   
      
     
  );
};

export default Featured;

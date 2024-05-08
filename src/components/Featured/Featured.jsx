// Import Hooks
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

const darkImage1 = new Image();
darkImage1.src = "./slides/bannerDark1.svg";
const darkImage2 = new Image();
darkImage2.src = "./slides/bannerDark2.svg";
const darkImage3 = new Image();
darkImage3.src = "./slides/bannerDark3.svg";
const darkImage4 = new Image();
darkImage4.src = "./slides/bannerDark4.svg";

const lightImage1 = new Image();
lightImage1.src = "./slides/bannerLight1.svg";
const lightImage2 = new Image();
lightImage2.src = "./slides/bannerLight2.svg";
const lightImage3 = new Image();
lightImage3.src = "./slides/bannerLight3.svg";
const lightImage4 = new Image();
lightImage4.src = "./slides/bannerLight4.svg";

const Featured = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    /*  <div
      className="flex justify-center items-center w-full bg-cover min-h-screen"
      style={{
        backgroundImage: `url(${theme === "black" ? dark : light})`,
      }}
      </div>
      > */
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative w-full flex justify-center items-center bg-cover min-h-screen"
      >
        <img
          src={theme === "black" ? darkImage1.src : lightImage1.src}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full flex justify-center items-center bg-cover min-h-screen"
      >
        <img
          src={theme === "black" ? darkImage2.src : lightImage2.src}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full flex justify-center items-center bg-cover min-h-screen"
      >
        <img
          src={theme === "black" ? darkImage3.src : lightImage3.src}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full flex justify-center items-center bg-cover min-h-screen"
      >
        <img
          src={theme === "black" ? darkImage4.src : lightImage4.src}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;

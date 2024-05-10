// Import Hooks
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

import {
  darkImage1,
  darkImage2,
  darkImage3,
  darkImage4,
  mdDarkImage1,
  mdDarkImage2,
  mdDarkImage3,
  mdDarkImage4,
} from "./Images";
import {
  lightImage1,
  lightImage2,
  lightImage3,
  lightImage4,
  mdLightImage1,
  mdLightImage2,
  mdLightImage3,
  mdLightImage4,
} from "./Images";

const Featured = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative w-full flex justify-center items-center bg-cover min-h-screen"
      >
        <img
          src={theme === "black" ? darkImage1.src : lightImage1.src}
          className="hidden md:block w-full"
        />
        <img
          src={theme === "black" ? mdDarkImage1.src : mdLightImage1.src}
          className="md:hidden w-full"
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
          className="hidden md:block w-full"
        />
        <img
          src={theme === "black" ? mdDarkImage2.src : mdLightImage2.src}
          className="md:hidden w-full"
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
          className="hidden md:block w-full"
        />
        <img
          src={theme === "black" ? mdDarkImage3.src : mdLightImage3.src}
          className="md:hidden w-full"
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
          className="hidden md:block w-full"
        />
        <img
          src={theme === "black" ? mdDarkImage4.src : mdLightImage4.src}
          className="md:hidden w-full"
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

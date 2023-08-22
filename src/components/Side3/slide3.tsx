import icons1 from "../../assets/image 37.png";
import icons2 from "../../assets/image 38.png";

import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

import people from "../../assets/image 40.png";
import people1 from "../../assets/image 41.png";
import peopl2 from "../../assets/image 42.png";

import Chart from "../Chart";

import { useState } from "react";

const Slide3: React.FC = () => {
  const [open9, setOpen9] = useState(false);
  const handleCard9 = () => {
    setOpen9(!open9);
  };

  const [open10, setOpen10] = useState(false);
  const handleCard10 = () => {
    setOpen10(!open10);
  };

  const [open11, setOpen11] = useState(false);
  const handleCard11 = () => {
    setOpen11(!open11);
  };

  const [open12, setOpen12] = useState(false);
  const handleCard12 = () => {
    setOpen12(!open12);
  };

  return (
    <div className="flex flex-col gap-6 flex-1 lg:grid max-lg:grid-cols-2 max:lg:w-[100vw]">
      <div
        className=" flex flex-col gap-3 card1 rounded-2xl"
        data-aos="fade-down"
      >
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Weather</h1>
          <div className="flex flex-row gap-5">
            <img
              src={icon1}
              alt=""
              className="w-[100%] h-[80%] cursor-pointer"
            />
            <img
              src={icon2}
              alt=""
              className="w-[100%] h-[80%] cursor-pointer"
            />
            <img
              src={icon3}
              alt=""
              className="w-[100%] h-[80%] cursor-pointer"
            />
            <img
              src={icon4}
              alt=""
              className={
                open9
                  ? "w-[100%] h-[80%] cursor-pointer"
                  : "w-[100%] h-[80%] cursor-pointer rotate-180"
              }
              onClick={handleCard9}
            />
          </div>
        </div>

        <div className={open9 ? "hidden" : "grid grid-cols-5"}>
          <a
            href="https://weather.com/"
            className="flex flex-col items-center text-center"
          >
            <p>Sunday</p>
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>10C</p>
          </a>

          <a
            href="https://weather.com/"
            className="flex flex-col items-center text-center"
          >
            <p>Monday</p>
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>35C</p>
          </a>

          <a
            href="https://weather.com/"
            className="flex flex-col items-center text-center"
          >
            <p>Tuesday</p>
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>35C</p>
          </a>

          <a
            href="https://weather.com/"
            className="flex flex-col items-center text-center"
          >
            <p>Wednesday</p>
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>35C</p>
          </a>

          <a
            href="https://weather.com/"
            className="flex flex-col items-center text-center pb-9"
          >
            <p>Thursday</p>
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>20C</p>
          </a>
        </div>
      </div>

      <div
        className=" flex flex-col gap-3 card3 rounded-2xl"
        data-aos="fade-up"
      >
        <div className="flex flex-row justify-between px-10 py-5">
          <h1 className=" text-2xl font-bold">ToDo List</h1>
          <div className="flex flex-row gap-10">
            <img
              src={icon1}
              alt=""
              className="w-[100%] h-[80%] cursor-pointer"
            />
            
            <img
              src={icon4}
              alt=""
              className={
                open10
                  ? "w-[100%] h-[80%] cursor-pointer"
                  : "w-[100%] h-[80%] cursor-pointer rotate-180"
              }
              onClick={handleCard10}
            />
          </div>
        </div>

        <div className={open10 ? "hidden" : "flex flex-col gap-5 px-10"}>
          <div className="flex flex-row gap-3 items-center">
            <p className="text-xl">0</p>
            <hr className=" border-4 rounded-2xl border-gray-300 w-[100%]" />
          </div>
          <div className="flex flex-col gap-3">
            <form className="flex flex-col gap-3">
              <span className="flex flex-row gap-3 text-xl">
                <input type="checkbox" name="" id="" className="w-[4%]" /> UXUI
                Design
              </span>
              <span className="flex flex-row gap-3 text-xl">
                <input type="checkbox" name="" id="" className="w-[4%]" />{" "}
                Development website
              </span>
              <span className="flex flex-row gap-3 text-xl pb-10">
                <input type="checkbox" name="" id="" className="w-[4%]" /> Video
                coin7
              </span>
            </form>
          </div>
        </div>
      </div>

      <div
        className=" flex flex-col gap-3 card1 rounded-3xl"
        data-aos="fade-up"
      >
        <div className="flex flex-row justify-between px-10 py-7">
          <h1 className=" text-2xl font-bold flex flex-row max-text:text-lg max-text:flex-wrap">
            Trending view chart
          </h1>
          <div className="flex flex-row gap-10">
            <img
              src={icon1}
              alt=""
              className="w-[100%] h-[80%] cursor-pointer"
            />
            
            <img
              src={icon4}
              alt=""
              className={
                open11
                  ? "w-[100%] h-[80%] cursor-pointer"
                  : "w-[100%] h-[80%] cursor-pointer rotate-180"
              }
              onClick={handleCard11}
            />
          </div>
        </div>

        <div className={open11 ? "hidden" : "bg-black rounded-xl"}>
          <Chart />
        </div>
      </div>

      <div
        className=" flex flex-col gap-3 card1 rounded-3xl"
        data-aos="fade-up"
      >
        <div className="flex flex-row justify-between px-10 py-7">
          <h1 className=" text-2xl font-bold">News</h1>
          <div className="flex flex-row gap-10">
            <img
              src={icon1}
              alt=""
              className="w-[100%] h-[80%] cursor-pointer"
            />
            <img
              src={icon2}
              alt=""
              className="w-[100%] h-[80%] cursor-pointer"
            />
            <img
              src={icon3}
              alt=""
              className="w-[100%] h-[80%] cursor-pointer"
            />
            <img
              src={icon4}
              alt=""
              className={
                open12
                  ? "w-[100%] h-[80%] cursor-pointer"
                  : "w-[100%] h-[80%] cursor-pointer rotate-180"
              }
              onClick={handleCard12}
            />
          </div>
        </div>

        <div className={open12 ? "hidden" : "flex flex-col gap-4 px-10"}>
          <a href="https://news.microsoft.com/" className="flex flex-row gap-3">
            <img src={people} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold text-xl">
                Joe Alwyn 'a new man' after Taylor Swift split
              </h3>
              <p className="text-sm">
                Joe Alwyn reportedly focused his post-Taylor Swift-breakup
                energy into developing himself
              </p>
            </div>
          </a>

          <a href="https://news.microsoft.com/" className="flex flex-row gap-3">
            <img src={people1} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold text-xl">
                Tory Lanez 'refuses to be eliminated
              </h3>
              <p className="text-sm">
                fter 10-year sentence over Megan Thee Stallion shooting
              </p>
            </div>
          </a>

          <a
            href="https://news.microsoft.com/"
            className="flex flex-row gap-3 pb-10"
          >
            <img src={peopl2} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold text-xl">
                Shania Twain feels for Céline Dion
              </h3>
              <p className="text-sm">
                after Stiff person diagnosis: ‘Gotta be so difficult’
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide3;

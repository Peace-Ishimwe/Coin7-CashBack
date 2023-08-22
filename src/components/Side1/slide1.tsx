import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

import image3 from "../../assets/image 3.png";
import brand1 from "../../assets/image 4.png";
import brand2 from "../../assets/image 6.png";
import brand3 from "../../assets/image 9.png";
import brand4 from "../../assets/image 21.png";
import brand5 from "../../assets/image 10.png";
import brand6 from "../../assets/image 2.png";
import brand7 from "../../assets/image 7.png";
import brand8 from "../../assets/image 8.png";
import brand9 from "../../assets/image 5-1.png";

import image21 from "../../assets/image 21.png";
import image22 from "../../assets/image 14.png";
import image23 from "../../assets/image 15.png";
import image24 from "../../assets/image 16.png";
import image25 from "../../assets/image 17.png";
import image26 from "../../assets/image 18.png";
import image27 from "../../assets/image 19.png";
import image28 from "../../assets/image 20.png";

import blogIcon1 from "../../assets/image 28-2.png";
import blogIcon2 from "../../assets/image 29-2.png";
import blogIcon3 from "../../assets/image 30-2.png";

import { useState } from "react";

const Slide1: React.FC = () => {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleCard = () => {
    setOpen(!open);
  };

  const handleCard1 = () => {
    setOpen1(!open1);
  };

  const handleCard3 = () => {
    setOpen3(!open3);
  };

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const [toggleSort, setToggleSort] = useState("a");

  const toggleOrder = (i: string) => {
    setToggleSort(i);
  };

  return (
    <div className="flex flex-col gap-6 flex-1">
      <div
        className="flex flex-col gap-8 card1 p-10 rounded-2xl"
        data-aos="fade-down"
      >
        <div className="flex flex-row justify-between">
          <h1 className=" text-2xl font-bold">Cashback</h1>
          <div className="flex flex-row gap-3">
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
                open
                  ? "w-[100%] h-[80%] cursor-pointer"
                  : "w-[100%] h-[80%] cursor-pointer rotate-180"
              }
              onClick={handleCard}
            />
          </div>
        </div>
        <div className={open ? "hidden" : " "}>
          <li className="flex flex-row justify-between text-lg">
            <div
              className={
                toggleState === 1
                  ? "hover:text-red-500 cursor-pointer active-tabs"
                  : "hover:text-red-500 cursor-pointer"
              }
              onClick={() => toggleTab(1)}
            >
              Shop
            </div>
            <div
              className={
                toggleState === 2
                  ? "hover:text-red-500 cursor-pointer active-tabs"
                  : "hover:text-red-500 cursor-pointer"
              }
              onClick={() => toggleTab(2)}
            >
              Vouchers
            </div>
            <div
              className={
                toggleState === 3
                  ? "hover:text-red-500 cursor-pointer active-tabs"
                  : "hover:text-red-500 cursor-pointer"
              }
              onClick={() => toggleTab(3)}
            >
              My Order
            </div>
            <div
              className={
                toggleState === 4
                  ? "hover:text-red-500 cursor-pointer active-tabs"
                  : "hover:text-red-500 cursor-pointer"
              }
              onClick={() => toggleTab(4)}
            >
              My Favorite
            </div>
          </li>
        </div>
        <div className={open ? "hidden" : '"flex flex-col gap-1"'}>
          <hr className=" w-[100%]" />
          <div className="flex flex-row justify-between text-lg">
            <p className="text-gray-400">Shipping Country</p>
            <select id="cars" name="cars">
              <option value="volvo">Germany</option>
              <option value="saab">USA</option>
              <option value="mercedes">Belgium</option>
              <option value="audi">Italy</option>
            </select>
          </div>
          <hr />
        </div>

        <div className={open ? "hidden" : "flex flex-row"}>
          <div
            className={
              toggleState === 1
                ? "grid grid-cols-5 px-5 gap-4 max-res:grid-cols-4"
                : "hidden"
            }
          >
            <a
              href="https://www.ikea.com/"

              className="flex flex-col gap-1 shadow-xl text-center justify-center items-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150'"
            >
              <img src={image3} alt="" className="w-[100%] h-[50%]" />
              <p className="text-sm px-3">Ikea</p>
            </a>

            <a
              href="https://www.aliexpress.com/"

              className="flex flex-col gap-1 shadow-xl text-center justify-center items-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150'"
            >
              <img src={brand1} alt="" className="w-[100%] h-[60%]" />
              <p className="text-sm">AliExpress</p>
            </a>

            <a
              href="https://www.ebay.com/"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150'"
            >
              <img src={brand2} alt="" className="w-[100%] h-[30%]" />
              <p className="text-sm">ebay</p>
            </a>

            <a
              href="https://www.apple.com/"

              className="flex flex-col gap-1 shadow-xl text-center justify-center items-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150'"
            >
              <img src={brand3} alt="" className="w-[50%] h-[40%]" />
              <p className="text-sm">Apple</p>
            </a>

            <a
              href="https://www.adidas.com/us"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
            >
              <img src={brand4} alt="" className="w-[80%] h-[40%]" />
              <p className="text-sm">Adidas</p>
            </a>

            <a
              href="https://alibaba.com/"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150'"
            >
              <img src={brand5} alt="" className="w-[80%] h-[50%]" />
              <p className="text-sm">Alibaba</p>
            </a>

            <a
              href="https://www2.hm.com/en_us/index.html"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
            >
              <img src={brand6} alt="" className="w-[80%] h-[30%]" />
              <p className="text-sm">H&M</p>
            </a>

            <a
              href="https://www.walmart.com/"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
            >
              <img src={brand7} alt="" className="w-[80%] h-[50%]" />
              <p className="text-sm">Walmart</p>
            </a>

            <a
              href="https://www.rakuten.com/"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
            >
              <img src={brand8} alt="" className="w-[80%] h-[50%]" />
              <p className="text-sm">Rakuten</p>
            </a>

            <a
              href="https://www.amazon.com/"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
            >
              <img src={brand9} alt="" className="w-[100%] h-[80%]" />
              <p className="text-sm">Amazon</p>
            </a>
          </div>

          <div
            className={
              toggleState === 3
                ? "grid grid-cols-5 px-5 gap-4 max-res:grid-cols-4"
                : "hidden"
            }
          >
            <a
              href="https://www.ikea.com/"

              className="flex flex-col gap-1 shadow-xl text-center justify-center items-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150'"
            >
              <img src={image3} alt="" className="w-[100%] h-[50%]" />
              <p className="text-sm px-3">Ikea</p>
            </a>

            <a
              href="https://www.aliexpress.com/"

              className="flex flex-col gap-1 shadow-xl text-center justify-center items-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150'"
            >
              <img src={brand1} alt="" className="w-[100%] h-[60%]" />
              <p className="text-sm">AliExpress</p>
            </a>

            <a
              href="https://www.ebay.com/"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150'"
            >
              <img src={brand2} alt="" className="w-[100%] h-[30%]" />
              <p className="text-sm">ebay</p>
            </a>

            <a
              href="https://www.apple.com/"

              className="flex flex-col gap-1 shadow-xl text-center justify-center items-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150'"
            >
              <img src={brand3} alt="" className="w-[50%] h-[40%]" />
              <p className="text-sm">Apple</p>
            </a>

            <a
              href="https://www.adidas.com/us"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
            >
              <img src={brand4} alt="" className="w-[80%] h-[40%]" />
              <p className="text-sm">Adidas</p>
            </a>
          </div>

          <div
            className={
              toggleState === 2 || toggleState === 4
                ? "grid grid-cols-5 px-5 gap-4 max-res:grid-cols-3"
                : "hidden"
            }
          >
            <a
              href="https://alibaba.com/"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150'"
            >
              <img src={brand5} alt="" className="w-[80%] h-[50%]" />
              <p className="text-sm">Alibaba</p>
            </a>

            <a
              href="https://www2.hm.com/en_us/index.html"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
            >
              <img src={brand6} alt="" className="w-[80%] h-[30%]" />
              <p className="text-sm">H&M</p>
            </a>

            <a
              href="https://www.walmart.com/"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
            >
              <img src={brand7} alt="" className="w-[80%] h-[50%]" />
              <p className="text-sm">Walmart</p>
            </a>

            <a
              href="https://www.rakuten.com/"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
            >
              <img src={brand8} alt="" className="w-[80%] h-[50%]" />
              <p className="text-sm">Rakuten</p>
            </a>

            <a
              href="https://www.amazon.com/"

              className="flex flex-col gap-1 shadow-xl text-center items-center justify-center p-2 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
            >
              <img src={brand9} alt="" className="w-[100%] h-[80%]" />
              <p className="text-sm">Amazon</p>
            </a>
          </div>
        </div>

        <li className={open ? "hidden" : "flex justify-between"}>
          <div className={toggleSort === "a" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("a")}>
            A
          </div>
          <div className={toggleSort === "b" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("b")}>
            B
          </div>
          <div className={toggleSort === "c" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("c")}>
            C
          </div>
          <div className={toggleSort === "d" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("d")}>
            D
          </div>
          <div className={toggleSort === "e" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("e")}>
            E
          </div>
          <div className={toggleSort === "f" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("f")}>
            F
          </div>
          <div className={toggleSort === "g" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("g")}>
            G
          </div>
          <div className={toggleSort === "h" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("h")}>
            H
          </div>
          <div className={toggleSort === "i" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("i")}>
            I
          </div>
          <div className={toggleSort === "j" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("i")}>
            J
          </div>
          <div className={toggleSort === "k" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("k")}>
            K
          </div>
          <div className={toggleSort === "l" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("l")}>
            L
          </div>
          <div className={toggleSort === "m" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("m")}>
            M
          </div>
          <div className={toggleSort === "n" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("n")}>
            N
          </div>
          <div className={toggleSort === "o" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("o")}>
            O
          </div>
          <div className={toggleSort === "p" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("p")}>
            P
          </div>
          <div className={toggleSort === "q" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("q")}>
            Q
          </div>
          <div className={toggleSort === "r" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("r")}>
            R
          </div>
          <div className={toggleSort === "s" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("s")}>
            S
          </div>
          <div className={toggleSort === "t" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("t")}>
            T
          </div>
          <div className={toggleSort === "u" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("u")}>
            U
          </div>
          <div className={toggleSort === "v" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("v")}>
            V
          </div>
          <div className={toggleSort === "w" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("w")}>
            W
          </div>
          <div className={toggleSort === "x" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("x")}>
            X
          </div>
          <div className={toggleSort === "y" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("y")}>
            Y
          </div>
          <div className={toggleSort === "z" ? "hover:text-red-500 active-tabs cursor-pointer" : "cursor-pointer"} onClick={() => toggleOrder("z")}>
            z
          </div>

        </li>

        <div className={open ? "hidden" : "flex flex-col gap-2"}>
          <div className={!(toggleSort === "a") ? "hidden" : "flex"}><p>
            A <span>Top 8</span>
          </p></div>
          <div className={toggleSort === "a" ? "flex" : "hidden"}>
            <div className="grid grid-cols-4 gap-3 max-div:grid-cols-3">
              <a
                href="https://www.adidas.com/us"

                className=" flex flex-col gap-2 border-2 rounded-xl border-gray-200 justify-st p-4 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
              >
                <img src={image21} alt="" />
                <p className=" text-red-500">3% of cashback</p>
                <p className="flex justify-between items-center">
                  Adidas{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_100_283)">
                        <path
                          d="M6.62331 8.118C6.51887 8.1179 6.41684 8.08663 6.33028 8.0282L4.56734 6.84661C4.55865 6.84061 4.54835 6.8374 4.5378 6.8374C4.52724 6.8374 4.51694 6.84061 4.50826 6.84661L2.74532 8.0282C2.65679 8.08731 2.55238 8.11809 2.44594 8.11646C2.33951 8.11483 2.23609 8.08086 2.14942 8.01906C2.06274 7.95726 1.99692 7.87056 1.96069 7.77047C1.92446 7.67038 1.91953 7.56163 1.94656 7.45867L2.52554 5.41688C2.52828 5.40661 2.52795 5.39577 2.52459 5.38569C2.52123 5.37561 2.51499 5.36673 2.50664 5.36016L0.838224 4.04859C0.750393 3.98316 0.685242 3.89188 0.651906 3.78755C0.61857 3.68323 0.618721 3.57108 0.652337 3.46685C0.685954 3.36261 0.75135 3.27151 0.839356 3.20631C0.927363 3.14112 1.03357 3.1051 1.14307 3.10331L3.26995 3.02297C3.2804 3.02224 3.29043 3.01851 3.29881 3.01222C3.3072 3.00593 3.31359 2.99735 3.31721 2.98752L4.0498 0.99535C4.08672 0.894356 4.15379 0.807149 4.24192 0.745536C4.33006 0.683923 4.43499 0.650879 4.54252 0.650879C4.65006 0.650879 4.75499 0.683923 4.84312 0.745536C4.93125 0.807149 4.99832 0.894356 5.03525 0.99535L5.76784 2.98752C5.77146 2.99735 5.77785 3.00593 5.78623 3.01222C5.79462 3.01851 5.80464 3.02224 5.8151 3.02297L7.94197 3.10331C8.05148 3.1051 8.15768 3.14112 8.24569 3.20631C8.3337 3.27151 8.39909 3.36261 8.43271 3.46685C8.46633 3.57108 8.46648 3.68323 8.43314 3.78755C8.3998 3.89188 8.33465 3.98316 8.24682 4.04859L6.57841 5.36016C6.56981 5.36652 6.56337 5.37538 6.55999 5.38553C6.55661 5.39568 6.55644 5.40663 6.55951 5.41688L7.13849 7.45867C7.15881 7.53699 7.16083 7.61893 7.14438 7.69815C7.12793 7.77738 7.09347 7.85175 7.04365 7.9155C6.99383 7.97926 6.93 8.03069 6.85711 8.0658C6.78422 8.10092 6.70422 8.11878 6.62331 8.118ZM4.53898 6.36452C4.64363 6.36772 4.7449 6.4023 4.82965 6.46377L6.59259 7.64536C6.60152 7.65215 6.61242 7.65587 6.62364 7.65596C6.63486 7.65605 6.64581 7.65251 6.65485 7.64586C6.66389 7.63921 6.67054 7.62982 6.6738 7.61908C6.67706 7.60834 6.67676 7.59684 6.67294 7.58628L6.09396 5.54449C6.06547 5.44433 6.06757 5.33794 6.09999 5.23898C6.13242 5.14002 6.19368 5.05302 6.27592 4.98914L7.94433 3.67757C7.95344 3.67118 7.96025 3.66203 7.96377 3.65148C7.96729 3.64093 7.96733 3.62953 7.9639 3.61896C7.96046 3.60838 7.95372 3.59918 7.94467 3.59272C7.93562 3.58625 7.92473 3.58286 7.91361 3.58304L5.78674 3.50269C5.6826 3.49863 5.58203 3.46365 5.49785 3.4022C5.41367 3.34075 5.3497 3.25562 5.3141 3.15767L4.58152 1.1655C4.57821 1.15492 4.57162 1.14568 4.56269 1.13911C4.55376 1.13255 4.54297 1.12901 4.53189 1.12901C4.52081 1.12901 4.51002 1.13255 4.50109 1.13911C4.49216 1.14568 4.48556 1.15492 4.48226 1.1655L3.75676 3.1553C3.72116 3.25326 3.65719 3.33839 3.57302 3.39984C3.48884 3.46129 3.38827 3.49627 3.28412 3.50033L1.15725 3.58068C1.14613 3.5805 1.13525 3.58389 1.1262 3.59035C1.11715 3.59682 1.11041 3.60601 1.10697 3.61659C1.10353 3.62717 1.10358 3.63857 1.1071 3.64912C1.11062 3.65967 1.11743 3.66881 1.12653 3.67521L2.79731 4.98914C2.8793 5.05322 2.94038 5.14024 2.97278 5.23913C3.00518 5.33802 3.00744 5.44431 2.97927 5.54449L2.40266 7.58628C2.39921 7.59651 2.3992 7.60757 2.40261 7.61781C2.40602 7.62804 2.41267 7.63689 2.42156 7.643C2.43012 7.65032 2.44102 7.65435 2.45228 7.65435C2.46355 7.65435 2.47444 7.65032 2.483 7.643L4.24594 6.46141C4.3321 6.40425 4.43323 6.37384 4.53662 6.37397L4.53898 6.36452Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_283">
                          <rect
                            width="8.50748"
                            height="8.50748"
                            fill="white"
                            transform="translate(0.197754 0.0830078)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </p>
              </a>

              <a
                href="https://www.aboutyou.com/your-shop"

                className=" flex flex-col gap-2 border-2 rounded-xl border-gray-200 justify-start p-4 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
              >
                <img src={image22} alt="" />
                <p className=" text-red-500">3% of cashback</p>
                <p className="flex justify-between items-center">
                  About You{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_100_331)">
                        <path
                          d="M8.21958 4.64013C8.30742 4.5747 8.37257 4.48343 8.4059 4.3791C8.43924 4.27477 8.43909 4.16263 8.40547 4.05839C8.37185 3.95415 8.30646 3.86305 8.21845 3.79786C8.13045 3.73266 8.02424 3.69665 7.91473 3.69486L5.78786 3.61451C5.77741 3.61379 5.76738 3.61006 5.75899 3.60377C5.75061 3.59748 5.74422 3.5889 5.7406 3.57906L5.00565 1.59398C4.96872 1.49299 4.90165 1.40578 4.81352 1.34417C4.72539 1.28256 4.62045 1.24951 4.51292 1.24951C4.40539 1.24951 4.30045 1.28256 4.21232 1.34417C4.12419 1.40578 4.05712 1.49299 4.0202 1.59398L3.28761 3.58615C3.28399 3.59599 3.2776 3.60457 3.26921 3.61086C3.26083 3.61715 3.2508 3.62088 3.24034 3.6216L1.11347 3.70195C1.00396 3.70374 0.897761 3.73975 0.809754 3.80495C0.721748 3.87014 0.656352 3.96124 0.622735 4.06548C0.589119 4.16972 0.588968 4.28186 0.622304 4.38619C0.65564 4.49051 0.720791 4.58179 0.808622 4.64722L2.47703 5.95879C2.48538 5.96536 2.49162 5.97424 2.49498 5.98432C2.49834 5.9944 2.49868 6.00524 2.49594 6.01551L1.92168 8.05022C1.89193 8.15383 1.89481 8.26409 1.92994 8.36601C1.96507 8.46792 2.03075 8.55654 2.11803 8.61981C2.20531 8.68308 2.30997 8.71792 2.41775 8.7196C2.52554 8.72128 2.63123 8.68971 2.72044 8.6292L4.48338 7.4476C4.49207 7.44161 4.50237 7.4384 4.51292 7.4384C4.52347 7.4384 4.53378 7.44161 4.54246 7.4476L6.3054 8.6292C6.39341 8.69178 6.49872 8.72541 6.60671 8.72541C6.7147 8.72541 6.82001 8.69178 6.90802 8.6292C6.99532 8.56653 7.06106 8.47834 7.09618 8.37677C7.13131 8.27521 7.13409 8.16525 7.10416 8.06203L6.52518 6.02024C6.52211 6.00999 6.52228 5.99904 6.52566 5.98889C6.52905 5.97874 6.53548 5.96988 6.54408 5.96352L8.21958 4.64013Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_331">
                          <rect
                            width="8.50748"
                            height="8.50748"
                            fill="white"
                            transform="translate(0.184814 0.674805)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </p>
              </a>

              <a
                href="https://www.aldersportswear.com/"

                className=" flex flex-col gap-2 border-2 rounded-xl border-gray-200 justify-start p-4 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
              >
                <img src={image23} alt="" />
                <p className=" text-red-500">3% of cashback</p>
                <p className="flex justify-between items-center">
                  Alder{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_100_331)">
                        <path
                          d="M8.21958 4.64013C8.30742 4.5747 8.37257 4.48343 8.4059 4.3791C8.43924 4.27477 8.43909 4.16263 8.40547 4.05839C8.37185 3.95415 8.30646 3.86305 8.21845 3.79786C8.13045 3.73266 8.02424 3.69665 7.91473 3.69486L5.78786 3.61451C5.77741 3.61379 5.76738 3.61006 5.75899 3.60377C5.75061 3.59748 5.74422 3.5889 5.7406 3.57906L5.00565 1.59398C4.96872 1.49299 4.90165 1.40578 4.81352 1.34417C4.72539 1.28256 4.62045 1.24951 4.51292 1.24951C4.40539 1.24951 4.30045 1.28256 4.21232 1.34417C4.12419 1.40578 4.05712 1.49299 4.0202 1.59398L3.28761 3.58615C3.28399 3.59599 3.2776 3.60457 3.26921 3.61086C3.26083 3.61715 3.2508 3.62088 3.24034 3.6216L1.11347 3.70195C1.00396 3.70374 0.897761 3.73975 0.809754 3.80495C0.721748 3.87014 0.656352 3.96124 0.622735 4.06548C0.589119 4.16972 0.588968 4.28186 0.622304 4.38619C0.65564 4.49051 0.720791 4.58179 0.808622 4.64722L2.47703 5.95879C2.48538 5.96536 2.49162 5.97424 2.49498 5.98432C2.49834 5.9944 2.49868 6.00524 2.49594 6.01551L1.92168 8.05022C1.89193 8.15383 1.89481 8.26409 1.92994 8.36601C1.96507 8.46792 2.03075 8.55654 2.11803 8.61981C2.20531 8.68308 2.30997 8.71792 2.41775 8.7196C2.52554 8.72128 2.63123 8.68971 2.72044 8.6292L4.48338 7.4476C4.49207 7.44161 4.50237 7.4384 4.51292 7.4384C4.52347 7.4384 4.53378 7.44161 4.54246 7.4476L6.3054 8.6292C6.39341 8.69178 6.49872 8.72541 6.60671 8.72541C6.7147 8.72541 6.82001 8.69178 6.90802 8.6292C6.99532 8.56653 7.06106 8.47834 7.09618 8.37677C7.13131 8.27521 7.13409 8.16525 7.10416 8.06203L6.52518 6.02024C6.52211 6.00999 6.52228 5.99904 6.52566 5.98889C6.52905 5.97874 6.53548 5.96988 6.54408 5.96352L8.21958 4.64013Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_331">
                          <rect
                            width="8.50748"
                            height="8.50748"
                            fill="white"
                            transform="translate(0.184814 0.674805)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </p>
              </a>

              <a
                href="https://www.albamoda.de/"

                className=" flex flex-col gap-2 border-2 rounded-xl border-gray-200 justify-start p-4 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
              >
                <img src={image24} alt="" />
                <p className=" text-red-500">3% of cashback</p>
                <p className="flex justify-between items-center">
                  Alba Moda{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_100_331)">
                        <path
                          d="M8.21958 4.64013C8.30742 4.5747 8.37257 4.48343 8.4059 4.3791C8.43924 4.27477 8.43909 4.16263 8.40547 4.05839C8.37185 3.95415 8.30646 3.86305 8.21845 3.79786C8.13045 3.73266 8.02424 3.69665 7.91473 3.69486L5.78786 3.61451C5.77741 3.61379 5.76738 3.61006 5.75899 3.60377C5.75061 3.59748 5.74422 3.5889 5.7406 3.57906L5.00565 1.59398C4.96872 1.49299 4.90165 1.40578 4.81352 1.34417C4.72539 1.28256 4.62045 1.24951 4.51292 1.24951C4.40539 1.24951 4.30045 1.28256 4.21232 1.34417C4.12419 1.40578 4.05712 1.49299 4.0202 1.59398L3.28761 3.58615C3.28399 3.59599 3.2776 3.60457 3.26921 3.61086C3.26083 3.61715 3.2508 3.62088 3.24034 3.6216L1.11347 3.70195C1.00396 3.70374 0.897761 3.73975 0.809754 3.80495C0.721748 3.87014 0.656352 3.96124 0.622735 4.06548C0.589119 4.16972 0.588968 4.28186 0.622304 4.38619C0.65564 4.49051 0.720791 4.58179 0.808622 4.64722L2.47703 5.95879C2.48538 5.96536 2.49162 5.97424 2.49498 5.98432C2.49834 5.9944 2.49868 6.00524 2.49594 6.01551L1.92168 8.05022C1.89193 8.15383 1.89481 8.26409 1.92994 8.36601C1.96507 8.46792 2.03075 8.55654 2.11803 8.61981C2.20531 8.68308 2.30997 8.71792 2.41775 8.7196C2.52554 8.72128 2.63123 8.68971 2.72044 8.6292L4.48338 7.4476C4.49207 7.44161 4.50237 7.4384 4.51292 7.4384C4.52347 7.4384 4.53378 7.44161 4.54246 7.4476L6.3054 8.6292C6.39341 8.69178 6.49872 8.72541 6.60671 8.72541C6.7147 8.72541 6.82001 8.69178 6.90802 8.6292C6.99532 8.56653 7.06106 8.47834 7.09618 8.37677C7.13131 8.27521 7.13409 8.16525 7.10416 8.06203L6.52518 6.02024C6.52211 6.00999 6.52228 5.99904 6.52566 5.98889C6.52905 5.97874 6.53548 5.96988 6.54408 5.96352L8.21958 4.64013Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_331">
                          <rect
                            width="8.50748"
                            height="8.50748"
                            fill="white"
                            transform="translate(0.184814 0.674805)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </p>
              </a>

              <a
                href="https://www.afbshop.de/"

                className=" flex flex-col gap-2 border-2 rounded-xl border-gray-200 justify-start p-4 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
              >
                <img src={image25} alt="" />
                <p className=" text-red-500">3% of cashback</p>
                <p className="flex justify-between items-center">
                  AFB Shop{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_100_283)">
                        <path
                          d="M6.62331 8.118C6.51887 8.1179 6.41684 8.08663 6.33028 8.0282L4.56734 6.84661C4.55865 6.84061 4.54835 6.8374 4.5378 6.8374C4.52724 6.8374 4.51694 6.84061 4.50826 6.84661L2.74532 8.0282C2.65679 8.08731 2.55238 8.11809 2.44594 8.11646C2.33951 8.11483 2.23609 8.08086 2.14942 8.01906C2.06274 7.95726 1.99692 7.87056 1.96069 7.77047C1.92446 7.67038 1.91953 7.56163 1.94656 7.45867L2.52554 5.41688C2.52828 5.40661 2.52795 5.39577 2.52459 5.38569C2.52123 5.37561 2.51499 5.36673 2.50664 5.36016L0.838224 4.04859C0.750393 3.98316 0.685242 3.89188 0.651906 3.78755C0.61857 3.68323 0.618721 3.57108 0.652337 3.46685C0.685954 3.36261 0.75135 3.27151 0.839356 3.20631C0.927363 3.14112 1.03357 3.1051 1.14307 3.10331L3.26995 3.02297C3.2804 3.02224 3.29043 3.01851 3.29881 3.01222C3.3072 3.00593 3.31359 2.99735 3.31721 2.98752L4.0498 0.99535C4.08672 0.894356 4.15379 0.807149 4.24192 0.745536C4.33006 0.683923 4.43499 0.650879 4.54252 0.650879C4.65006 0.650879 4.75499 0.683923 4.84312 0.745536C4.93125 0.807149 4.99832 0.894356 5.03525 0.99535L5.76784 2.98752C5.77146 2.99735 5.77785 3.00593 5.78623 3.01222C5.79462 3.01851 5.80464 3.02224 5.8151 3.02297L7.94197 3.10331C8.05148 3.1051 8.15768 3.14112 8.24569 3.20631C8.3337 3.27151 8.39909 3.36261 8.43271 3.46685C8.46633 3.57108 8.46648 3.68323 8.43314 3.78755C8.3998 3.89188 8.33465 3.98316 8.24682 4.04859L6.57841 5.36016C6.56981 5.36652 6.56337 5.37538 6.55999 5.38553C6.55661 5.39568 6.55644 5.40663 6.55951 5.41688L7.13849 7.45867C7.15881 7.53699 7.16083 7.61893 7.14438 7.69815C7.12793 7.77738 7.09347 7.85175 7.04365 7.9155C6.99383 7.97926 6.93 8.03069 6.85711 8.0658C6.78422 8.10092 6.70422 8.11878 6.62331 8.118ZM4.53898 6.36452C4.64363 6.36772 4.7449 6.4023 4.82965 6.46377L6.59259 7.64536C6.60152 7.65215 6.61242 7.65587 6.62364 7.65596C6.63486 7.65605 6.64581 7.65251 6.65485 7.64586C6.66389 7.63921 6.67054 7.62982 6.6738 7.61908C6.67706 7.60834 6.67676 7.59684 6.67294 7.58628L6.09396 5.54449C6.06547 5.44433 6.06757 5.33794 6.09999 5.23898C6.13242 5.14002 6.19368 5.05302 6.27592 4.98914L7.94433 3.67757C7.95344 3.67118 7.96025 3.66203 7.96377 3.65148C7.96729 3.64093 7.96733 3.62953 7.9639 3.61896C7.96046 3.60838 7.95372 3.59918 7.94467 3.59272C7.93562 3.58625 7.92473 3.58286 7.91361 3.58304L5.78674 3.50269C5.6826 3.49863 5.58203 3.46365 5.49785 3.4022C5.41367 3.34075 5.3497 3.25562 5.3141 3.15767L4.58152 1.1655C4.57821 1.15492 4.57162 1.14568 4.56269 1.13911C4.55376 1.13255 4.54297 1.12901 4.53189 1.12901C4.52081 1.12901 4.51002 1.13255 4.50109 1.13911C4.49216 1.14568 4.48556 1.15492 4.48226 1.1655L3.75676 3.1553C3.72116 3.25326 3.65719 3.33839 3.57302 3.39984C3.48884 3.46129 3.38827 3.49627 3.28412 3.50033L1.15725 3.58068C1.14613 3.5805 1.13525 3.58389 1.1262 3.59035C1.11715 3.59682 1.11041 3.60601 1.10697 3.61659C1.10353 3.62717 1.10358 3.63857 1.1071 3.64912C1.11062 3.65967 1.11743 3.66881 1.12653 3.67521L2.79731 4.98914C2.8793 5.05322 2.94038 5.14024 2.97278 5.23913C3.00518 5.33802 3.00744 5.44431 2.97927 5.54449L2.40266 7.58628C2.39921 7.59651 2.3992 7.60757 2.40261 7.61781C2.40602 7.62804 2.41267 7.63689 2.42156 7.643C2.43012 7.65032 2.44102 7.65435 2.45228 7.65435C2.46355 7.65435 2.47444 7.65032 2.483 7.643L4.24594 6.46141C4.3321 6.40425 4.43323 6.37384 4.53662 6.37397L4.53898 6.36452Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_283">
                          <rect
                            width="8.50748"
                            height="8.50748"
                            fill="white"
                            transform="translate(0.197754 0.0830078)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </p>
              </a>

              <a
                href="https://www.aldana.com.bh/"

                className=" flex flex-col gap-2 border-2 rounded-xl border-gray-200 justify-start p-4 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
              >
                <img src={image26} alt="" />
                <p className=" text-red-500">3% of cashback</p>
                <p className="flex justify-between items-center">
                  Al Dana{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_100_283)">
                        <path
                          d="M6.62331 8.118C6.51887 8.1179 6.41684 8.08663 6.33028 8.0282L4.56734 6.84661C4.55865 6.84061 4.54835 6.8374 4.5378 6.8374C4.52724 6.8374 4.51694 6.84061 4.50826 6.84661L2.74532 8.0282C2.65679 8.08731 2.55238 8.11809 2.44594 8.11646C2.33951 8.11483 2.23609 8.08086 2.14942 8.01906C2.06274 7.95726 1.99692 7.87056 1.96069 7.77047C1.92446 7.67038 1.91953 7.56163 1.94656 7.45867L2.52554 5.41688C2.52828 5.40661 2.52795 5.39577 2.52459 5.38569C2.52123 5.37561 2.51499 5.36673 2.50664 5.36016L0.838224 4.04859C0.750393 3.98316 0.685242 3.89188 0.651906 3.78755C0.61857 3.68323 0.618721 3.57108 0.652337 3.46685C0.685954 3.36261 0.75135 3.27151 0.839356 3.20631C0.927363 3.14112 1.03357 3.1051 1.14307 3.10331L3.26995 3.02297C3.2804 3.02224 3.29043 3.01851 3.29881 3.01222C3.3072 3.00593 3.31359 2.99735 3.31721 2.98752L4.0498 0.99535C4.08672 0.894356 4.15379 0.807149 4.24192 0.745536C4.33006 0.683923 4.43499 0.650879 4.54252 0.650879C4.65006 0.650879 4.75499 0.683923 4.84312 0.745536C4.93125 0.807149 4.99832 0.894356 5.03525 0.99535L5.76784 2.98752C5.77146 2.99735 5.77785 3.00593 5.78623 3.01222C5.79462 3.01851 5.80464 3.02224 5.8151 3.02297L7.94197 3.10331C8.05148 3.1051 8.15768 3.14112 8.24569 3.20631C8.3337 3.27151 8.39909 3.36261 8.43271 3.46685C8.46633 3.57108 8.46648 3.68323 8.43314 3.78755C8.3998 3.89188 8.33465 3.98316 8.24682 4.04859L6.57841 5.36016C6.56981 5.36652 6.56337 5.37538 6.55999 5.38553C6.55661 5.39568 6.55644 5.40663 6.55951 5.41688L7.13849 7.45867C7.15881 7.53699 7.16083 7.61893 7.14438 7.69815C7.12793 7.77738 7.09347 7.85175 7.04365 7.9155C6.99383 7.97926 6.93 8.03069 6.85711 8.0658C6.78422 8.10092 6.70422 8.11878 6.62331 8.118ZM4.53898 6.36452C4.64363 6.36772 4.7449 6.4023 4.82965 6.46377L6.59259 7.64536C6.60152 7.65215 6.61242 7.65587 6.62364 7.65596C6.63486 7.65605 6.64581 7.65251 6.65485 7.64586C6.66389 7.63921 6.67054 7.62982 6.6738 7.61908C6.67706 7.60834 6.67676 7.59684 6.67294 7.58628L6.09396 5.54449C6.06547 5.44433 6.06757 5.33794 6.09999 5.23898C6.13242 5.14002 6.19368 5.05302 6.27592 4.98914L7.94433 3.67757C7.95344 3.67118 7.96025 3.66203 7.96377 3.65148C7.96729 3.64093 7.96733 3.62953 7.9639 3.61896C7.96046 3.60838 7.95372 3.59918 7.94467 3.59272C7.93562 3.58625 7.92473 3.58286 7.91361 3.58304L5.78674 3.50269C5.6826 3.49863 5.58203 3.46365 5.49785 3.4022C5.41367 3.34075 5.3497 3.25562 5.3141 3.15767L4.58152 1.1655C4.57821 1.15492 4.57162 1.14568 4.56269 1.13911C4.55376 1.13255 4.54297 1.12901 4.53189 1.12901C4.52081 1.12901 4.51002 1.13255 4.50109 1.13911C4.49216 1.14568 4.48556 1.15492 4.48226 1.1655L3.75676 3.1553C3.72116 3.25326 3.65719 3.33839 3.57302 3.39984C3.48884 3.46129 3.38827 3.49627 3.28412 3.50033L1.15725 3.58068C1.14613 3.5805 1.13525 3.58389 1.1262 3.59035C1.11715 3.59682 1.11041 3.60601 1.10697 3.61659C1.10353 3.62717 1.10358 3.63857 1.1071 3.64912C1.11062 3.65967 1.11743 3.66881 1.12653 3.67521L2.79731 4.98914C2.8793 5.05322 2.94038 5.14024 2.97278 5.23913C3.00518 5.33802 3.00744 5.44431 2.97927 5.54449L2.40266 7.58628C2.39921 7.59651 2.3992 7.60757 2.40261 7.61781C2.40602 7.62804 2.41267 7.63689 2.42156 7.643C2.43012 7.65032 2.44102 7.65435 2.45228 7.65435C2.46355 7.65435 2.47444 7.65032 2.483 7.643L4.24594 6.46141C4.3321 6.40425 4.43323 6.37384 4.53662 6.37397L4.53898 6.36452Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_283">
                          <rect
                            width="8.50748"
                            height="8.50748"
                            fill="white"
                            transform="translate(0.197754 0.0830078)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </p>
              </a>

              <a
                href="https://www.aeg.co.uk/"

                className=" flex flex-col gap-2 border-2 rounded-xl border-gray-200 justify-start p-4 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
              >
                <img src={image27} alt="" />
                <p className=" text-red-500">3% of cashback</p>
                <p className="flex justify-between items-center">
                  AEG{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_100_283)">
                        <path
                          d="M6.62331 8.118C6.51887 8.1179 6.41684 8.08663 6.33028 8.0282L4.56734 6.84661C4.55865 6.84061 4.54835 6.8374 4.5378 6.8374C4.52724 6.8374 4.51694 6.84061 4.50826 6.84661L2.74532 8.0282C2.65679 8.08731 2.55238 8.11809 2.44594 8.11646C2.33951 8.11483 2.23609 8.08086 2.14942 8.01906C2.06274 7.95726 1.99692 7.87056 1.96069 7.77047C1.92446 7.67038 1.91953 7.56163 1.94656 7.45867L2.52554 5.41688C2.52828 5.40661 2.52795 5.39577 2.52459 5.38569C2.52123 5.37561 2.51499 5.36673 2.50664 5.36016L0.838224 4.04859C0.750393 3.98316 0.685242 3.89188 0.651906 3.78755C0.61857 3.68323 0.618721 3.57108 0.652337 3.46685C0.685954 3.36261 0.75135 3.27151 0.839356 3.20631C0.927363 3.14112 1.03357 3.1051 1.14307 3.10331L3.26995 3.02297C3.2804 3.02224 3.29043 3.01851 3.29881 3.01222C3.3072 3.00593 3.31359 2.99735 3.31721 2.98752L4.0498 0.99535C4.08672 0.894356 4.15379 0.807149 4.24192 0.745536C4.33006 0.683923 4.43499 0.650879 4.54252 0.650879C4.65006 0.650879 4.75499 0.683923 4.84312 0.745536C4.93125 0.807149 4.99832 0.894356 5.03525 0.99535L5.76784 2.98752C5.77146 2.99735 5.77785 3.00593 5.78623 3.01222C5.79462 3.01851 5.80464 3.02224 5.8151 3.02297L7.94197 3.10331C8.05148 3.1051 8.15768 3.14112 8.24569 3.20631C8.3337 3.27151 8.39909 3.36261 8.43271 3.46685C8.46633 3.57108 8.46648 3.68323 8.43314 3.78755C8.3998 3.89188 8.33465 3.98316 8.24682 4.04859L6.57841 5.36016C6.56981 5.36652 6.56337 5.37538 6.55999 5.38553C6.55661 5.39568 6.55644 5.40663 6.55951 5.41688L7.13849 7.45867C7.15881 7.53699 7.16083 7.61893 7.14438 7.69815C7.12793 7.77738 7.09347 7.85175 7.04365 7.9155C6.99383 7.97926 6.93 8.03069 6.85711 8.0658C6.78422 8.10092 6.70422 8.11878 6.62331 8.118ZM4.53898 6.36452C4.64363 6.36772 4.7449 6.4023 4.82965 6.46377L6.59259 7.64536C6.60152 7.65215 6.61242 7.65587 6.62364 7.65596C6.63486 7.65605 6.64581 7.65251 6.65485 7.64586C6.66389 7.63921 6.67054 7.62982 6.6738 7.61908C6.67706 7.60834 6.67676 7.59684 6.67294 7.58628L6.09396 5.54449C6.06547 5.44433 6.06757 5.33794 6.09999 5.23898C6.13242 5.14002 6.19368 5.05302 6.27592 4.98914L7.94433 3.67757C7.95344 3.67118 7.96025 3.66203 7.96377 3.65148C7.96729 3.64093 7.96733 3.62953 7.9639 3.61896C7.96046 3.60838 7.95372 3.59918 7.94467 3.59272C7.93562 3.58625 7.92473 3.58286 7.91361 3.58304L5.78674 3.50269C5.6826 3.49863 5.58203 3.46365 5.49785 3.4022C5.41367 3.34075 5.3497 3.25562 5.3141 3.15767L4.58152 1.1655C4.57821 1.15492 4.57162 1.14568 4.56269 1.13911C4.55376 1.13255 4.54297 1.12901 4.53189 1.12901C4.52081 1.12901 4.51002 1.13255 4.50109 1.13911C4.49216 1.14568 4.48556 1.15492 4.48226 1.1655L3.75676 3.1553C3.72116 3.25326 3.65719 3.33839 3.57302 3.39984C3.48884 3.46129 3.38827 3.49627 3.28412 3.50033L1.15725 3.58068C1.14613 3.5805 1.13525 3.58389 1.1262 3.59035C1.11715 3.59682 1.11041 3.60601 1.10697 3.61659C1.10353 3.62717 1.10358 3.63857 1.1071 3.64912C1.11062 3.65967 1.11743 3.66881 1.12653 3.67521L2.79731 4.98914C2.8793 5.05322 2.94038 5.14024 2.97278 5.23913C3.00518 5.33802 3.00744 5.44431 2.97927 5.54449L2.40266 7.58628C2.39921 7.59651 2.3992 7.60757 2.40261 7.61781C2.40602 7.62804 2.41267 7.63689 2.42156 7.643C2.43012 7.65032 2.44102 7.65435 2.45228 7.65435C2.46355 7.65435 2.47444 7.65032 2.483 7.643L4.24594 6.46141C4.3321 6.40425 4.43323 6.37384 4.53662 6.37397L4.53898 6.36452Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_283">
                          <rect
                            width="8.50748"
                            height="8.50748"
                            fill="white"
                            transform="translate(0.197754 0.0830078)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </p>
              </a>

              <a
                href="https://wwws.airfrance.fr/en"

                className=" flex flex-col gap-2 border-2 rounded-xl border-gray-200 justify-start p-4 hover:scale-x-110 hover:scale-y-110 hover:transition ease-in-out delay-150"
              >
                <img src={image28} alt="" />
                <p className=" text-red-500">3% of cashback</p>
                <p className="flex justify-between items-center">
                  Air France{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_100_286)">
                        <path
                          d="M6.62331 8.7098C6.51887 8.7097 6.41684 8.67843 6.33028 8.62L4.56734 7.4384C4.55865 7.43241 4.54835 7.4292 4.5378 7.4292C4.52724 7.4292 4.51694 7.43241 4.50826 7.4384L2.74532 8.62C2.65679 8.67911 2.55238 8.70989 2.44594 8.70826C2.33951 8.70662 2.23609 8.67265 2.14942 8.61085C2.06274 8.54906 1.99692 8.46235 1.96069 8.36226C1.92446 8.26217 1.91953 8.15343 1.94656 8.05047L2.52554 6.00867C2.52828 5.99841 2.52795 5.98756 2.52459 5.97748C2.52123 5.9674 2.51499 5.95853 2.50664 5.95196L0.838224 4.64039C0.750393 4.57496 0.685242 4.48368 0.651906 4.37935C0.61857 4.27502 0.618721 4.16288 0.652337 4.05864C0.685954 3.95441 0.75135 3.8633 0.839356 3.79811C0.927363 3.73292 1.03357 3.6969 1.14307 3.69511L3.26995 3.61476C3.2804 3.61404 3.29043 3.61031 3.29881 3.60402C3.3072 3.59773 3.31359 3.58915 3.31721 3.57931L4.0498 1.58715C4.08672 1.48615 4.15379 1.39895 4.24192 1.33733C4.33006 1.27572 4.43499 1.24268 4.54252 1.24268C4.65006 1.24268 4.75499 1.27572 4.84312 1.33733C4.93125 1.39895 4.99832 1.48615 5.03525 1.58715L5.76784 3.57931C5.77146 3.58915 5.77785 3.59773 5.78623 3.60402C5.79462 3.61031 5.80464 3.61404 5.8151 3.61476L7.94197 3.69511C8.05148 3.6969 8.15768 3.73292 8.24569 3.79811C8.3337 3.8633 8.39909 3.95441 8.43271 4.05864C8.46633 4.16288 8.46648 4.27502 8.43314 4.37935C8.3998 4.48368 8.33465 4.57496 8.24682 4.64039L6.57841 5.95196C6.56981 5.95832 6.56337 5.96718 6.55999 5.97733C6.55661 5.98748 6.55644 5.99842 6.55951 6.00867L7.13849 8.05047C7.15881 8.12879 7.16083 8.21073 7.14438 8.28995C7.12793 8.36917 7.09347 8.44354 7.04365 8.5073C6.99383 8.57106 6.93 8.62249 6.85711 8.6576C6.78422 8.69272 6.70422 8.71058 6.62331 8.7098ZM4.53898 6.95631C4.64363 6.95951 4.7449 6.99409 4.82965 7.05557L6.59259 8.23716C6.60152 8.24395 6.61242 8.24767 6.62364 8.24776C6.63486 8.24785 6.64581 8.2443 6.65485 8.23766C6.66389 8.23101 6.67054 8.22161 6.6738 8.21088C6.67706 8.20014 6.67676 8.18863 6.67294 8.17808L6.09396 6.13629C6.06547 6.03613 6.06757 5.92973 6.09999 5.83078C6.13242 5.73182 6.19368 5.64481 6.27592 5.58094L7.94433 4.26937C7.95344 4.26297 7.96025 4.25383 7.96377 4.24328C7.96729 4.23273 7.96733 4.22133 7.9639 4.21075C7.96046 4.20018 7.95372 4.19098 7.94467 4.18451C7.93562 4.17805 7.92473 4.17466 7.91361 4.17484L5.78674 4.09449C5.6826 4.09043 5.58203 4.05545 5.49785 3.994C5.41367 3.93255 5.3497 3.84742 5.3141 3.74946L4.58152 1.7573C4.57821 1.74672 4.57162 1.73747 4.56269 1.73091C4.55376 1.72434 4.54297 1.7208 4.53189 1.7208C4.52081 1.7208 4.51002 1.72434 4.50109 1.73091C4.49216 1.73747 4.48556 1.74672 4.48226 1.7573L3.75676 3.7471C3.72116 3.84505 3.65719 3.93018 3.57302 3.99163C3.48884 4.05308 3.38827 4.08807 3.28412 4.09213L1.15725 4.17248C1.14613 4.1723 1.13525 4.17569 1.1262 4.18215C1.11715 4.18862 1.11041 4.19781 1.10697 4.20839C1.10353 4.21897 1.10358 4.23037 1.1071 4.24092C1.11062 4.25147 1.11743 4.26061 1.12653 4.267L2.79731 5.58094C2.8793 5.64502 2.94038 5.73204 2.97278 5.83093C3.00518 5.92982 3.00744 6.03611 2.97927 6.13629L2.40266 8.17808C2.39921 8.1883 2.3992 8.19937 2.40261 8.20961C2.40602 8.21984 2.41267 8.22868 2.42156 8.2348C2.43012 8.24212 2.44102 8.24614 2.45228 8.24614C2.46355 8.24614 2.47444 8.24212 2.483 8.2348L4.24594 7.0532C4.3321 6.99605 4.43323 6.96563 4.53662 6.96577L4.53898 6.95631Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_286">
                          <rect
                            width="8.50748"
                            height="8.50748"
                            fill="white"
                            transform="translate(0.197754 0.674805)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div className={!(toggleSort === "a") ? "flex flex-coltext-black" : "hidden"}><p>Nothing here</p></div>
        </div>
      </div>

      <div
        className=" flex flex-col gap-3 card1 rounded-2xl"
        data-aos="fade-up"
      >
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Blog</h1>
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
                open1
                  ? "w-[100%] h-[80%] cursor-pointer"
                  : "w-[100%] h-[80%] cursor-pointer rotate-180"
              }
              onClick={handleCard1}
            />
          </div>
        </div>

        <div className={open1 ? "hidden" : "flex flex-col gap-3"}>
          <a
            href="https://www.blog-search.com/"

            className="flex flex-row gap-3 px-10 text-lg"
          >
            <img src={blogIcon1} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Blog Search</h3>
              <p className=" text-gray-500">Blogsearch.com</p>
            </div>
          </a>
          <hr />
          <a
            href="themesile.com/blog"

            className="flex flex-row gap-3 px-10 text-lg"
          >
            <img src={blogIcon2} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Themesile</h3>
              <p className=" text-gray-500">themesile.com/blog</p>
            </div>
          </a>
          <hr />
          <a
            href="https://blog.hubspot.com/"

            className="flex flex-row gap-3 px-10 text-lg pb-6"
          >
            <img src={blogIcon3} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">HubSpot</h3>
              <p className=" text-gray-500">blog.hubspot.com</p>
            </div>
          </a>
        </div>
      </div>

      <div
        className=" flex flex-col card2 rounded-2xl p-10 gap-7"
        data-aos="fade-up"
      >
        <div className="flex flex-row justify-between ">
          <h1 className=" text-2xl font-bold">Notizen</h1>
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
                open3
                  ? "w-[100%] h-[80%] cursor-pointer"
                  : "w-[100%] h-[80%] cursor-pointer rotate-180"
              }
              onClick={handleCard3}
            />
          </div>
        </div>

        <div className={open3 ? "hidden" : "flex flex-col gap-5"}>
          <ul className="flex flex-row gap-7">
            <li>
              <div
                className="cursor-pointer text-red-500 active-tabs"
              >
                Notiz
              </div>
            </li>
            <li>
              <div className="cursor-pointer hover:text-red-500">Neue Notiz</div>
            </li>
          </ul>

          <hr />

          <p>Don't forgot</p>
        </div>
      </div>
    </div>
  );
};

export default Slide1;


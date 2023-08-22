import icons1 from "../../assets/image 24.png";
import icons2 from "../../assets/image 25.png";
import icons3 from "../../assets/image 26.png";
import icons4 from "../../assets/image 27.png";
import icons5 from "../../assets/image 28.png";
import icons6 from "../../assets/image 29.png";

import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

import app1 from '../../assets/image 24-1.png'
import app2 from '../../assets/image 25-1.png'
import app3 from '../../assets/image 26-1.png'
import app4 from '../../assets/image 27-1.png'

import address1 from '../../assets/image 28-3.png'
import address2 from '../../assets/image 29-3.png'
import address3 from '../../assets/image 30-3.png'

import search1 from '../../assets/image 30.png'
import search2 from '../../assets/image 31.png'
import search3 from '../../assets/image 32.png'
import search4 from '../../assets/image 33.png'

import page1 from '../../assets/image 28-1.png'
import page2 from '../../assets/image 29-1.png'

import {useState} from 'react'


const Slide2: React.FC = () => {
  const [open4,setOpen4] = useState(false)
  const handleCard4=()=>{
    setOpen4(!open4)
  }

  const [open5,setOpen5] = useState(false)
  const handleCard5=()=>{
    setOpen5(!open5)
  }

  const [open6,setOpen6] = useState(false)
  const handleCard6=()=>{
    setOpen6(!open6)
  }

  const [open7,setOpen7] = useState(false)
  const handleCard7=()=>{
    setOpen7(!open7)
  }

  const [open8,setOpen8] = useState(false)
  const handleCard8=()=>{
    setOpen8(!open8)
  }

  return (
    <div className="flex flex-col gap-6 flex-1">
      <div className=" flex flex-col gap-3 card1 rounded-2xl" data-aos="fade-down">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Bookmarks</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open4 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard4}/>
          </div>
        </div>

        <div className={open4?"hidden":"grid grid-cols-4"}>
          <a href="https://www.microsoft.com/en-us/microsoft-365/word" className="flex flex-col items-center text-center">
            <img src={icons6} alt="" className="h-[4rem]" />
            <p>Word doc</p>
          </a>

          <a href="https://www.microsoft.com/en-us/?ql=2" className="flex flex-col items-center text-center">
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>Mircosoft</p>
          </a>

          <a href="https://www.gmail.com/" className="flex flex-col items-center text-center">
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>Gmail</p>
          </a>

          <a href="https://chat.openai.com/" className="flex flex-col items-center text-center">
            <img src={icons3} alt="" className="h-[4rem]" />
            <p>Chatgpt</p>
          </a>

          <a href="https://www.whatsapp.com/" className="flex flex-col items-center text-center">
            <img src={icons4} alt="" className="h-[4rem]" />
            <p>Whatsapp</p>
          </a>

          <a href="https://www.instagram.com/" className="flex flex-col items-center text-center pb-9">
            <img src={icons5} alt="" className="h-[4rem]" />
            <p>Instagram</p>
          </a>
        </div>
      </div>

      <div className=" flex flex-col gap-3 card1 rounded-2xl" data-aos="fade-up">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Apps</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open5 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard5}/>
          </div>
        </div>

        <div className={open5 ? "hidden" : "grid grid-cols-4 max-div:grid-cols-3"}>
        <a href="https://www.managemypain.net/" className="flex flex-col items-center text-center">
            <img src={app1} alt="" className="h-[4rem]" />
            <p>Manage My Pain</p>
          </a>

          <a href="https://assistant.google.com/" className="flex flex-col items-center text-center">
            <img src={app2} alt="" className="h-[4rem]" />
            <p>Google Assistant</p>
          </a>

          <a href="https://home.google.com/welcome/" className="flex flex-col items-center text-center">
            <img src={app3} alt="" className="h-[4rem]" />
            <p>Google Home</p>
          </a>

          <a href="https://workspace.google.com/" className="flex flex-col items-center text-center pb-10">
            <img src={app4} alt="" className="h-[4rem]" />
            <p>Google Calendar</p>
          </a>
        </div>  
      </div>

      <div className=" flex flex-col gap-3 card2 rounded-2xl" data-aos="fade-up">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Blog</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open6 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard6}/>
          </div>
        </div>

        <div className={open6?"hidden":"flex flex-col gap-3 pb-10"}>
          <a href="cookpad.com" className="flex flex-row gap-3 px-10 text-lg">
            <img src={address1} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Cookpad</h3>
              <p className=" text-gray-500">cookpad.com</p>
            </div>
          </a>
          <hr />
          <a href="Homes.com" className="flex flex-row gap-3 px-10 text-lg">
            <img src={address2} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Homes</h3>
              <p className=" text-gray-500">Homes.com</p>
            </div>
          </a>
          <hr />
          <a href="vrbo.com" className="flex flex-row gap-3 px-10 text-lg pb-6">
            <img src={address3} alt="" className=" w-[10%] h-[50%] mt-3" />
            <div className="flex flex-col">
              <h3 className="font-bold">Vrbo</h3>
              <p className=" text-gray-500">vrbo.com</p>
            </div>
          </a>
        </div>
      </div>

      <div className=" flex flex-col gap-3 card1 rounded-2xl" data-aos="fade-up">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Apps</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open7 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard7}/>
          </div>
        </div>

        <div className={open7?"hidden":"grid grid-cols-4"}>
        <a href="https://onionbrowser.com/" className="flex flex-col items-center text-center">
            <img src={search1} alt="" className="h-[4rem]" />
            <p>Onion</p>
          </a>

          <a href="https://imovie.com/" className="flex flex-col items-center text-center">
            <img src={search2} alt="" className="h-[4rem]" />
            <p>Video Editing Tool</p>
          </a>

          <a href="Riddler.io" className="flex flex-col items-center text-center">
            <img src={search3} alt="" className="h-[4rem]" />
            <p>Riddler.io</p>
          </a>

          <a href="https://www.seo.com/" className="flex flex-col items-center text-center pb-10">
            <img src={search4} alt="" className="h-[4rem]" />
            <p>SEO Extension</p>
          </a>
        </div>  
      </div>

      <div className="flex flex-col gap-3 card1 rounded-2xl" data-aos="fade-up">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Blog</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open8 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard8}/>
          </div>
        </div>

        <div className={open8?"hidden":"flex flex-col gap-3 pb-10"}>
          <a href="https://cookpad.com/" className="flex flex-row gap-3 px-10 text-lg">
            <img src={address1} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Android App</h3>
              <p className=" text-gray-500">github.com/topics/profile-link</p>
            </div>
          </a>
          <hr />
          <a href="https://github.com/" className="flex flex-row gap-3 px-10 text-lg">
            <img src={page1} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Archived today</h3>
              <p className=" text-gray-500">chaches clear </p>
            </div>
          </a>
          <hr />
          <a href="https://vbro/" className="flex flex-row gap-3 px-10 text-lg pb-6">
            <img src={page2} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Vrbo</h3>
              <p className=" text-gray-500">vrbo.com</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide2;

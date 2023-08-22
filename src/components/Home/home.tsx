import logo from "../../assets/logoo 1.png";
import icon from "../../assets/formkit_down.png";
import MyModal from "../MyModal/MyModal";
import React , {useState} from "react";
import Accordion from "../Accordion/Accordion";
// import { AccordionProps } from "../Accordion/AccordionTypes";

const Home: React.FC = () => {
  // const accordionData: AccordionProps = {
  //   title: "Accordion Title",
  //   desc: "Accordion Description",
  //   button: "Accordion Button",
  //   smalltext: "smalltext",
  //   list1: "List items...",
  //   list2: "List items...",
  //   list3: "List items...",
  // };

  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => {
    setShowMyModal(false);
  };

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  // const [closeMenu, setCloseMenu] = useState(false);

  // const toggleCloseMenu = () => {
  //   setCloseMenu(true);
  // };

  const toggleCloseMenu1 = () => {
    setMenu(false);
  };

  return (
    <>
      <div className="flex flex-col gap-14 justify-center overflow-x-hidden">
        {/* navbar */}
        <div className="w-[96%] shadow-2xl flex flex-row justify-between p-3 rounded-full fixed top-2 left-3 items-center z-30 bg-white">
          <a href="#">
            <img src={logo} alt="" className="cursor-pointer" />
          </a>
          <ul className="flex flex-row gap-10 max-menu:hidden">
            <li>
              <a href="/" className="hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Coupons
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                My Favorite
              </a>
            </li>
          </ul>

      <div className="max-menu:flex menu:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>

      <div className={menu ? '' : 'flex'}>
        <div
          className={menu ? 'fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50' : 'hidden'}
        >
          <div className={menu ? 'block' : 'hidden'}>
            <ul className="absolute top-5 left-[50%] bg-gray-100 p-4 rounded-2xl flex flex-col gap-3">
              <li>
                <a href="/" className="hover:text-red-500">
                  Home
                </a>
              </li>
              <li>
              <a href="#" className="hover:text-red-500">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Coupons
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                My Favorite
              </a>
            </li>
              {/* Other menu items */}
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-circle ml-8"
                  viewBox="0 0 16 16"
                  onClick={toggleCloseMenu1}
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>


          <div className="cursor-pointer">
            <p
              className="flex flex-row items-center"
              onClick={() => setShowMyModal(true)}
            >
              <span className=" text-gray-400 max-md:hidden">
                Shipping Country:
              </span>{" "}
              Germany <img src={icon} alt="" className="h-[10px]" />
            </p>
          </div>
        </div>

        {/* categories */}

        <div className="xl:mx-[8rem] flex flex-col gap-10 sm:mx-[6rem] max-sm:mx-6 max-lg:text-sm max-md:text-xs mt-[8rem]">
          <Accordion
            title="20% RABATT"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            button="Gutschein Anzeigen"
            smalltext="Gultig bis: 23.08.22023"
            list1="Gutscheinert: 20%"
            list2="Gultig Bis: 27.08.2023"
            list3="Git Fur:Lorem Ipsum is simply dummy text of the printing and typesetting industry.%"
          />

          <Accordion
            title="20% RABATT"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            button="Gutschein Anzeigen"
            smalltext="Gultig bis: 23.08.22023"
            list1="Gutscheinert: 20%"
            list2="Gultig Bis: 27.08.2023"
            list3="Git Fur:Lorem Ipsum is simply dummy text of the printing and typesetting industry.%"
          />

          <Accordion
            title="20% RABATT"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            button="Gutschein Anzeigen"
            smalltext="Gultig bis: 23.08.22023"
            list1="Gutscheinert: 20%"
            list2="Gultig Bis: 27.08.2023"
            list3="Git Fur:Lorem Ipsum is simply dummy text of the printing and typesetting industry.%"
          />

          <Accordion
            title="20% RABATT"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            button="Gutschein Anzeigen"
            smalltext="Gultig bis: 23.08.22023"
            list1="Gutscheinert: 20%"
            list2="Gultig Bis: 27.08.2023"
            list3="Git Fur:Lorem Ipsum is simply dummy text of the printing and typesetting industry.%"
          />
        </div>
      </div>
      {/*  modal */}
      <MyModal onClose={handleOnClose} visible={showMyModal} />
    </>
  );
};

export default Home;

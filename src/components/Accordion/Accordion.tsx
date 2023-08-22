import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { AccordionProps } from "./AccordionTypes";
import icon1 from "../../assets/mdi_pan-right.png";
import downIcon from '../../assets/uiw_down.png'

const Index: React.FC<AccordionProps> = ({
  title,
  desc,
  button,
  smalltext,
  list1,
  list2,
  list3,
}: AccordionProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [heightEl, setHeightEl] = useState<string | undefined>();

  const refHeight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refHeight.current) {
      setHeightEl(`${refHeight.current.scrollHeight}px`);
    }
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="accordion items-center" data-aos="fade-up">
      <div
        onClick={toggleState}
        className="accordion-visible flex flex-row gap-10 px-10 max-md:gap-4 max-md:p-3"
      >
        <span className="text-red-500 text-2xl text-center flex-wrap font-semibold max-md:text-sm">{title}</span>
        <span className="max-md:text-xs">{desc}</span>
        
        <div className="md:hidden max-md:flex">
          <img src={downIcon} alt=""/>
        </div>

        <div className="flex flex-col mt-10 max-md:hidden">
        <div className=" bg-gray-500 rounded-full flex flex-row hover:bg-gray-400 hover:transition hover:ease-in-out delay-150">
          <button className="flex flex-row text-center items-center px-2 w-[14rem] pl-5">
          {button}{" "}
          <span className="rotate-90">
            <img src={icon1} alt="" className="w-[1.6rem]"/>{" "}
          </span>
          </button>
        </div>
        <span className="text-xs">{smalltext}</span>
        </div>

      </div>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <p
          aria-hidden={toggle ? "true" : "false"}
          style={{ background: "hsl(300,3%,94%)" }}
          className="flex flex-col gap-4"
        >
          <span>{list1}</span>
          <span>{list2}</span>
          <span>{list3}</span>
        </p>
      </div>
    </div>
  );
};

export default Index;

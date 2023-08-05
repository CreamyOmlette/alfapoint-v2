import React, { useState } from "react";

export function FAQ(props) {
  const [tab, setTab] = useState(Object.keys(props.faq)[0]);
  const [dropdownState, setState] = useState({
    "dedicated-teams": Array(props.faq["dedicated-teams"]?.length).fill(false),
    "project-based": Array(props.faq["project-based"]?.length).fill(false),
  });
  const toggleDropDownState = (key) => {
    let tempDropdownState = { ...dropdownState };
    tempDropdownState[tab][key] = !tempDropdownState[tab][key];
    setState(tempDropdownState);
  };
  return (
    <>
      <h1 className="pt-[50px] pb-[25px] md:hidden">
        Frequently asked questions
      </h1>
      {props.hidePagination ? (
        <></>
      ) : (
        <div className="relative h-[37px] mb-[56px] md:mt-[70px]">
          <div className="bg-white rounded-[50px] leading-[35px] inline-block relative md:absolute md:right-0 md:top-0">
            <div
              className={
                "rounded-[50px] h-[37px] absolute bg-black z-0 transition-all ease-in-out duration-150" +
                (tab == "dedicated-teams"
                  ? " left-0 w-[144px]"
                  : " left-[144px] w-[126px]")
              }
            ></div>
            <button
              className="px-[24px] text-white"
              onClick={() => setTab("dedicated-teams")}
            >
              <h6
                className={
                  "relative z-10" +
                  (tab == "dedicated-teams" ? " text-white" : " text-black")
                }
              >
                dedicated teams
              </h6>
            </button>
            <button
              className="px-[24px]"
              onClick={() => setTab("project-based")}
            >
              <h6
                className={
                  "relative z-10" +
                  (tab == "project-based" ? " text-white" : " text-black")
                }
              >
                project-based
              </h6>
            </button>
          </div>
        </div>
      )}
      <div className="flex">
        <h1 className="min-w-[380px] max-md:hidden">
          Frequently asked questions
        </h1>
        <ul>
          {props.faq[tab].map((e, i) => (
            <li
              className={
                (i !== 0 ? "pt-[15px] " : "") + "border-b-[1px] border-black"
              }
              key={i}
              onClick={() => toggleDropDownState(i)}
            >
              <h4 className="pb-[15px] cursor-pointer">{e[0]}</h4>
              <p
                className={
                  "max-h-0 overflow-hidden transition-all ease-in-out duration-150" +
                  (dropdownState[tab][i] ? " max-h-[500px] mb-[15px]" : "")
                }
              >
                {e[1]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

import React, { useState } from "react";

export function FAQ(props) {
  const [tab, setTab] = useState("dedicated-teams");
  const [dropdownState, setState] = useState({
    "dedicated-teams": [false, false, false, false, false],
    "project-based": [],
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
          <li
            className="border-b-[1px] border-black"
            key={0}
            onClick={() => toggleDropDownState(0)}
          >
            <h4 className="pb-[15px] cursor-pointer">
              How long does it take to get started?
            </h4>
            <p
              className={
                "max-h-0 overflow-hidden transition-all ease-in-out duration-150" +
                (dropdownState["dedicated-teams"][0]
                  ? " max-h-[500px] mb-[15px]"
                  : "")
              }
            >
              We can match the right developer to your company within days, not
              weeks or months. We will present as many relevant, pre-vetted
              candidates as necessary and the choice is always yours.
            </p>
          </li>
          <li
            className="pt-[15px] border-b-[1px] border-black"
            key={1}
            onClick={() => toggleDropDownState(1)}
          >
            <h4 className="pb-[15px] cursor-pointer">
              What type of technical expertise do you offer?
            </h4>
            <p
              className={
                "max-h-0 overflow-hidden transition-all ease-in-out duration-150" +
                (dropdownState["dedicated-teams"][1]
                  ? " max-h-[500px] mb-[15px]"
                  : "")
              }
            >
              We can match the right developer to your company within days, not
              weeks or months. We will present as many relevant, pre-vetted
              candidates as necessary and the choice is always yours.
            </p>
          </li>
          <li
            className="pt-[15px] border-b-[1px] border-black"
            key={2}
            onClick={() => toggleDropDownState(2)}
          >
            <h4 className="pb-[15px] cursor-pointer">
              How can Alfapoint be sure that it&apos;s the developer my company
              needs?
            </h4>
            <p
              className={
                "max-h-0 overflow-hidden transition-all ease-in-out duration-150" +
                (dropdownState["dedicated-teams"][2]
                  ? " max-h-[500px] mb-[15px]"
                  : "")
              }
            >
              We can match the right developer to your company within days, not
              weeks or months. We will present as many relevant, pre-vetted
              candidates as necessary and the choice is always yours.
            </p>
          </li>
          <li
            className="pt-[15px] border-b-[1px] border-black"
            key={3}
            onClick={() => toggleDropDownState(3)}
          >
            <h4 className="pb-[15px] cursor-pointer">
              Does Alfapoint take care of leading the project?
            </h4>

            <p
              className={
                "max-h-0 overflow-hidden transition-all ease-in-out duration-150" +
                (dropdownState["dedicated-teams"][3]
                  ? " max-h-[500px] mb-[15px]"
                  : "")
              }
            >
              We can match the right developer to your company within days, not
              weeks or months. We will present as many relevant, pre-vetted
              candidates as necessary and the choice is always yours.
            </p>
          </li>
          <li
            className="pt-[15px] border-b-[1px] border-black"
            key={4}
            onClick={() => toggleDropDownState(4)}
          >
            <h4 className="pb-[15px] cursor-pointer">
              Do the software engineers speak English?
            </h4>
            <p
              className={
                "max-h-0 overflow-hidden transition-all ease-in-out duration-150" +
                (dropdownState["dedicated-teams"][4]
                  ? " max-h-[500px] mb-[15px]"
                  : "")
              }
            >
              We can match the right developer to your company within days, not
              weeks or months. We will present as many relevant, pre-vetted
              candidates as necessary and the choice is always yours.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

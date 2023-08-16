import React from "react";
import Button from "../utils/Button1";
import './newsletter.style.css';

export default function NewsletterForground() {
  return (
    <div className="z-10 sm:max-w-[90%] m-auto bg-black bg-opacity-25 backdrop-blur-sm w-full h-[80vh] rounded-[2rem] border border-silver-white p-5 text-center flex flex-col justify-around overflow-clip">
      <div className="flex flex-col justify-around gap-10 px-[5%]">
        <h1>NewsLetter</h1>
        <h2 className="font-bold">LET'S STAY IN TOUCH</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <form className="flex flex-col justify-around gap-5">
        <input type="email" />
        <div className="w-[50%] max-w-[300px] mx-auto">
        <Button text="Subscribe now" />
        </div>
      </form>
    </div>
  );
}

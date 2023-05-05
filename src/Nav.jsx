import React from "react";

import { useState } from "react";
function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="h-28 bg-neutral-900 text-white flex justify-between px-12">
      <h1 className="text-3xl flex items-center h-min my-auto p-4 border">
        WEBSITE NAME
      </h1>
      <div className="h-min my-auto border relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-3xl flex items-center p-4"
        >
          ACCOUNT OPTIONS
        </button>
        {showDropdown && (
          <div className="absolute bg-neutral-700 p-4 flex flex-col border left-[-1px] right-[-1px]">
            <button className="border-b flex">My Account</button>
            <button className="border-b flex">Settings</button>
            <button className="border-b flex">FAQ</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;

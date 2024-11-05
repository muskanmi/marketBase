import React from "react";

const Header = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-between w-full mb-5 border-2 border-b-#ececec md:flex-row">
        <div>
          <h2 className="pl-12 text-3xl font-bold">Exclusive</h2>
        </div>
        <div>
          <ul className="flex flex-col items-center justify-between w-full p-3 md:flex-row">
            <li className="p-3">Home</li>
            <li className="p-3">Contact</li>
            <li className="p-3">About</li>
            <li className="p-3">Sign Up</li>
          </ul>
        </div>
        <div>icons</div>
      </div>
    </section>
  );
};

export default Header;

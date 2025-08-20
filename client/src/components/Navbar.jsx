import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <div
      className="fixed z-20 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 
    sm:px-20 xl:px-32 cursor-pointer"
    >
      <img
        src="./logo.png"
        alt="logo"
        className="w-16 sm:w-24"
        onClick={() => navigate("/")}
      />

      {user ? (
        <UserButton />
      ) : (
        <button onClick={openSignIn} className="flex items-center gap-2 font-poppins rounded-full text-sm cursor-pointer bg-purple-500 text-white px-8 py-2.5">
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;

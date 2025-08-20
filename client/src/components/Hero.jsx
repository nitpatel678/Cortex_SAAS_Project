import React from "react";
import { Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import VantaBackground from "./VantaBackground"; // Adjust path if needed

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen flex items-center justify-center px-4 sm:px-20 xl:px-32 pt-20 overflow-hidden">
      {/* Vanta Animated Background */}
      <VantaBackground />

      {/* Content */}
      <div className="text-center max-w-4xl z-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold font-poppins leading-tight text-gray-900">
          Unlock Creative AI Power <br />
          with <span className="text-purple-500">Cortex</span>
        </h1>

        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl mx-auto text-gray-700 text-sm sm:text-base">
          Your all-in-one platform for AI blog writing, text summarization,
          image generation, and more. Simplify creative and cognitive tasks with just a click.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm max-sm:text-xs">
          <button
            onClick={() => navigate("/ai")}
            className="bg-purple-500 text-white px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition transform shadow-lg"
          >
            Start Exploring Now!
          </button>
          <button
            className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-105 active:scale-95 transition transform shadow"
          >
            Watch Demo
          </button>
        </div>

        {/* Trust Statement */}
        <div className="flex items-center justify-center gap-3 mt-8 text-gray-600 text-sm">
          <Users className="w-5 h-5 text-purple-600" />
          Trusted by over <span className="font-semibold">1000+</span> users.
        </div>
      </div>
    </div>
  );
}

export default Hero;

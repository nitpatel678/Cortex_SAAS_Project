import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-around w-full py-16 text-sm bg-slate-50 text-gray-800/70">
      
      {/* Logo + Title */}
      <div className="flex items-center gap-2">
        <img
          src="./logo.png"
          alt="Cortex Logo"
          className="h-10"
        />
      </div>

      {/* Copyright */}
      <p className="mt-4 text-center">
        Copyright © 2025 <span className="font-semibold text-gray-800">Cortex</span>. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-6 mt-6">
        <a href="https://www.linkedin.com/in/nitinpatelftp/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5 text-purple-500 hover:text-purple-600 transition-all" />
        </a>
        <a href="https://instagram.com/nitin_rave" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-5 w-5 text-purple-500 hover:text-purple-600 transition-all" />
        </a>
        <a href="https://github.com/nitpatel678" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5 text-purple-500 hover:text-purple-600 transition-all" />
        </a>
      </div>
    </footer>
  );
}

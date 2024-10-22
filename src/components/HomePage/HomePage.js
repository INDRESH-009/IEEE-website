"use client";
import React from "react";
import { FileText, Edit, UserPlus } from "lucide-react";

const HomePage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="flex flex-col items-center text-center bg-black bg-opacity-50 p-8 rounded-lg mx-4">
        {/* Heading Text */}
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
        International conference on Computing and Emerging Technologies for Sustainable Planet (ICCETSP-25)
          <br />
          <span className="text-xl md:text-2xl">10th - 11th March 2025, Buenos Aires, Argentina</span>
          
        </h1>

        {/* Button Group */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="flex items-center px-6 py-3 bg-[#4B70F5] text-white rounded-lg hover:bg-blue-700 transition">
            <Edit className="mr-2" />
            Dual Mode Conference
          </button>

          <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            <UserPlus className="mr-2" />
            Register Now
          </button>

          <button className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            <FileText className="mr-2" />
            Submit Your Paper
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

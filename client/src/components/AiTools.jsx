import React from 'react';
import { AiToolsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

function AITools() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-purple-500 text-[42px] font-semibold font-poppins">
          Tools You'll Love
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
        </p>
      </div>

      {/* Tool Cards */}
      <div className="flex flex-wrap mt-10 justify-center">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tool.path)}
            className="p-8 m-4 max-w-xs rounded-xl bg-white shadow-md border border-gray-100
                       transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl
                       hover:ring-1 hover:ring-purple-400 cursor-pointer"
          >
            {/* Icon */}
            <tool.Icon
              className="w-12 h-12 p-3 text-white rounded-xl"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            />

            {/* Title & Description */}
            <h3 className="mt-6 mb-3 text-lg font-semibold">{tool.title}</h3>
            <p className="text-gray-400 text-sm max-w-[95%]">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AITools;

import React from "react";
import { CircleArrowRight, Users, CodeXml, Globe, ChartLine } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-4xl">
        <div className="flex items-center mb-8">
          <div className="mr-2 size-7 translate-y-[4px]">
            <CircleArrowRight />
          </div>
          <p className="m-0 text-4xl font-medium">About Us</p>
        </div>
        <div className="ml-16">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
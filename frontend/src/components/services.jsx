import React from "react";
import { CircleArrowRight, Users, CodeXml, Globe, ChartLine } from 'lucide-react';

const Services = () => {
  return (
    <div className="flex justify-center m-16">
      <div className="flex flex-col w-full max-w-4xl">
        <div className="flex items-center mb-8">
          <div className="mr-2 size-7 translate-y-[4px]">
            <CircleArrowRight />
          </div>
          <p className="m-0 text-4xl font-medium">Our Services</p>
        </div>
        <div className="grid grid-cols-4 gap-12">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Users size={60} />
            </div>
            <p className="text-lg">Training</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <CodeXml size={60} />
            </div>
            <p className="text-lg">Development</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <ChartLine size={60} />
            </div>
            <p className="text-lg">Consulting</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Globe size={60} />
            </div>
            <p className="text-lg">Outsourcing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
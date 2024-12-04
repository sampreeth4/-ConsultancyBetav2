import React from "react";
import { CircleArrowRight, Users, CodeXml, Globe, LineChartIcon as ChartLine } from 'lucide-react';

function Services() {
  const services = [
    { icon: Users, title: 'Training' },
    { icon: CodeXml, title: 'Development' },
    { icon: ChartLine, title: 'Consulting' },
    { icon: Globe, title: 'Outsourcing' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex flex-col w-full max-w-4xl">
            <div className="flex items-center mb-12">
              <CircleArrowRight className="text-orange-500 mr-2 w-8 h-8" />
              <h2 className="text-4xl font-medium text-gray-800">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-4 bg-orange-100 p-4 rounded-full">
                    <service.icon size={48} className="text-orange-500" />
                  </div>
                  <p className="text-lg font-medium text-gray-700">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
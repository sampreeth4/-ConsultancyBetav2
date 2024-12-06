import React from "react";
import { CircleArrowRight } from 'lucide-react';

function aboutUs() {
  return (
    <section id="about" className="py-24 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex flex-col w-full max-w-4xl">
            <div className="flex items-center mb-8">
              <CircleArrowRight className="text-orange-500 mr-2 w-8 h-8" />
              <h2 className="text-4xl font-medium text-gray-800">About Us</h2>
            </div>
            <div className="ml-0 sm:ml-10 md:ml-16 text-black-700">
              <p className="mb-4">
                At Smartline Systems, we're dedicated to revolutionizing the way businesses approach their technological challenges. Founded in 2010, we've been at the forefront of providing innovative solutions tailored to each client's unique needs.
              </p>
              <p className="mb-4">
                Our team of experts brings together years of experience across various industries, allowing us to offer cutting-edge services in training, development, consulting, and outsourcing. We pride ourselves on our commitment to excellence, customer satisfaction, and staying ahead of technological advancements.
              </p>
              <p>
                Whether you're a startup looking to make your mark or an established enterprise aiming to optimize your operations, Smartline Systems is your trusted partner in navigating the complex world of technology. Let us empower your business with smart, efficient, and scalable solutions that drive growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default aboutUs;
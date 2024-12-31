import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Globe } from 'lucide-react';
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "69e7d3f5-f0a4-4612-8111-3214c578d615");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };


  return (
    <div className="w-full relative  bg-orange-100  md:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="w-full">
          <div className="mb-8">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          </div>
          
          <form onSubmit={onSubmit} className="space-y-6 backdrop-blur-sm bg-white/50 p-8 rounded-2xl shadow-lg">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name='name'
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/70"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  name='email'
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/70"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name='subject'
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/70"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name='message'
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/70"
                  required
                />
              </div>
            </div>

            <div className="w-full h-16 bg-white/70 rounded-xl flex items-center justify-center border-2 border-orange-200">
              <span className="text-sm text-gray-500">Captcha Placeholder</span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full space-y-6">
          <div className="bg-white/70 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-orange-100">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Our Location</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Reg office:10 A  Tamil nagar</p>
                  <p className="text-gray-700 font-medium">2nd Street  M.C Road  Chennai </p>
                  <p className="text-gray-700 font-medium">Tamil Nadu , India 613004</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <p className="text-gray-700 font-medium">+9 (666) 699-6969</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <p className="text-gray-700 font-medium">info@smartlinesystems.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-orange-100">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Connect With Us</h3>
            <div className="flex space-x-6">
              {[Facebook, Twitter, Instagram, Globe].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-orange-500 hover:text-orange-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/70 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-orange-100">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Visit Us</h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              Love exploring our creative office? Plan an appointment and experience our corporate environment firsthand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
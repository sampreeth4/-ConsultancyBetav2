import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/Api-Client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAppContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Training", href: "/training" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const signOutMutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
  });

  const handleSignOut = useCallback(() => {
    signOutMutation.mutate();
  }, [signOutMutation]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start relative"
        >
          <Link
            to="/"
            className="text-3xl font-bold text-orange-600 tracking-tight select-none"
          >
            Smartline Systems
          </Link>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-0 left-0 flex justify-end"
          >
            <div className="h-1 bg-red-500 w-full relative">
              <div className="absolute right-[-6px] top-[-2.5px]">
                <div
                  className="w-0 h-0 
                  border-l-[6px] border-l-red-500
                  border-y-[3px] border-y-transparent"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-600 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex space-x-6 items-center"
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-gray-700 font-medium 
                  transition-all duration-300 
                  relative
                  group"
            >
              <span className="relative">
                {item.name}
                <span
                  className="absolute bottom-[-3px] left-0 w-0 h-0.5 
                  bg-orange-500 
                  transition-all duration-300 
                  group-hover:w-full"
                />
              </span>
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              className="bg-gray-600 text-white px-4 py-2 
            rounded-lg 
            hover:bg-orange-600 
            transition-colors 
            duration-300 
            shadow-md 
            hover:shadow-lg"
              onClick={() => handleSignOut()}
            >
              Logout
            </button>
          ) : (
            <a
              href="login"
              className="bg-orange-500 text-white px-4 py-2 
            rounded-lg 
            hover:bg-orange-600 
            transition-colors 
            duration-300 
            shadow-md 
            hover:shadow-lg"
            >
              Log in
            </a>
          )}
        </motion.div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col p-4 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 py-2 border-b border-gray-200 
                  hover:text-orange-600 
                  transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {isLoggedIn ? (
                <button
                  className="bg-gray-600 text-white px-4 py-2 
                rounded-lg 
                text-center 
                hover:bg-orange-600 
                transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Logout
                </button>
              ) : (
                <a
                  href="login"
                  className="bg-orange-500 text-white px-4 py-2 
                rounded-lg 
                text-center 
                hover:bg-orange-600 
                transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </a>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

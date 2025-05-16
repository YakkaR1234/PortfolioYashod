import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Services", href: "#services" },
  ];

  const socialMediaIcons = [
    { icon: FaWhatsapp, name: "WhatsApp", href: "#" },
    { icon: FaFacebookF, name: "Facebook", href: "#" },
    { icon: FaInstagram, name: "Instagram", href: "#" },
    { icon: FaLinkedinIn, name: "LinkedIn", href: "#" },
  ];

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#d1d5db", // text-gray-300
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      y: [-2, 2],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <footer className="bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white text-base font-medium"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 text-2xl">
            {socialMediaIcons.map(({ icon: Icon, name, href }) => (
              <motion.a
                key={name}
                href={href}
                className="text-gray-300 hover:text-white"
                aria-label={name}
                title={name}
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
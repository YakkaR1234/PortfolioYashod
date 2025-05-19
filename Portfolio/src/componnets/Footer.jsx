import React from "react";
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

  return (
    <footer className="bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 text-2xl">
            {socialMediaIcons.map(({ icon: Icon, name, href }) => (
              <a
                key={name}
                href={href}
                className="text-gray-300 hover:text-white"
                aria-label={name}
                title={name}
              >
                <Icon />
              </a>
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

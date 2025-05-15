import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { animate, hover } from "motion";
import { splitText } from "motion-plus";
import { useMotionValue } from "motion/react";

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socialMediaIcons = [
  { icon: FaWhatsapp, name: "WhatsApp" },
  { icon: FaFacebookF, name: "Facebook" },
  { icon: FaInstagram, name: "Instagram" },
  { icon: FaLinkedinIn, name: "LinkedIn" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.5,
    },
  },
};

export default function SocialMedia() {
  const containerRef = useRef(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const heading = containerRef.current.querySelector(".scatter-text");
    const iconsContainer = containerRef.current.querySelector(".icons");

    if (!heading || !iconsContainer) return;

    // Split heading text into chars
    const { chars } = splitText(heading);

    // Also select all icon wrappers
    const iconElements = [...iconsContainer.querySelectorAll(".icon-wrapper")];

    const handlePointerMove = (event) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000;
      prevEvent.current = now;

      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener("pointermove", handlePointerMove);

    // Apply scatter animation on heading chars
    hover(chars, (element) => {
      const speed = Math.sqrt(
        velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
      );
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      );
    });

    // Apply scatter animation on icons
    hover(iconElements, (element) => {
      const speed = Math.sqrt(
        velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
      );
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      );
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 15px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "black",
        color: "white",
        textAlign: "center",
        userSelect: "none",
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="scatter-text"
        style={{
          fontSize: "clamp(2.5rem, 5vw + 1rem, 6rem)",
          fontWeight: "900",
          marginBottom: "40px",
          userSelect: "none",
          maxWidth: "90vw",
          lineHeight: 1.1,
          cursor: "pointer",
        }}
      >
        Turning code into creativity
      </motion.h1>
        <motion.h1
        className="scatter-text text-gray-500"
        style={{
          fontSize: "clamp(2.5rem, 5vw + 1rem, 6rem)",
          fontWeight: "900",
          marginBottom: "40px",
          userSelect: "none",
          maxWidth: "90vw",
          lineHeight: 1.1,
          cursor: "pointer",
        }}
      >
       -one line at a time.
      </motion.h1>

      <div
        className="icons"
        style={{
          display: "flex",
          gap: "40px",
          fontSize: "3rem",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {socialMediaIcons.map(({ icon: Icon, name }) => (
          <span
            key={name}
            className="icon-wrapper"
            aria-label={name}
            title={name}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              border: "2px solid white", // white border
              padding: "8px", // space inside border
              borderRadius: "8px", // rounded corners
              transition: "border-color 0.3s ease", // smooth border color transition on hover (optional)
            }}
          >
            <Icon />
          </span>
        ))}
      </div>
    </motion.div>
  );
}

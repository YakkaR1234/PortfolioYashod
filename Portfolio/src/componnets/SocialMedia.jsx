import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import background from "../assets/background.jpg";
import { useNavigate } from "react-router-dom";

const socialMediaIcons = [{ icon: FaGithub, name: "GitHub" }];

// Custom text splitting function
const splitText = (element) => {
  const text = element.textContent;
  element.innerHTML = "";
  const chars = text.split("").map((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    span.style.position = "relative";
    element.appendChild(span);
    return span;
  });
  return { chars };
};

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

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export default function SocialMedia() {
  const containerRef = useRef(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/contact");
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const headings = containerRef.current.querySelectorAll(".scatter-text");
    const iconsContainer = containerRef.current.querySelector(".icons");

    if (!headings.length || !iconsContainer) return;

    const charElements = Array.from(headings).map(
      (heading) => splitText(heading).chars
    );
    const allChars = charElements.flat();
    const iconElements = [...iconsContainer.querySelectorAll(".icon-wrapper")];

    const handlePointerMove = (event) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000 || 0.001;
      prevEvent.current = now;

      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const now = performance.now();
        const timeSinceLastEvent = (now - prevEvent.current) / 1000 || 0.001;
        prevEvent.current = now;

        const newVelocityX =
          (touch.clientX - (prevEvent.currentTouch?.clientX || touch.clientX)) /
          timeSinceLastEvent;
        const newVelocityY =
          (touch.clientY - (prevEvent.currentTouch?.clientY || touch.clientY)) /
          timeSinceLastEvent;

        velocityX.set(newVelocityX);
        velocityY.set(newVelocityY);
        prevEvent.currentTouch = touch;
      }
    };

    const applyScatter = (element) => {
      const speed = Math.min(
        Math.sqrt(velocityX.get() ** 2 + velocityY.get() ** 2),
        50
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
    };

    allChars.forEach((char) => {
      char.addEventListener("pointerenter", () => applyScatter(char));
      char.addEventListener("touchstart", () => applyScatter(char));
    });

    iconElements.forEach((icon) => {
      icon.addEventListener("pointerenter", () => applyScatter(icon));
      icon.addEventListener("touchstart", () => applyScatter(icon));
    });

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("touchmove", handleTouchMove);
      allChars.forEach((char) => {
        char.removeEventListener("pointerenter", () => applyScatter(char));
        char.removeEventListener("touchstart", () => applyScatter(char));
      });
      iconElements.forEach((icon) => {
        icon.removeEventListener("pointerenter", () => applyScatter(icon));
        icon.removeEventListener("touchstart", () => applyScatter(icon));
      });
    };
  }, [velocityX, velocityY]);

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-[80vh] flex flex-col justify-center items-center p-4 sm:p-6 bg-black text-white text-center select-none overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="scatter-text text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-[90vw] leading-tight cursor-pointer"
          style={{
            fontSize: "clamp(2.5rem, 5vw + 1rem, 6rem)",
            fontWeight: "900",
            lineHeight: 1.1,
          }}
          variants={charVariants}
        >
          Turning code into creativity
        </motion.h1>
        <motion.h1
          className="scatter-text text-3xl sm:text-4xl md:text-5xl font-bold mb-10 max-w-[90vw] leading-tight cursor-pointer text-gray-300"
          style={{
            fontSize: "clamp(2.5rem, 5vw + 1rem, 6rem)",
            fontWeight: "900",
            lineHeight: 1.1,
          }}
          variants={charVariants}
        >
          - one line at a time.
        </motion.h1>

        {/* Icons and new button */}
        <div
          className="icons flex flex-col items-center gap-6 sm:gap-8 text-3xl sm:text-4xl"
          style={{ cursor: "pointer" }}
        >
          {socialMediaIcons.map(({ icon: Icon, name }) => (
            <motion.a
              key={name}
              href="https://github.com/YakkaR1234"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper inline-flex items-center justify-center border-2 border-white rounded-lg p-2 hover:border-gray-300 transition-colors duration-300"
              aria-label={name}
              title={name}
              variants={iconVariants}
              whileTap="tap"
            >
              <Icon />
            </motion.a>
          ))}

          {/* New Button Below Icons */}
          <motion.button
            onClick={handlenavigate}
            className="mt-4 px-6 py-2 text-lg sm:text-xl font-semibold border-2 border-white rounded-lg text-white hover:bg-white hover:text-black transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
          >
            Contact me
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

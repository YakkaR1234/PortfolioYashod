import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import background from "../assets/background.jpg";
import hero from "../assets/hero.jpg";

import { FiChevronDown } from "react-icons/fi";

const MotionLink = motion(Link);

const MainPage = () => {
  const canvasRef = useRef(null);
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || null
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setProfileImage(localStorage.getItem("profileImage") || null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let mouse = { x: null, y: null };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          this.x += (dx / distance) * 1 + this.speedX;
          this.y += (dy / distance) * 1 + this.speedY;
        } else {
          this.x += this.speedX;
          this.y += this.speedY;
        }
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 25; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
  };

  const paraContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.4 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const charVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.15, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.4)" },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const headingText = "Where Creativity Meets Code";
  const paragraphText =
    "A passionate developer focused on clean design and efficient code. Welcome to my portfolio";
  const headingWords = headingText.split(" ");
  const paragraphChars = paragraphText.split("");

  const arrowVariants = {
    animate: {
      y: [0, 15, 0], // bounce down and up
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4 sm:px-6">
      {/* Background Image with zoom animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${background})` }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1.1, 1] }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          times: [0, 0.4, 0.6, 1],
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_60%)]" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto py-12 flex flex-col md:flex-row items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="text-center md:text-left md:flex-1">
          {profileImage && (
            <motion.div
              className="mb-6 flex justify-center md:justify-start"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-2 border-white object-cover shadow-lg"
              />
            </motion.div>
          )}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl text-white mb-4 tracking-tight"
            variants={containerVariants}
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-md mx-auto md:mx-0"
            variants={paraContainerVariants}
          >
            {paragraphChars.map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={charVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <motion.a
              href="#projects"
              className="relative inline-block bg-black text-white px-6 py-2 rounded-full text-sm sm:text-base uppercase tracking-wide overflow-hidden group"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-out" />
            </motion.a>
          </div>
        </div>

        {/* Right Content */}
        <motion.div
          className="w-full sm:w-[350px] md:w-[450px] h-[300px] sm:h-[450px] md:h-[600px] bg-[#111] rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero})`,
            boxShadow: "0 0 25px 8px rgba(255, 255, 255, 0.15)",
          }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer "
          variants={arrowVariants}
          animate="animate"
          aria-label="Scroll down"
        >
          <div className="mt-20 animate-bounce">
            <FiChevronDown size={36} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MainPage;

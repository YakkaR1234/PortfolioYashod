import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const backgroundImageUrl =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80';

const MainPage = () => {
  const canvasRef = useRef(null);
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || null);

  useEffect(() => {
    const handleStorageChange = () => {
      setProfileImage(localStorage.getItem('profileImage') || null);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    window.addEventListener('mousemove', (e) => {
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
        ctx.fillStyle = 'rgba(6, 95, 70, 0.4)';
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
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: '0 0 15px rgba(6, 95, 70, 0.4)' },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image with zoom animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1.1, 1] }}
        transition={{
          duration: 12,
          ease: 'easeInOut',
          times: [0, 0.4, 0.6, 1],
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,95,70,0.15)_0%,transparent_60%)]" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="text-center md:text-left md:flex-1">
          {profileImage && (
            <motion.div
              className="mb-6"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0 rounded-full border-2 border-[#065f46] object-cover shadow-lg"
              />
            </motion.div>
          )}
          <motion.h1
            className="text-6xl sm:text-4xl md:text-5xl  text-white mb-4 tracking-tight"
            variants={textVariants}
          >
            Innovate the Digital Frontier
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
            variants={textVariants}
          >
            Building cutting-edge solutions with creativity and precision.
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
          className="w-full sm:w-[400px] md:w-[500px] h-[400px] sm:h-[550px] md:h-[700px] bg-[#022c22] rounded-xl shadow-lg border border-[#065f46]"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.div>
    </section>
  );
};

export default MainPage;

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const LanguageCarousel = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);

  // Language arrays for each row
  const languages1 = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "HTML",
    "CSS",
    "JavaScript",
  ];
  const languages2 = [
    "Python",
    "Java",
    "C++",
    "Angular",
    "Next.js",
    "PHP",
    "Python",
    "Java",
    "C++",
  ];
  const languages3 = [
    "Dart",
    "C",
    "Laravel",
    "React",
    "Node.js",
    "Java",
    "Dart",
    "C",
    "Laravel",
  ];

  // Animation setup for infinite scroll
  useEffect(() => {
    const animateCarousel = async (controls, ref, duration) => {
      const width = ref.current ? ref.current.scrollWidth / 2 : 0;
      controls.set({ x: 0 });
      await controls.start({
        x: -width,
        transition: {
          x: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" },
        },
      });
    };

    animateCarousel(controls1, carouselRef1, 15); // Row 1: 15s
    animateCarousel(controls2, carouselRef2, 18); // Row 2: 18s
    animateCarousel(controls3, carouselRef3, 21); // Row 3: 21s
  }, [controls1, controls2, controls3]);

  return (
    <section className="relative py-12 overflow-hidden bg-black">
      <div className="w-full px-4">
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="overflow-hidden">
            <motion.div ref={carouselRef1} className="flex" animate={controls1}>
              {[...languages1, ...languages1].map((lang, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 mx-2 px-6 py-3 bg-gray-900 border border-white text-white font-mono text-lg text-center min-w-[140px] hover:bg-black hover:border-white transition-all duration-300"
                >
                  {lang}
                </div>
              ))}
            </motion.div>
          </div>
          {/* Row 2 */}
          <div className="overflow-hidden">
            <motion.div ref={carouselRef2} className="flex" animate={controls2}>
              {[...languages2, ...languages2].map((lang, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 mx-2 px-6 py-3 bg-gray-900 border border-white text-white font-mono text-lg text-center min-w-[140px] hover:bg-black hover:border-white transition-all duration-300"
                >
                  {lang}
                </div>
              ))}
            </motion.div>
          </div>
          {/* Row 3 */}
          <div className="overflow-hidden">
            <motion.div ref={carouselRef3} className="flex" animate={controls3}>
              {[...languages3, ...languages3].map((lang, index) => (
                <div
                  key={`row3-${index}`}
                  className="flex-shrink-0 mx-2 px-6 py-3 bg-gray-900 border border-white text-white font-mono text-lg text-center min-w-[140px] hover:bg-black hover:border-white transition-all duration-300"
                >
                  {lang}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageCarousel;

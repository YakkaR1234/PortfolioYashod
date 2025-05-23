import React, { useEffect } from "react";
import { motion } from "framer-motion";
import UpButton from "../../componnets/UpButton";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero/Introduction Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            Hi, I'm Yashod Ravimal Peiris
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-6"
            variants={itemVariants}
          >
            A passionate Software enginaering intern creating impactful and
            elegant solutions.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-semibold mb-12 text-center"
            variants={itemVariants}
          >
            My Skills
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "Dart",
              "Java",
              "angular",
              "Html5",
              "python",
              "C/C++",
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-100 rounded-lg text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-semibold mb-12 text-center"
            variants={itemVariants}
          >
            Experience
          </motion.h2>
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div
              className="border-l-4 border-white pl-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-medium">Software enginaer intern</h3>
              <p className="text-gray-400">bezzie.pvt | [janu 7 - Present]</p>
              <p className="text-gray-300 mt-2">
                Collaborating with the development team to build and maintain
                scalable web applications using React and Tailwind CSS. Gained
                hands-on experience in writing clean, modular code, integrating
                APIs, and participating in agile development workflows.
              </p>
            </motion.div>
            <motion.div
              className="border-l-4 border-white pl-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-medium">Founder of ArizonaX</h3>
              <p className="text-gray-400">ArizonaX | [Jun 2023 - present]</p>
              <p className="text-gray-300 mt-2">
                Launched and scaled ArizonaX, a social commerce brand focused on
                selling stylish phone back covers and accessories. Built a
                strong online presence through social media marketing,
                streamlined the e-commerce flow, and optimized backend APIs and
                database queries to support high user engagement and order
                volumes.
              </p>
            </motion.div>

            <motion.div
              className="border-l-4 border-white pl-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-medium">Call Center Executive</h3>
              <p className="text-gray-400">Dialog Axiata | [2021]</p>
              <p className="text-gray-300 mt-2">
                Handled high volumes of customer inquiries and provided
                real-time support to resolve issues efficiently. Maintained
                excellent service quality standards, improved customer
                satisfaction, and contributed to team performance through clear
                communication and problem-solving skills.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white text-black text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          variants={itemVariants}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          variants={itemVariants}
        >
          I'm excited to bring my skills to your next project. Reach out to
          discuss how I can help!
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Contact Me
        </motion.a>
      </section>
      <UpButton />
    </motion.div>
  );
};

export default About;

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

const ContactUs = () => {
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
            Connect With Me
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-6"
            variants={itemVariants}
          >
            I'm excited to connect and explore opportunities to collaborate.
            Reach out via email or find me on social media!
          </motion.p>
          <motion.a
            href="mailto:yashod@example.com"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Email Me
          </motion.a>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-semibold mb-12 text-center"
            variants={itemVariants}
          >
            Find Me Online
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[
              {
                platform: "LinkedIn",
                username: "yashod peiris",
                link: "https://www.linkedin.com/in/yashod-peiris-13a2102aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
              {
                platform: "GitHub",
                username: "yashodravimal",
                link: "https://github.com/YakkaR1234",
              },
              {
                platform: "X (Twitter)",
                username: "@yashod_r",
                link: "https://twitter.com/yashod_r",
              },
              {
                platform: "Facebook",
                username: "yashod peiris",
                link: "https://www.facebook.com/share/1Eei4FV9Rt/",
              },
              {
                platform: "Instagram",
                username: "@yashod_peiris",
                link: "https://www.instagram.com/yashod_peiris?igsh=d3h4Ym10Y3FoM3dv",
              },
              {
                platform: "Instagram Business",
                username: "@Ariz_onax",
                link: "https://www.instagram.com/ariz_onax?igsh=bnY3cHJtemN5c2Jk",
              },
              {
                platform: "WhatsApp",
                username: "+94 76 647 7436 ",
                link: "https://wa.me/qr/J642C7W6PHQ4D1",
              },
            ].map((social, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-100 rounded-lg text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-black hover:text-blue-600"
                >
                  {social.platform}
                </a>
                <p className="text-gray-600">{social.username}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white text-black text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          variants={itemVariants}
        >
          Let's Collaborate
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          variants={itemVariants}
        >
          Have an idea or project in mind? Drop me an email or connect with me
          on social media to get started!
        </motion.p>
        <motion.a
          href="mailto:yashod@example.com"
          className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Send an Email
        </motion.a>
      </section>

      <UpButton />
    </motion.div>
  );
};

export default ContactUs;

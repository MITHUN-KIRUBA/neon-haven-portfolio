import { motion } from "framer-motion";
import { Download, Github, Mail, ExternalLink, FileText, Linkedin, Code2, MessageSquare } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export function Hero() {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mithun-kiruba",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/MITHUN-KIRUBA",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: Code2,
      label: "LeetCode",
      href: "https://leetcode.com/u/MITHUN_KIRUBA13/",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: MessageSquare,
      label: "HackerRank",
      href: "https://www.hackerrank.com/profile/kirubamithun28",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 md:pt-0 md:pb-0"
    >
      <AnimatedBackground variant="hero" intensity="high" />

      {/* 2-Column Layout: Left Content, Right Photo */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Content */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col justify-center text-center md:text-left"
          >
            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tighter"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                MITHUN KIRUBA S K
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-primary font-semibold mb-4"
            >
              AI & Data Science Undergraduate
            </motion.p>

            {/* Certification badge */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-6 md:mb-8"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium bg-gradient-to-r from-primary/10 to-secondary/5 hover:from-primary/20 hover:to-secondary/10 transition-all cursor-reactive">
                🇯🇵 JLPT N4 Certified
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-lg text-foreground/80 mb-8 md:mb-10 leading-relaxed"
            >
              Building intelligent data-driven solutions with AI, backed by strong analytical skills and Japanese language proficiency (JLPT N4).
            </motion.p>

            {/* Social Platform Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start gap-3 md:gap-4 mb-8 md:mb-10 flex-wrap"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative p-3 md:p-4 rounded-full bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-2xl transition-all cursor-reactive`}
                    title={social.label}
                  >
                    <Icon size={20} className="md:w-6 md:h-6" />

                    {/* Hover label tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-background/90 backdrop-blur border border-primary/50 text-primary text-xs font-semibold whitespace-nowrap pointer-events-none"
                    >
                      {social.label}
                    </motion.div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center md:justify-start flex-wrap"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 md:py-5 rounded-lg bg-gradient-to-r from-primary to-secondary text-background font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-reactive neon-pulse"
              >
                <ExternalLink size={20} />
                View Projects
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 md:py-5 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all flex items-center justify-center gap-2 cursor-reactive"
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 md:py-5 rounded-lg border-2 border-secondary text-secondary font-bold hover:bg-secondary/10 transition-all flex items-center justify-center gap-2 cursor-reactive"
              >
                <Mail size={20} />
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Profile Photo - Enlarged & Dominant */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative cursor-reactive"
            >
              {/* Outer animated gradient border (primary ring) */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-primary p-0.5"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, linear: true }}
                style={{
                  filter: "drop-shadow(0 0 20px rgba(0, 200, 255, 0.5))",
                }}
              />

              {/* Secondary rotating ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border-2 border-primary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, linear: true }}
                style={{
                  filter: "drop-shadow(0 0 10px rgba(0, 200, 255, 0.3))",
                }}
              />

              {/* Main image container with living border - ENLARGED */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-primary/60 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl">
                {/* Profile photo */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1d111ce13933408891f238e8ed957246%2F16a918ed3936456cbe826da057bd3a97?format=webp&width=800"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

                {/* Overlay glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Large pulsing aura */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-primary/40 to-secondary/40"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  filter: "blur(40px)",
                }}
              />

              {/* Additional subtle glow layer */}
              <motion.div
                className="absolute -inset-8 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(0, 200, 255, 0.3), 0 0 20px rgba(255, 0, 0, 0.1)",
                    "0 0 80px rgba(0, 200, 255, 0.5), 0 0 40px rgba(255, 0, 0, 0.2)",
                    "0 0 40px rgba(0, 200, 255, 0.3), 0 0 20px rgba(255, 0, 0, 0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator - Bottom */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 md:mt-20 text-primary/50 text-center"
        >
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

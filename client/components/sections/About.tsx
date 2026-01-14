import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <AnimatedBackground variant="section" intensity="low" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Section title */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg">
              I'm passionate about leveraging artificial intelligence and data science to solve real-world problems. With a strong foundation in Python, machine learning, and data analysis, I've worked on projects that demonstrate the power of intelligent systems.
            </p>

            <p className="text-lg">
              My analytical mindset drives me to dig deep into datasets, extract meaningful insights, and build solutions that actually work. I believe that great technology starts with understanding the problem deeply.
            </p>

            <p className="text-lg">
              Beyond technical skills, I'm committed to continuous learning. I've achieved JLPT N4 certification in Japanese, proving my dedication to expanding my horizons and understanding different cultures. This reflects my broader philosophy: <span className="text-primary font-semibold">learning never stops.</span>
            </p>

            <p className="text-lg">
              I'm driven by the intersection of AI, data, and human-centered design. Every project is an opportunity to learn, improve, and create something meaningful.
            </p>
          </div>

          {/* Stats cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {[
              { number: "3+", label: "AI Projects" },
              { number: "100%", label: "Dedication" },
              { number: "N4", label: "Japanese" },
              { number: "∞", label: "Growth" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 hover:border-primary/60 transition-colors cursor-reactive"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export function Education() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <GraduationCap className="text-primary" size={40} />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="relative pl-6 md:pl-8 pb-6 md:pb-8 border-l-4 border-gradient-to-b from-primary via-secondary to-primary"
          style={{
            borderImage: "linear-gradient(180deg, hsl(190, 100%, 50%), hsl(0, 100%, 50%)) 1",
          }}
        >
          {/* Timeline dot */}
          <motion.div
            className="absolute left-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background cursor-reactive"
            style={{
              transform: "translate(-50%, 0)",
              boxShadow: "0 0 30px rgba(0, 200, 255, 0.6), 0 0 15px rgba(255, 0, 0, 0.4)",
            }}
            whileHover={{ scale: 1.3 }}
          />

          {/* Content */}
          <motion.div
            className="p-6 md:p-8 rounded-lg border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-secondary/10 hover:border-primary/80 transition-all cursor-reactive"
            whileHover={{
              boxShadow: "0 0 50px rgba(0, 200, 255, 0.4), 0 0 30px rgba(255, 0, 0, 0.2)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg border-2 border-primary/50 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden cursor-reactive">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F1d111ce13933408891f238e8ed957246%2F78bef1c0021f4f64982a961e36e5a649?format=webp&width=800"
                    alt="MKCE Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      B.Tech Artificial Intelligence &amp; Data Science
                    </h3>
                    <p className="text-lg md:text-xl text-primary font-semibold">
                      M. Kumarasamy College of Engineering
                    </p>
                  </div>
                  <span className="text-sm md:text-base text-secondary font-bold whitespace-nowrap bg-secondary/20 px-4 py-2 rounded-full">
                    Pursuing
                  </span>
                </div>

                <p className="text-foreground/70 mb-3">
                  📍 Karur, Tamil Nadu, India
                </p>

                <p className="text-foreground/60 text-base leading-relaxed">
                  Specializing in Artificial Intelligence, Machine Learning, Data Science, and advanced analytical techniques. Building expertise in cutting-edge technologies for solving real-world problems.
                </p>

                {/* Skills preview */}
                <motion.div
                  variants={containerVariants}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {["Python", "ML", "Data Science", "AI"].map((skill, i) => (
                    <motion.span
                      key={i}
                      variants={itemVariants}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 transition-all cursor-reactive"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

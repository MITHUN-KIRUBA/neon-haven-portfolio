import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export function Resume() {
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
    <section id="resume" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
      <AnimatedBackground variant="section" intensity="low" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Section title */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <FileText className="text-primary" size={40} />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        {/* Resume container */}
        <motion.div
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 py-4 md:py-5 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-bold hover:shadow-2xl transition-shadow cursor-reactive neon-pulse"
              style={{
                boxShadow: "0 0 30px rgba(0, 200, 255, 0.4), 0 0 15px rgba(255, 0, 0, 0.2)",
              }}
            >
              <Download size={20} />
              Download Resume (PDF)
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 py-4 md:py-5 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all cursor-reactive"
            >
              <Eye size={20} />
              View Full Resume
            </motion.a>
          </motion.div>

          {/* Resume preview card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-secondary/10 cursor-reactive hover:border-primary/70 transition-all"
            style={{
              boxShadow: "inset 0 1px 0 rgba(0, 200, 255, 0.1)",
            }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📋
              </motion.span>
              Key Sections
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Experience",
                  items: [
                    "AI & Data Science projects",
                    "Full-stack development",
                    "Real-world problem solving",
                  ],
                },
                {
                  title: "Education",
                  items: [
                    "Bachelor of Engineering (AI & Data Science)",
                    "M. Kumarasamy College of Engineering",
                    "Continuous learning mindset",
                  ],
                },
                {
                  title: "Technical Skills",
                  items: [
                    "Machine Learning & Data Analysis",
                    "Backend & Database Development",
                    "Web Development & Frontend",
                  ],
                },
                {
                  title: "Languages & Certifications",
                  items: [
                    "JLPT N5 Japanese Certification",
                    "Multiple industry certifications",
                    "Problem-solving methodologies",
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 hover:border-primary/70 transition-all cursor-reactive"
                >
                  <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-start gap-2 text-foreground/80"
                      >
                        <span className="text-primary font-bold mt-1">▹</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/40 cursor-reactive hover:border-primary/70 transition-all"
          >
            <p className="text-lg text-foreground mb-4">
              👋 Want to know more? Let's connect!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, y: -5 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-lg hover:shadow-lg transition-shadow"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

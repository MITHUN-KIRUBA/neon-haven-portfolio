import { motion } from "framer-motion";
import { Briefcase, Github, ExternalLink, Zap } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export function Projects() {
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

  const projects = [
    {
      title: "SmartBoard-LLM",
      subtitle: "AI-Based Classroom Visualization System",
      description:
        "Speech-Driven AI Visual Assistant that converts teacher speech into curriculum-aligned visual content using advanced NLP and image generation. Designed to enhance teacher productivity and student engagement.",
      technologies: [
        "Python",
        "Flask",
        "Whisper ASR",
        "spaCy",
        "KeyBERT",
        "LLM",
        "CLIP",
        "Stable Diffusion",
      ],
      impact: "Reduces content preparation time while maintaining educational accuracy",
      github: "#",
      demo: "#",
      gradient: "from-cyan-600 via-blue-600 to-primary",
      icon: "🧠",
    },
    {
      title: "Smart Farming Crop Suggestion",
      subtitle: "Data-Driven Agricultural Intelligence",
      description:
        "Advanced recommendation system using large-scale soil & climate data to provide personalized crop suggestions. Helps farmers make data-informed decisions for optimal yield.",
      technologies: [
        "Apache Spark",
        "PySpark",
        "FastAPI",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      impact: "Processes terabytes of agricultural data in real-time",
      github: "#",
      demo: "#",
      gradient: "from-green-600 via-emerald-600 to-secondary",
      icon: "🌾",
    },
    {
      title: "Nakama Quiz",
      subtitle: "Interactive Learning Platform",
      description:
        "Web-based quiz platform with role-based access control, admin dashboard for content management, and real-time performance tracking. Full-stack solution for educational institutions.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
      ],
      impact: "Enables educators to create, manage, and analyze student assessments",
      github: "#",
      demo: "#",
      gradient: "from-violet-600 via-purple-600 to-primary",
      icon: "📝",
    },
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <AnimatedBackground variant="project" intensity="high" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Section title */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="text-primary" size={40} />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              className="group relative h-full rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden cursor-reactive"
            >
              {/* Gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Data visualization circles */}
              <div className="absolute inset-0 opacity-30">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-24 h-24 rounded-full border border-primary/40"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 20}%`,
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.4,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>

              {/* Glow overlay on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at center, rgba(0, 200, 255, 0.2), rgba(255, 0, 0, 0.1))",
                }}
              />

              {/* Icon */}
              <motion.div
                className="absolute top-4 right-4 text-4xl z-10 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300"
              >
                {project.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-20 p-6 md:p-7 flex flex-col h-full">
                {/* Title section */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-primary/80 font-semibold">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm md:text-base mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Impact */}
                <motion.p
                  className="text-xs md:text-sm text-secondary/90 mb-6 italic flex items-start gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Zap size={16} className="flex-shrink-0 mt-0.5" />
                  {project.impact}
                </motion.p>

                {/* Tech stack */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-primary/80 mb-2 uppercase tracking-wider">
                    Stack
                  </p>
                  <motion.div
                    variants={containerVariants}
                    className="flex flex-wrap gap-2"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 0.3,
                              delay: techIndex * 0.05,
                            },
                          },
                        }}
                        className="px-2 py-1 rounded-full text-xs font-semibold bg-primary/20 border border-primary/40 text-primary group-hover:bg-primary/40 group-hover:border-primary/70 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-2 rounded-lg border-2 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/70 transition-all font-semibold text-sm"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-2 rounded-lg bg-primary/20 border-2 border-primary/50 text-primary hover:bg-primary/30 hover:border-primary/70 transition-all font-semibold text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>

              {/* Border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow:
                    "inset 0 0 40px rgba(0, 200, 255, 0.3), inset 0 0 20px rgba(255, 0, 0, 0.1), 0 0 50px rgba(0, 200, 255, 0.2)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

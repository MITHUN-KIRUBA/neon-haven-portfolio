import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Skill logos with colors and emoji/symbols
  const skills = [
    // Core AI & Data
    {
      name: "Python",
      logo: "🐍",
      color: "from-blue-400 to-cyan-400",
      category: "Core AI & Data",
    },
    {
      name: "Machine Learning",
      logo: "🧠",
      color: "from-purple-400 to-pink-400",
      category: "Core AI & Data",
    },
    {
      name: "Data Science",
      logo: "📊",
      color: "from-cyan-400 to-blue-400",
      category: "Core AI & Data",
    },
    {
      name: "SQL",
      logo: "🗄️",
      color: "from-orange-400 to-red-400",
      category: "Core AI & Data",
    },

    // Web & Frontend
    {
      name: "HTML",
      logo: "🏗️",
      color: "from-orange-500 to-red-500",
      category: "Web & Frontend",
    },
    {
      name: "CSS",
      logo: "🎨",
      color: "from-blue-500 to-indigo-500",
      category: "Web & Frontend",
    },
    {
      name: "JavaScript",
      logo: "⚡",
      color: "from-yellow-400 to-yellow-500",
      category: "Web & Frontend",
    },
    {
      name: "React",
      logo: "⚛️",
      color: "from-cyan-400 to-blue-400",
      category: "Web & Frontend",
    },

    // Backend & Databases
    {
      name: "PHP",
      logo: "🐘",
      color: "from-purple-500 to-indigo-500",
      category: "Backend & Databases",
    },
    {
      name: "MySQL",
      logo: "🐬",
      color: "from-blue-500 to-cyan-500",
      category: "Backend & Databases",
    },
    {
      name: "FastAPI",
      logo: "⚙️",
      color: "from-teal-400 to-cyan-400",
      category: "Backend & Databases",
    },
    {
      name: "GitHub",
      logo: "🐙",
      color: "from-gray-600 to-gray-800",
      category: "Backend & Databases",
    },

    // Big Data & Tools
    {
      name: "Apache Spark",
      logo: "⚡",
      color: "from-orange-500 to-yellow-500",
      category: "Big Data & Tools",
    },
    {
      name: "PySpark",
      logo: "🔥",
      color: "from-red-500 to-orange-500",
      category: "Big Data & Tools",
    },
    {
      name: "Japanese (JLPT N4)",
      logo: "🇯🇵",
      color: "from-red-400 to-pink-400",
      category: "Other",
    },
    {
      name: "Problem Solving",
      logo: "🧩",
      color: "from-purple-400 to-indigo-400",
      category: "Other",
    },
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <AnimatedBackground variant="section" intensity="medium" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Section title */}
        <motion.div
          variants={itemVariants}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3 justify-center md:justify-start">
            <Zap className="text-primary" size={40} />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Skill groups with logo-based cards */}
        <motion.div
          variants={containerVariants}
          className="space-y-12 md:space-y-14"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills], groupIndex) => (
            <motion.div key={category} variants={itemVariants}>
              {/* Category title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-primary">
                {category}
              </h3>

              {/* Logo-based skill cards grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6"
              >
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    {/* Skill card container */}
                    <motion.div
                      className="relative p-4 md:p-6 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card to-secondary/8 hover:border-primary/70 transition-all cursor-reactive overflow-hidden h-full flex flex-col items-center justify-center"
                      style={{
                        boxShadow: "inset 0 1px 0 rgba(0, 200, 255, 0.1)",
                      }}
                    >
                      {/* Background glow on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, rgba(0, 200, 255, 0.2), rgba(255, 0, 0, 0.1))`,
                        }}
                      />

                      {/* Inner glow border on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          boxShadow: "inset 0 0 30px rgba(0, 200, 255, 0.25), inset 0 0 15px rgba(255, 0, 0, 0.1)",
                        }}
                      />

                      {/* Skill content */}
                      <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        {/* Animated logo */}
                        <motion.div
                          animate={{
                            scale: [1, 1.15, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1,
                            ease: "easeInOut",
                          }}
                          className={`text-4xl md:text-5xl mb-3 group-hover:scale-125 transition-transform`}
                        >
                          {skill.logo}
                        </motion.div>

                        {/* Skill name */}
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                          {skill.name}
                        </p>

                        {/* Color accent bar */}
                        <motion.div
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} rounded-b-xl`}
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Animated dot in corner */}
                      <motion.div
                        className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        animate={{
                          scale: [0.8, 1.2, 0.8],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.15,
                        }}
                      />
                    </motion.div>

                    {/* Skill tooltip on hover (mobile-friendly) */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: -10 }}
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-background/95 backdrop-blur border border-primary/50 text-primary text-xs font-semibold whitespace-nowrap pointer-events-none -top-10"
                    >
                      {skill.name}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

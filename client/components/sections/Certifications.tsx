import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: string;
  image?: string;
}

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const certifications: Certificate[] = [
    {
      id: "jlpt-n5",
      title: "Japanese Language Proficiency Test – N5",
      issuer: "Japan Foundation / JEES",
      year: "2025",
      description: "Certified competency in Japanese language at N5 level - Foundation level proficiency",
      icon: "🇯🇵",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1d111ce13933408891f238e8ed957246%2Fccc3b724642b4cee8a2d485d6f70c4fd?format=webp&width=800",
    },
    {
      id: "cisco-ds",
      title: "Cisco – Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      year: "2025",
      description: "Student-level credential covering data analytics, AI and ML, and career development",
      icon: "📊",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1d111ce13933408891f238e8ed957246%2Fc0fa82e2f68e48ae9f5712068086034d?format=webp&width=800",
    },
    {
      id: "cisco-cyber",
      title: "Cisco – Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      year: "2025",
      description: "Advanced training in vulnerability assessment, compliance frameworks, and incident response",
      icon: "🔒",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1d111ce13933408891f238e8ed957246%2Fdce08d81515a468aa7aef267445b4487?format=webp&width=800",
    },
    {
      id: "nptel-i40",
      title: "NPTEL – Introduction to Industry 4.0 & IIoT",
      issuer: "NPTEL (MHRD) - IIT Kharagpur",
      year: "2025",
      description: "Elite certification with 60% consolidated score covering Industry 4.0 and Industrial IoT",
      icon: "⚙️",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1d111ce13933408891f238e8ed957246%2Fa68e183ed263404894557e9683b111b9?format=webp&width=800",
    },
    {
      id: "nptel-eh",
      title: "NPTEL – Ethical Hacking",
      issuer: "NPTEL (MHRD) - IIT Kharagpur",
      year: "2025",
      description: "Elite certification with 54% consolidated score in ethical hacking methodologies",
      icon: "🛡️",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1d111ce13933408891f238e8ed957246%2F6e5efac65dbe4815b8985d5f7d454474?format=webp&width=800",
    },
    {
      id: "ibm-scala",
      title: "IBM – Scala Programming for Data Science (Level 1)",
      issuer: "IBM Skills Network",
      year: "2025",
      description: "Professional excellence certification in Scala language for data science applications",
      icon: "💻",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1d111ce13933408891f238e8ed957246%2F32285d56a5334c7a911753afb9325a62?format=webp&width=800",
    },
    {
      id: "pma",
      title: "IBM – Predictive Modeling Fundamentals I",
      issuer: "Cognitive Class / IBM Developer Skills Network",
      year: "2025",
      description: "Comprehensive training in predictive modeling and machine learning fundamentals",
      icon: "🤖",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1d111ce13933408891f238e8ed957246%2F88b6b09db9224bab840bbe7b84bfe23b?format=webp&width=800",
    },
    {
      id: "scala-101",
      title: "Scala 101",
      issuer: "Cognitive Class / IBM Developer Skills Network",
      year: "2025",
      description: "Foundational Scala programming language course for data science applications",
      icon: "📝",
    },
  ];

  return (
    <section id="certifications" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
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
            <Award className="text-primary" size={40} />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Certifications grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.button
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedCert(cert.id)}
              className="group relative p-6 md:p-8 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-card to-secondary/10 hover:border-primary/70 transition-all cursor-reactive text-left h-full overflow-hidden"
              style={{
                boxShadow: "inset 0 1px 0 rgba(0, 200, 255, 0.1)",
              }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, rgba(0, 200, 255, 0.15), rgba(255, 0, 0, 0.08))`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-primary font-semibold text-sm mb-2">
                  {cert.issuer}
                </p>

                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {cert.description}
                </p>

                {/* Year badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold group-hover:bg-primary/30 transition-colors">
                    {cert.year}
                  </span>

                  {cert.image && (
                    <span className="text-xs text-primary/60 font-semibold">
                      Click to view
                    </span>
                  )}
                </div>
              </div>

              {/* Glow border on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 30px rgba(0, 200, 255, 0.2), inset 0 0 15px rgba(255, 0, 0, 0.1)",
                }}
              />
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-card rounded-2xl overflow-hidden cursor-reactive"
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/90 backdrop-blur text-primary hover:bg-background transition-colors"
              >
                <X size={24} />
              </motion.button>

              {(() => {
                const cert = certifications.find((c) => c.id === selectedCert);
                if (!cert) return null;

                return (
                  <div className="p-6 md:p-10">
                    {/* Certificate image preview */}
                    {cert.image ? (
                      <motion.img
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-auto rounded-lg mb-6 border-2 border-primary/30"
                        onError={(e) => {
                          (e.currentTarget as HTMLElement).style.display = "none";
                        }}
                      />
                    ) : null}

                    {/* Content */}
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {cert.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-foreground/70 text-base mb-6">
                      {cert.description}
                    </p>

                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block px-4 py-2 rounded-lg bg-primary/20 border border-primary/40 text-primary font-bold"
                    >
                      Issued: {cert.year}
                    </motion.div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

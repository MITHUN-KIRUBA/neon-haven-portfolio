import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Code2, MessageSquare, Phone, ExternalLink } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export function Contact() {
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

  const contactMethods = [
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 9566981306",
      href: "tel:+919566981306",
      color: "from-emerald-500 to-teal-500",
      tooltip: "Click to call",
      isClickable: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: "kirubamithun28@gmail.com",
      href: "mailto:kirubamithun28@gmail.com",
      color: "from-red-500 to-pink-500",
      tooltip: "Send email",
      isClickable: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mithun-kiruba",
      href: "https://www.linkedin.com/in/mithun-kiruba",
      color: "from-blue-500 to-cyan-500",
      tooltip: "Visit profile",
      isClickable: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/MITHUN-KIRUBA",
      href: "https://github.com/MITHUN-KIRUBA",
      color: "from-gray-500 to-gray-700",
      tooltip: "View projects",
      isClickable: true,
    },
    {
      icon: Code2,
      label: "LeetCode",
      value: "leetcode.com/u/MITHUN_KIRUBA13",
      href: "https://leetcode.com/u/MITHUN_KIRUBA13/",
      color: "from-yellow-500 to-orange-500",
      tooltip: "Check solutions",
      isClickable: true,
    },
    {
      icon: MessageSquare,
      label: "HackerRank",
      value: "hackerrank.com/kirubamithun28",
      href: "https://www.hackerrank.com/profile/kirubamithun28",
      color: "from-green-500 to-emerald-500",
      tooltip: "View profile",
      isClickable: true,
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <AnimatedBackground variant="contact" intensity="high" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Section title */}
        <motion.div variants={itemVariants} className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Open to opportunities, collaboration, and discussion. Reach out through any of these channels!
          </p>
        </motion.div>

        {/* Contact methods - Stacked Card Layout */}
        <motion.div
          variants={containerVariants}
          className="max-w-3xl mx-auto space-y-4 md:space-y-5 mb-12 md:mb-16"
        >
          {contactMethods.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("tel:") || contact.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={contact.href.startsWith("tel:") || contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 8 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full p-5 md:p-6 rounded-xl border-2 border-primary/30 bg-gradient-to-r from-primary/5 via-card to-secondary/5 hover:border-primary/70 transition-all cursor-reactive overflow-hidden"
              >
                {/* Background gradient glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, rgba(0, 200, 255, 0.15), rgba(255, 0, 0, 0.08))`,
                  }}
                />

                {/* Tooltip on hover */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-background/95 backdrop-blur border border-primary/50 text-primary text-xs font-semibold whitespace-nowrap pointer-events-none shadow-lg"
                >
                  {contact.tooltip}
                </motion.div>

                <div className="relative z-10 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4 flex-1">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className={`p-3 md:p-4 rounded-lg bg-gradient-to-r ${contact.color} text-white group-hover:shadow-2xl transition-shadow flex-shrink-0`}
                    >
                      <Icon size={24} className="md:w-6 md:h-6" />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm font-semibold text-foreground/60 group-hover:text-primary transition-colors uppercase tracking-wider mb-1">
                        {contact.label}
                      </p>
                      <p className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-primary/50 group-hover:text-primary transition-colors flex-shrink-0"
                  >
                    <ExternalLink size={20} />
                  </motion.div>
                </div>

                {/* Inner border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 30px rgba(0, 200, 255, 0.2), inset 0 0 15px rgba(255, 0, 0, 0.1)",
                  }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Primary CTA Buttons - Enhanced */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap max-w-2xl mx-auto"
        >
          <motion.a
            href="tel:+919566981306"
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 md:py-5 rounded-lg bg-gradient-to-r from-primary to-secondary text-background font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-reactive flex-1 sm:flex-none"
            style={{
              boxShadow: "0 0 30px rgba(0, 200, 255, 0.4), 0 0 15px rgba(255, 0, 0, 0.2)",
            }}
          >
            <Phone size={20} />
            Call Now
          </motion.a>

          <motion.a
            href="mailto:kirubamithun28@gmail.com"
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 md:py-5 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all flex items-center justify-center gap-2 cursor-reactive flex-1 sm:flex-none"
          >
            <Mail size={20} />
            Email Me
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/mithun-kiruba"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 md:py-5 rounded-lg border-2 border-secondary text-secondary font-bold hover:bg-secondary/10 transition-all flex items-center justify-center gap-2 cursor-reactive flex-1 sm:flex-none"
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

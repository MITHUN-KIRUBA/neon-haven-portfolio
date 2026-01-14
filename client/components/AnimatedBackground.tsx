import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "project" | "contact";
  intensity?: "low" | "medium" | "high";
}

export function AnimatedBackground({
  variant = "section",
  intensity = "medium",
}: AnimatedBackgroundProps) {
  const particleCount = intensity === "low" ? 4 : intensity === "high" ? 12 : 7;

  const generateParticles = () => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 300 + 100,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 8,
    }));
  };

  const particles = generateParticles();

  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient layer */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, rgba(0, 200, 255, 0.08) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Dynamic gradient shift */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 80% 60%, rgba(255, 0, 0, 0.05) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Grid background with animation */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 200, 255, 0.1) 25%, rgba(0, 200, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 200, 255, 0.1) 75%, rgba(0, 200, 255, 0.1) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(0, 200, 255, 0.1) 25%, rgba(0, 200, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 200, 255, 0.1) 75%, rgba(0, 200, 255, 0.1) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0 0", "50px 50px"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating orbs with parallax depth */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full blur-3xl"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: `radial-gradient(circle, rgba(0, 200, 255, 0.25), rgba(255, 0, 0, 0.12))`,
              filter: "blur(40px)",
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Secondary particle layer (smaller, faster) */}
        {particles.slice(0, Math.floor(particleCount / 2)).map((particle, idx) => (
          <motion.div
            key={`secondary-${idx}`}
            className="absolute rounded-full"
            style={{
              width: particle.size * 0.5,
              height: particle.size * 0.5,
              left: `${(particle.x + 30) % 100}%`,
              top: `${(particle.y + 40) % 100}%`,
              background: `radial-gradient(circle, rgba(0, 200, 255, 0.15), transparent)`,
              filter: "blur(25px)",
            }}
            animate={{
              y: [0, 80, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration * 0.7,
              delay: particle.delay * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Data flow animation lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
          <defs>
            <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(0, 200, 255)" />
              <stop offset="50%" stopColor="rgb(255, 0, 0)" />
              <stop offset="100%" stopColor="rgb(0, 200, 255)" />
            </linearGradient>
          </defs>
          {/* Multiple flowing paths for depth */}
          <motion.path
            d="M 0,100 Q 250,50 500,100 T 1000,100"
            stroke="url(#dataFlow)"
            strokeWidth="2"
            fill="none"
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ filter: "drop-shadow(0 0 10px rgba(0, 200, 255, 0.5))" }}
          />
          <motion.path
            d="M 0,150 Q 300,80 600,150 T 1200,150"
            stroke="url(#dataFlow)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            style={{ filter: "drop-shadow(0 0 8px rgba(255, 0, 0, 0.4))" }}
          />
        </svg>

        {/* Animated rings for depth */}
        {[0, 1, 2].map((idx) => (
          <motion.div
            key={`ring-${idx}`}
            className="absolute rounded-full border border-primary/20"
            style={{
              width: "200px",
              height: "200px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [0.5, 2, 0.5],
              opacity: [0.8, 0.2, 0.8],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 8 + idx * 2,
              delay: idx * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "project") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circuit pattern with animation */}
        <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 200, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 0, 0, 0.3)" />
            </linearGradient>
          </defs>
          <motion.g>
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.circle
                key={i}
                cx={`${20 + i * 20}%`}
                cy="50%"
                r="8"
                fill="none"
                stroke="url(#circuitGradient)"
                strokeWidth="1"
                animate={{
                  opacity: [0.3, 0.9, 0.3],
                  r: [8, 18, 8],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.4,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.g>
        </svg>

        {/* Floating particles with depth */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size * 0.6,
              height: particle.size * 0.6,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: `radial-gradient(circle, rgba(0, 200, 255, 0.4), transparent)`,
              filter: "blur(25px)",
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 60, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration * 0.8,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pulsing background orbs */}
        {particles.map((particle, idx) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size * 0.7,
              height: particle.size * 0.7,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background:
                idx % 2 === 0
                  ? `radial-gradient(circle, rgba(0, 200, 255, 0.3), transparent)`
                  : `radial-gradient(circle, rgba(255, 0, 0, 0.2), transparent)`,
              filter: "blur(35px)",
            }}
            animate={{
              y: [0, -80, 0],
              scale: [0.8, 1.3, 0.8],
              opacity: [0.25, 0.65, 0.25],
            }}
            transition={{
              duration: particle.duration * 0.9,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  // Default section variant with enhanced motion
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background with depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(0, 200, 255, 0.08), rgba(255, 0, 0, 0.03))`,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Main floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-2xl"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, rgba(0, 200, 255, 0.2), rgba(255, 0, 0, 0.1))`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Secondary smaller particles for layered depth */}
      {particles.slice(0, Math.floor(particleCount / 2)).map((particle, idx) => (
        <motion.div
          key={`secondary-${idx}`}
          className="absolute rounded-full"
          style={{
            width: particle.size * 0.4,
            height: particle.size * 0.4,
            left: `${(particle.x + 25) % 100}%`,
            top: `${(particle.y + 35) % 100}%`,
            background: `radial-gradient(circle, rgba(0, 200, 255, 0.12), transparent)`,
            filter: "blur(20px)",
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: particle.duration * 0.8,
            delay: particle.delay * 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Add CSS animation for grid shift
const style = document.createElement("style");
style.textContent = `
  @keyframes grid-shift {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }
`;
document.head.appendChild(style);

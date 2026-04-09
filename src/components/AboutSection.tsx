import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "Java", "JavaScript", "React.js", "Node.js",
    "MongoDB", "Express.js", "MySQL", "HTML5",
    "CSS3", "Tailwind CSS", "Redux Toolkit", "JWT",
    "Firebase", "Socket.io", "Git", "Framer Motion",
  ];

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">01 —</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background">
            <img src={profileImg} alt="Abhishek Singh" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              Enthusiastic Software Developer with hands-on experience building real-time
              and responsive web applications. Currently pursuing my Master of Computer
              Application at JSS Academy of Technical Education, Noida.
            </p>
            <p>
              I'm adept at problem-solving and thrive in collaborative team environments.
              My coursework spans Data Structures & Algorithms, Operating Systems, OOP,
              and Web Technology — and I'm always looking to learn and grow with modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-mono text-primary mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                  className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

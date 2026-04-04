import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "InterviewAI",
    description: "AI-powered mock interview platform with Google Authentication, AI-based answer evaluation, resume-driven question generation, performance analytics dashboard, and downloadable PDF feedback reports.",
    tags: ["MERN", "JWT", "Firebase", "OpenAI", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
  },
  {
    title: "Quicky",
    description: "Real-time chat application with instant message delivery via Socket.io, secure JWT authentication, bcrypt-encrypted passwords, and a modern responsive UI.",
    tags: ["MERN", "Socket.io", "JWT", "Tailwind CSS"],
    link: "https://chat-application-six-beta.vercel.app/login",
    github: "https://github.com/itzz-abhi/chatApplication",
  },
  {
    title: "Weather Forecast",
    description: "Responsive weather app displaying real-time data from a public Weather API — temperature, conditions, and more — with a clean card layout across multiple cities.",
    tags: ["HTML", "CSS", "JavaScript", "Weather API"],
    link: "https://weather-forcast-steel.vercel.app/",
    github: "https://github.com/itzz-abhi/weatherForcast",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">02 —</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Featured Projects</h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

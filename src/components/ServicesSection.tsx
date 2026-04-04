import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Server, Smartphone } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces with modern frameworks.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Designing robust APIs, databases, and server infrastructure for scalable applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps with native performance using React Native.",
  },
  {
    icon: Code2,
    title: "Technical Consulting",
    description: "Architecture reviews, performance optimization, and technology strategy guidance.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">03 —</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-xl p-6 md:p-8 group hover:border-primary/30 transition-all duration-500"
            >
              <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

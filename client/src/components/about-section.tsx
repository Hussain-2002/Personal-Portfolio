import { motion } from "framer-motion";
import {
  Download,
  MessageCircle,
  Code,
  Server,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";

const stats = [
  { label: "Years Experience", value: "1+", icon: "experience" },
  { label: "Projects Completed", value: "10+", icon: "projects" },
];

const techStack = [
  { name: "React", icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "Next.js", icon: Code, color: "from-gray-500 to-gray-700" },
  { name: "Tailwind CSS", icon: Code, color: "from-blue-500 to-purple-500" },
  { name: "TypeScript", icon: Code, color: "from-blue-500 to-purple-500" },
  { name: "JavaScript", icon: Code, color: "from-yellow-500 to-orange-500" },
  { name: "HTML", icon: Code, color: "from-red-500 to-orange-500" },
  { name: "CSS", icon: Code, color: "from-blue-500 to-purple-500" },
  { name: "Git", icon: Code, color: "from-red-500 to-orange-500" },
  { name: "Node.js", icon: Server, color: "from-green-500 to-emerald-500" },
  { name: "MongoDB", icon: Database, color: "from-purple-500 to-pink-500" },
  { name: "SQL", icon: Database, color: "from-orange-500 to-yellow-500" },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 bg-gray-50 dark:bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            variants={slideInFromLeft}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern developer workspace with multiple monitors"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isVisible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.3 }}
              className="absolute -top-8 -right-8 glass-effect rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isVisible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 glass-effect rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            variants={slideInFromRight}
            className="space-y-8"
          >
            <div>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="gradient-text">About Me</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
              >
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital solutions that make a difference. I
                specialize in React, Node.js, and modern web technologies.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
              >
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </motion.p>
            </div>

            {/* Tech Stack Icons */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-4">
                Technologies I Love
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.1 * index + 0.5 }}
                    className="group p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700"
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <tech.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex space-x-4">
              <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105">
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

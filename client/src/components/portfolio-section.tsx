import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "web",
    featured: true,
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "web",
    featured: false,
    tech: ["React.js", "SQL", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Blog Management System",
    description: "A robust blogging platform with user authentication, content management, and SEO optimization features. Built with React.js and Node.js.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "backend",
    featured: false,
    tech: ["Node.js", "React.js", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Calculator App",
    description: "A mobile calculator app built with React Native and Expo, featuring a clean UI, scientific calculations, and history tracking.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "web",
    featured: false,
    tech: ["React Native", "", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "CRM Management Dashboard",
    description: "A comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts built with D3.js and React.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "Backend",
    featured: false,
    tech: ["React", "Tailwind CSS", "TypeScript" ,"MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description: "A personal portfolio showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS for a modern, responsive design.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "web",
    featured: false,
    tech: ["React.js", "Tailwind CSS", "APP Script"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const filters = [
  { name: "All Projects", value: "all" },
  { name: "Web Apps", value: "web" },
  { name: "Mobile", value: "mobile" },
  { name: "Backend", value: "backend" },
];

const techColors: { [key: string]: string } = {
  React: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  "Node.js": "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  MongoDB: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  "Next.js": "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  "Socket.io": "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
  PostgreSQL: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  Docker: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  Redis: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  "React Native": "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  Expo: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
  Firebase: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  "D3.js": "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  TypeScript: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
  "GitHub Actions": "bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400",
  AWS: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
};

export function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section ref={ref} id="portfolio" className="py-24 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
          >
            A showcase of my recent work, featuring full-stack applications, responsive designs, and innovative solutions.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                variant={activeFilter === filter.value ? "default" : "outline"}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                {filter.name}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full ${
                          techColors[tech] || "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                    >
                      <span className="mr-1">View Live</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 px-8 py-4 font-medium rounded-xl transition-all duration-300 transform hover:scale-105">
            <span className="mr-2">View All Projects</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

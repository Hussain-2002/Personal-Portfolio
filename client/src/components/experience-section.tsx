import { motion } from "framer-motion";
import { Building, Code, Laptop } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "GOANNY TECHNOLOGIES",
    period: "2022 - Present",
    description: "Leading a team of 5 developers in building scalable web applications. Architected microservices infrastructure that improved system performance by 40%.",
    technologies: ["React", "Node.js", "NEXT.js"],
    icon: Building,
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-primary",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "NUMETRY TECHNOLOGIES",
    period: "JAN 2025 - MARCH 2025",
    description: "Developed and maintained multiple client applications using React and Node.js. Implemented automated testing that reduced bugs by 60%.",
    technologies: ["React", "Express", "MongoDB"],
    icon: Code,
    color: "from-purple-500 to-pink-500",
    iconBg: "bg-secondary",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "BECILS PRIVATE LIMITED",
    period: "JUNE 2022 to AUGUST 2022",
    description: "Built responsive web applications and landing pages. Collaborated with designers to create pixel-perfect user interfaces.",
    technologies: ["React", "Tailwind", "JavaScript"],
    icon: Laptop,
    color: "from-green-500 to-emerald-500",
    iconBg: "bg-emerald-500",
  },
];

const techColors: { [key: string]: string } = {
  React: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  "Node.js": "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  AWS: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  Express: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  MongoDB: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  Tailwind: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
  JavaScript: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
};

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            My professional journey through various roles and companies, building innovative solutions and leading development teams.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-primary to-secondary" />

          {/* Timeline Items */}
          <motion.div
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            variants={staggerChildren}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={fadeInUp}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${experience.iconBg} border-4 border-white dark:border-gray-900 rounded-full shadow-lg z-10`} />

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${experience.color} rounded-xl flex items-center justify-center mr-4`}>
                        <experience.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {experience.title}
                        </h3>
                        <p className="text-primary font-medium">{experience.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {experience.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs rounded-full ${
                            techColors[tech] || "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

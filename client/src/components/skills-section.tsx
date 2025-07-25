import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "SQL", level: 85 },
      { name: "Firebase", level: 75 },
    ],
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !animated) {
      setAnimated(true);
    }
  }, [isVisible, animated]);

  return (
    <section ref={ref} id="skills" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical skills and proficiency levels in various technologies and tools.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full skill-bar-animation`}
                        initial={{ width: 0 }}
                        animate={animated ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

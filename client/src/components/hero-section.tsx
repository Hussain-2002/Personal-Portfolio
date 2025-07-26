import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const texts = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Innovator"];

export function HeroSection() {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const text = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < text.length) {
        setCurrentText(text.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(text.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === text.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900" />

      {/* Floating Geometric Shapes (Hidden on mobile) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="hidden sm:block absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 relative"
          >
            <img
              src="/profile.png"
              alt="Hussain Ali Mesharwala"
              className="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-white dark:ring-gray-800"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 transition-all duration-300" />
          </motion.div>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">
            Hussain Ali Mesharwala
          </span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12"
        >
          <span>{currentText}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Creating beautiful, performant web applications with modern technologies.
          Passionate about clean code, user experience, and innovative solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection("#portfolio")}
            className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">View My Work</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="group glass-effect px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">Get In Touch</span>
            <Mail className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center cursor-pointer"
          onClick={() => scrollToSection("#about")}
        >
          <ChevronDown className="w-4 h-4 mt-2 text-gray-400 dark:text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
export default HeroSection;
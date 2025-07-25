import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "Mobile Apps", 
  "API Development",
  "Consulting",
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/hussain-ali-mesharwala-865315205", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Hussain-2002", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/hussain_maheshwar_wala/", label: "Instagram" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <button
              onClick={() => scrollToSection("#home")}
              className="text-3xl font-bold gradient-text mb-4 block"
            >
              Hussain Ali Mesharwala
            </button>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Full Stack Developer passionate about creating beautiful, performant web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-600 dark:text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Hussain Ali Mesharwala. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              className="bg-primary text-white hover:bg-primary/90 rounded-lg px-4 py-2 transition-colors duration-200"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

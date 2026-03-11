import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

const ContactSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 rounded-full mx-auto mb-8"
            style={{ background: "var(--gradient-amber)" }}
          />
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
            Whether it's about engineering, entrepreneurship, or the next great ride — I'd love to hear from you.
          </p>

          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold text-lg shadow-[var(--shadow-glow)] transition-shadow hover:shadow-[0_8px_40px_-6px_hsl(24_85%_48%/0.4)]"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.a>

          <div className="flex justify-center gap-4 mt-12">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[var(--shadow-glow)] transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/jumanahasinkammiyil@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message,
            _subject: `New Portfolio Message from ${formState.name}`,
          }),
        },
      );

      const result = await response.json();

      if (result.success === "true" || response.ok) {
        setIsSent(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 flex flex-col items-center text-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-6xl font-serif italic mb-20 flex flex-col items-center gap-4">
          <span className="text-[#c5a059] font-display text-[11px] uppercase tracking-[0.5em] mb-4">
            04. Connection
          </span>
          Let's Converse
        </h2>

        <div className="grid lg:grid-cols-2 gap-24 items-start text-left">
          <div className="space-y-12">
            <h3 className="text-4xl font-serif italic text-zinc-900 dark:text-zinc-100 leading-tight">
              Have a vision in mind?
              <br />
              <span className="text-[#c5a059]">Let’s build it together.</span>
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 text-lg font-light leading-relaxed">
              I’m currently available for freelance opportunities and full-time
              roles. If you’re looking for a developer who values clean code and
              great design, I’d love to hear from you.
            </p>

            <div className="space-y-8 pt-8">
              {[
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  value: "jumanahasinkammiyil@gmail.com",
                  href: "mailto:jumanahasinkammiyil@gmail.com",
                },
                {
                  icon: <Linkedin size={20} />,
                  label: "LinkedIn",
                  value: "linkedin.com/in/jumanakammiyil",
                  href: "https://linkedin.com/in/jumanakammiyil",
                },
                {
                  icon: <Github size={20} />,
                  label: "GitHub",
                  value: "github.com/jumana18",
                  href: "https://github.com/jumana18",
                },
                {
                  icon: <Phone size={20} />,
                  label: "Phone",
                  value: "+91 9746671214",
                  href: "tel:+919746671214",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c5a059]/5 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-display text-[#c5a059] uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-zinc-900 dark:text-zinc-100 font-serif text-lg">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 border border-zinc-200 dark:border-white/10 rounded-2xl bg-zinc-50/50 dark:bg-white/[0.02]"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-display text-zinc-500 uppercase tracking-widest ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-6 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-xl focus:border-[#c5a059] outline-none transition-all font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-display text-zinc-500 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-6 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-xl focus:border-[#c5a059] outline-none transition-all font-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-display text-zinc-500 uppercase tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-xl focus:border-[#c5a059] outline-none transition-all font-light resize-none"
                  placeholder="Tell me about your vision..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-zinc-900 dark:bg-[#c5a059] text-white dark:text-black text-[11px] font-display font-bold tracking-[0.3em] uppercase rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                ) : isSent ? (
                  "MESSAGE SENT"
                ) : (
                  <>
                    SEND MESSAGE{" "}
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

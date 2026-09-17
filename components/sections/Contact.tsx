"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";

import {
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "gichukikelvin679@gmail.com",
    href: "mailto:gichukikelvin679@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 758 475 640",
    href: "tel:+254758475640",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kenya",
    href: "#",
  },
];

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/gichukikelvin67",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "www.linkedin.com/in/kelvin-gichuki-402b0a437",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/254758475640",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send message."
        );
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        "Unable to send your message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-red-500/5 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-72 w-72 rounded-full bg-yellow-400/5 blur-[140px]" />

      <div className="pointer-events-none absolute left-[45%] top-[40%] h-64 w-64 rounded-full bg-red-400/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* HEADING */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s talk about{" "}
            <span className="text-gray-400 dark:text-gray-500">
              your idea.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400">
            Have a project, opportunity or idea you would like
            to discuss? Send me a message and I&apos;ll get back
            to you.
          </p>
        </motion.div>

        {/* CONTACT GRID */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="rounded-3xl border border-black/10 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.025]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              Get In Touch
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-gray-400">
              You can reach me directly using any of the contact
              methods below.
            </p>

            {/* Contact details */}

            <div className="mt-8 space-y-4">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.025]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-gray-400">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate text-sm font-medium">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto shrink-0 text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Social links */}

            <div className="mt-9">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Find Me Online
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:text-red-500 dark:border-white/10 dark:text-gray-400"
                    >
                      <Icon size={19} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.025]"
          >
            <div className="flex items-start justify-between gap-5">

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Start A Conversation
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Send me a message
                </h3>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-500 sm:flex">
                <Send size={19} />
              </div>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  required
                  className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/10 dark:border-white/10 dark:bg-white/[0.03]"
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  required
                  className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/10 dark:border-white/10 dark:bg-white/[0.03]"
                />
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  required
                  className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/10 dark:border-white/10 dark:bg-white/[0.03]"
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  required
                  className="w-full resize-none rounded-xl border border-black/10 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/10 dark:border-white/10 dark:bg-white/[0.03]"
                />
              </div>

              {/* Status */}

              {status && (
                <div
                  className={`rounded-xl px-4 py-3 text-center text-sm ${
                    status.includes("successfully")
                      ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                      : "bg-red-500/10 text-red-600 dark:text-red-400"
                  }`}
                >
                  {status}
                </div>
              )}

              {/* Submit */}

              <button
                type="submit"
                disabled={sending}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}

                {!sending && (
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                )}
              </button>

            </form>
          </motion.div>
        </div>

        {/* WHATSAPP CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-black/10 p-7 text-center dark:border-white/10 md:flex-row md:text-left"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Prefer WhatsApp?
            </p>

            <h3 className="mt-2 text-xl font-bold">
              Let&apos;s have a quick conversation.
            </h3>
          </div>

          <a
            href="https://wa.me/254758475640"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl border border-black/10 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-yellow-500 hover:text-yellow-600 dark:border-white/10"
          >
            <FaWhatsapp size={18} />

            Chat on WhatsApp

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
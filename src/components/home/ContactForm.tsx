"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { sendEmail } from "@/lib/email";

const initialFormData = { name: "", email: "", reason: "", message: "" };

const inputClass =
  "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors";

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendEmail(formData);
      setFormData(initialFormData);
      toast.success("Message sent successfully!");
    } catch (error: unknown) {
      const raw = error as Record<string, unknown>;
      const message =
        typeof raw?.text === "string"
          ? raw.text
          : error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later.";
      toast.error(
        message.includes("Invalid grant")
          ? "Email provider connection expired. Please try again later."
          : message
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-24 py-20 border-t border-white/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        {/* Left */}
        <div>
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Let&apos;s work
            <br />
            together.
          </h2>
          <p className="mt-4 text-gray-400 text-base leading-7 max-w-sm">
            I&apos;m currently available for new projects. Send me a message
            and let&apos;s talk.
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                icon: <FaLocationDot size={15} className="text-blue-400" />,
                label: "Location",
                value: "Lagos, Nigeria",
              },
              {
                icon: <LuPhoneCall size={15} className="text-blue-400" />,
                label: "Phone",
                value: "+2349056056463",
              },
              {
                icon: <MdOutlineEmail size={15} className="text-blue-400" />,
                label: "Email",
                value: "ajitenadavid@gmail.com",
              },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest">
                    {label}
                  </p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs text-gray-600 uppercase tracking-widest mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs text-gray-600 uppercase tracking-widest mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block text-xs text-gray-600 uppercase tracking-widest mb-2"
            >
              Subject
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className={`${inputClass} [&>option]:bg-[#212529]`}
            >
              <option value="" disabled>
                Select a reason
              </option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs text-gray-600 uppercase tracking-widest mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project..."
              className={inputClass}
            />
          </div>

          <motion.button
            type="submit"
            disabled={sending}
            className={`w-full py-3.5 font-semibold text-sm rounded-xl transition-colors ${
              sending
                ? "bg-blue-400 cursor-not-allowed text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            whileTap={{ scale: 0.98 }}
          >
            {sending ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;

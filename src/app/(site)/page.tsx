"use client";

import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import HeroSection from "@/components/home/HeroSection";
import ContactForm from "@/components/home/ContactForm";

const Page = () => (
  <motion.div
    className="min-h-screen font-sen pt-7 bg-darkBackground"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <HeroSection />
    <ContactForm />
    <ToastContainer />
  </motion.div>
);

export default Page;

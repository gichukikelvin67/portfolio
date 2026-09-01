"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-32 w-32 sm:h-36 sm:w-36"
    >
      <div className="absolute -inset-2 rounded-full border border-white/10" />

      <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 shadow-2xl">
        <Image
          src="/images/IMG-20260702-WA0007_(1)[1].jpg"
          alt="Kelvin Kariuki"
          fill
          priority
          className="object-cover"
          sizes="144px"
        />
      </div>
    </motion.div>
  );
}
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const AnnouncementBanner = () => {
  return (
    <motion.div
      className="group border border-lime-200 rounded-full px-4 sm:px-3 py-1 inline-flex items-center space-x-2 sm:space-x-3 mx-auto mb-6 sm:mb-8 max-w-full hover:bg-limeSoft transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <span className="bg-limeSoft text-gray-900 text-xs font-semibold px-1 rounded-full group-hover:bg-lime-900 group-hover:text-white transition-colors">
        New
      </span>

      <span className="text-gray-700 text-xs sm:text-sm">
        Announcing our $2.3M Seed Round
      </span>
      <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
    </motion.div>
  );
};

export default AnnouncementBanner;

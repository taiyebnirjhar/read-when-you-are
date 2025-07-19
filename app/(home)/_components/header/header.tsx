import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative px-4 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 p-2.5">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Read when you are{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                ...
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Find comfort and guidance through beautiful verses from the Quran,
              tailored to your current emotional state.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

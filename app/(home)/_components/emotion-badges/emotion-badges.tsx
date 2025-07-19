"use client";

import { Button } from "@/components/ui/";
import { motion } from "framer-motion";
import { Emotion } from "../../_types";

interface EmotionBadgesProps {
  emotions: Emotion[];
  handleEmotionClick: (emotion: Emotion) => void;
}

export default function EmotionBadges({
  emotions,
  handleEmotionClick,
}: EmotionBadgesProps) {
  return (
    <div className="px-4 pb-8 sm:pb-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 sm:gap-4"
        >
          {emotions.map((emotion, index) => (
            <motion.div
              key={emotion.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => handleEmotionClick(emotion)}
                className={`
              h-auto w-full flex-col gap-2 rounded-xl border-2 border-white/20 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/5
              ${emotion.color} hover:${emotion.color}/90 sm:gap-3 sm:p-5
            `}
                variant="ghost"
              >
                <div className="text-xl sm:text-2xl">
                  {emotion.id === "happy" && "😊"}
                  {emotion.id === "anxious" && "😰"}
                  {emotion.id === "thankful" && "🙏"}
                  {emotion.id === "lonely" && "😔"}
                  {emotion.id === "angry" && "😠"}
                  {emotion.id === "sad" && "😢"}
                </div>
                <span
                  className={`text-sm font-semibold ${emotion.textColor} sm:text-base`}
                >
                  {emotion.name}
                </span>
                <div className="text-xs opacity-75 font-medium">
                  {emotion.verses.length} verses
                </div>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

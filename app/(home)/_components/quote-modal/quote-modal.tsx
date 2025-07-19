"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { Emotion, Verse } from "../../_types";

interface QuoteModalProps {
  isOpen: boolean;
  selectedEmotion: Emotion | null;
  currentVerse: Verse | null;
  closeModal: () => void;
  handleNewVerse: () => void;
}

export default function QuoteModal({
  isOpen,
  selectedEmotion,
  currentVerse,
  closeModal,
  handleNewVerse,
}: QuoteModalProps) {
  return (
    <AnimatePresence>
      {isOpen && selectedEmotion && currentVerse && (
        <Dialog open={isOpen} onOpenChange={closeModal}>
          <DialogContent
            className={cn(
              "max-w-4xl border-0 p-0 shadow-2xl max-h-[90vh] overflow-y-auto",
              selectedEmotion.bgColor
            )}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`relative overflow-hidden rounded-lg ${selectedEmotion.bgColor}`}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative p-6 sm:p-8">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-xl font-bold text-white sm:text-2xl">
                    When you feel {selectedEmotion.name.toLowerCase()}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Arabic Verse */}
                  {currentVerse.arabicVerse && (
                    <motion.div
                      key={`arabic-${currentVerse.reference}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-center"
                    >
                      <p
                        className="text-lg sm:text-xl lg:text-2xl font-medium text-white/95 leading-relaxed"
                        dir="rtl"
                      >
                        {currentVerse.arabicVerse}
                      </p>
                    </motion.div>
                  )}

                  {/* English Translation */}
                  <motion.div
                    key={`english-${currentVerse.reference}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-medium text-center"
                  >
                    <p className="text-base sm:text-lg text-white leading-relaxed">
                      &quot;{currentVerse.verse}&quot;
                    </p>
                  </motion.div>

                  {/* Reference */}
                  <motion.div
                    key={`reference-${currentVerse.reference}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <p className="text-sm font-medium text-white/80">
                      {currentVerse.reference}
                    </p>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col  gap-3 pt-4"
                  >
                    <Button
                      onClick={handleNewVerse}
                      variant="ghost"
                      className="flex-1 text-white hover:text-white hover:bg-transparent border border-white/30 hover:border-white/90 transition-all duration-200"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Another verse
                    </Button>
                    <div className="text-center ">
                      <p className="text-xs text-white/70 px-3 py-2">
                        {selectedEmotion.verses.length} verses available
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/5" />
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

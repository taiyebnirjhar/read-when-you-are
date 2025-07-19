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
import { useEffect, useRef, useState } from "react";
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
  const [activeReciter, setActiveReciter] = useState<string | null>(null);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Stop audio on any condition
  const stopAudio = () => {
    // console.log("stopAudio called. audioRef.current:", audioRef.current);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset time
      // Important: Remove event listeners to prevent memory leaks and unexpected behavior
      audioRef.current.oncanplaythrough = null;
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
      audioRef.current = null; // Clear the ref
      // console.log("Audio paused and ref cleared.");
    }
    setIsPlaying(false);
    setActiveReciter(null);
    setLoadingAudio(false); // Ensure loading is off when stopped
  };

  // Stop audio on modal close or unmount
  useEffect(() => {
    // console.log("useEffect [isOpen] fired. isOpen:", isOpen);
    if (!isOpen) {
      // console.log("Modal closing, stopping audio.");
      stopAudio();
    }
    // Cleanup function: This runs when the component unmounts or before the effect re-runs
    return () => {
      // console.log("useEffect [isOpen] cleanup: stopping audio.");
      stopAudio();
    };
  }, [isOpen]);

  // Stop audio when verse changes
  useEffect(() => {
    // console.log(
    //   "useEffect [currentVerse] fired. currentVerse:",
    //   currentVerse?.reference
    // );
    // Only stop if a verse was previously playing, not on initial load
    if (audioRef.current) {
      // console.log("Verse changed, stopping current audio.");
      stopAudio();
    }
  }, [currentVerse]);

  const handleReciterClick = (id: string, url: string) => {
    // console.log("handleReciterClick called. ID:", id, "URL:", url);
    if (activeReciter === id && isPlaying) {
      // console.log("Clicking on currently playing reciter, pausing.");
      stopAudio(); // If it's the same reciter and playing, just pause it
      return;
    }

    // console.log("Stopping existing audio before playing new reciter.");
    stopAudio(); // Always stop before trying to play a new one

    setLoadingAudio(true);
    setActiveReciter(id);
    setIsPlaying(false); // Set to false initially, will be true on play

    const newAudio = new Audio(url);
    audioRef.current = newAudio; // Assign the new audio instance to the ref

    newAudio.oncanplaythrough = () => {
      // console.log("Audio can play through. URL:", url);
      setLoadingAudio(false);
      newAudio.play().catch((e) => {
        // console.error("Audio play failed:", e);
        // Handle cases where play() is interrupted by user gesture requirements
        // or other browser policy issues.
        alert("Error playing audio. Please try again.");
        stopAudio(); // Stop if play fails
      });
      setIsPlaying(true);
    };

    newAudio.onended = () => {
      // console.log("Audio ended. Stopping audio.");
      stopAudio();
    };

    newAudio.onerror = (e) => {
      // console.error("Audio error:", e);
      alert("Error playing audio.");
      stopAudio(); // Ensure cleanup on error
    };
  };

  const handlePause = () => {
    // console.log("handlePause called.");
    stopAudio();
  };

  const handleAnotherVerseClick = () => {
    // console.log("handleAnotherVerseClick called.");
    stopAudio();
    handleNewVerse();
  };

  const handleClose = () => {
    // console.log("handleClose (modal) called.");
    stopAudio();
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && selectedEmotion && currentVerse && (
        <Dialog open={isOpen} onOpenChange={handleClose}>
          <DialogContent
            className={cn(
              "max-w-4xl border-0 p-0 shadow-2xl h-[90vh] lg:h-auto lg:max-h-[90vh] overflow-y-auto overflow-x-hidden lg:overflow-hidden ",
              selectedEmotion.bgColor
            )}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-lg `}
            >
              {/* <div className="absolute inset-0 bg-black/10" /> */}
              <div className="relative p-6 sm:p-8 h-full">
                <div className="h-full flex justify-center items-center">
                  <div>
                    <DialogHeader className="mb-6">
                      <DialogTitle className="text-xl font-bold text-white sm:text-2xl text-center">
                        When you feel {selectedEmotion.name.toLowerCase()}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 h-full mt-auto">
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

                      {/* Bengali Translation */}
                      {currentVerse.bengali && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                          className="font-medium text-center"
                        >
                          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                            {currentVerse.bengali}
                          </p>
                        </motion.div>
                      )}

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

                      {/* Reciter Buttons */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {Object.entries(
                          currentVerse.audioData?.audio || {}
                        ).map(([id, reciterData]) => (
                          <button
                            key={id}
                            onClick={() =>
                              handleReciterClick(id, reciterData.url)
                            }
                            className={`text-sm px-3 py-1 rounded border transition-all duration-200
                            ${
                              activeReciter === id && isPlaying
                                ? "bg-white text-black font-semibold"
                                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                            }`}
                          >
                            {reciterData.reciter}
                          </button>
                        ))}
                      </div>

                      {/* Pause Button */}
                      {isPlaying && (
                        <div className="text-center mt-2">
                          <button
                            onClick={handlePause}
                            className="text-xs text-white/80 hover:text-white underline"
                          >
                            {loadingAudio ? "Loading..." : "Pause Recitation"}
                          </button>
                        </div>
                      )}
                      {loadingAudio && !isPlaying && (
                        <div className="text-center mt-2 text-xs text-white/70">
                          Loading Audio...
                        </div>
                      )}

                      {/* Another Verse Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-3 pt-4"
                      >
                        <Button
                          onClick={handleAnotherVerseClick}
                          variant="ghost"
                          className="flex-1 text-white hover:text-white hover:bg-transparent border border-white/30 hover:border-white/90 transition-all duration-200"
                        >
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Another verse
                        </Button>
                        <div className="text-center">
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
                </div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

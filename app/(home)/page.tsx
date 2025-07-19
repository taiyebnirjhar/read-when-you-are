"use client";

import { useState } from "react";
import EmotionBadges from "./_components/emotion-badges/emotion-badges";
import Footer from "./_components/footer/footer";
import Header from "./_components/header/header";
import QuoteModal from "./_components/quote-modal/quote-modal";
import emotions from "./_data";
import { Emotion, Verse } from "./_types";

export default function QuranInspirationApp() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [currentVerse, setCurrentVerse] = useState<Verse | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const getRandomVerse = (emotion: Emotion): Verse => {
    const randomIndex = Math.floor(Math.random() * emotion.verses.length);
    return emotion.verses[randomIndex];
  };

  const handleEmotionClick = async (emotion: Emotion) => {
    const verse = getRandomVerse(emotion);
    const data = await fetchVerseData(verse.surahNo!, verse.ayahNo!);
    if (data) {
      setSelectedEmotion(emotion);
      setCurrentVerse({
        ...verse,
        verse: data.english,
        arabicVerse: data.arabic1,
        bengali: data.bengali,
        audioData: data,
      });
      setIsOpen(true);
    }
  };
  const handleNewVerse = async () => {
    if (selectedEmotion) {
      const verse = getRandomVerse(selectedEmotion);
      const data = await fetchVerseData(verse.surahNo!, verse.ayahNo!);
      if (data) {
        setCurrentVerse({
          ...verse,
          verse: data.english,
          arabicVerse: data.arabic1,
          bengali: data.bengali,
          audioData: data,
        });
      }
    }
  };

  const fetchVerseData = async (surahNo: number, ayahNo: number) => {
    try {
      const res = await fetch(
        `https://quranapi.pages.dev/api/${surahNo}/${ayahNo}.json`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      return await res.json();
    } catch (err) {
      // console.error(err);
      return null;
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSelectedEmotion(null);
      setCurrentVerse(null);
    }, 300);
  };

  const fetchAudioData = async (surahNo: number, ayahNo: number) => {
    try {
      const res = await fetch(
        `https://quranapi.pages.dev/api/${surahNo}/${ayahNo}.json`
      );
      if (!res.ok) throw new Error("Failed to fetch audio");
      return await res.json();
    } catch (err) {
      // console.error(err);
      return null;
    }
  };

  return (
    <div className="min-h-screen overflow-auto bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5 w-full h-full flex flex-col justify-between items-center">
      <div>
        {/* Header */}
        <Header />

        {/* Emotion Badges */}
        <EmotionBadges
          emotions={emotions}
          handleEmotionClick={handleEmotionClick}
        />
      </div>

      {/* Modal */}
      <QuoteModal
        isOpen={isOpen}
        selectedEmotion={selectedEmotion}
        currentVerse={currentVerse}
        closeModal={closeModal}
        handleNewVerse={handleNewVerse}
      />

      {/* Footer */}
      <Footer emotions={emotions} />
    </div>
  );
}

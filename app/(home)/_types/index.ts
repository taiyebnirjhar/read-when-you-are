export interface Verse {
  verse: string;
  reference: string;
  arabicVerse?: string;
  bengali?: string;
  surahNo?: number;
  ayahNo?: number;
  audioData?: {
    audio: {
      [key: string]: {
        reciter: string;
        url: string;
        originalUrl: string;
      };
    };
  };
}

export interface Emotion {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  textColor: string;
  verses: Verse[];
}

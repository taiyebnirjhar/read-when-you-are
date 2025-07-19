export interface Verse {
  verse: string;
  reference: string;
  arabicVerse?: string;
}

export interface Emotion {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  textColor: string;
  verses: Verse[];
}

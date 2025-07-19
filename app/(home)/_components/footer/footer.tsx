import { Emotion } from "../../_types";

interface IFooterProps {
  emotions: Emotion[];
}

export default function Footer({ emotions }: IFooterProps) {
  return (
    <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm mt-auto">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="text-center">
          <p className="text-sm text-gray-600">
            May these verses bring peace and comfort to your heart
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {emotions.reduce(
              (total, emotion) => total + emotion.verses.length,
              0
            )}{" "}
            verses available
          </p>
          <div className="mt-3 flex justify-center gap-1.5">
            <div className="h-1 w-6 rounded-full bg-emerald-500" />
            <div className="h-1 w-6 rounded-full bg-blue-500" />
            <div className="h-1 w-6 rounded-full bg-purple-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}

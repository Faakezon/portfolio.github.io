"use client";
import { useState } from "react";

import { Dictionary } from "@/lib/i18n-types";

interface CoverLetterGeneratorProps {
  dictionary: Dictionary;
}

export const CoverLetterGenerator = ({ dictionary }: CoverLetterGeneratorProps) => {
  const t = dictionary.Home;

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    setOutput("");

    const res = await fetch("https://dulcet-alfajores-2c180c.netlify.app/.netlify/functions/generate-cover-letter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobDescription: input }),
    });

    const data = await res.json();
    setOutput(data.coverLetter);
    setLoading(false);
  };

  return (
    <div className="w-full mt-16">
      <h2 className="text-3xl font-bold mb-4">
        {t.generateCoverLetter}
      </h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t.pasteJobDescription}
        className="w-full min-h-45 p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900"
      />

      <button
        onClick={generate}
        disabled={loading}
        className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition-colors"
      >
        {loading ? t.generating : t.generateCoverLetter}
      </button>

      {output && (
        <div className="mt-8 p-6 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900">
          <pre className="whitespace-pre-wrap text-lg">{output}</pre>
        </div>
      )}
    </div>
  );
};

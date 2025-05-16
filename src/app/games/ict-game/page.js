// app/games/ict-game/page.js
"use client";

import { useState } from "react";

export default function ICTGame() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState(null);
  const [correct, setCorrect] = useState(null);

  const convertBinary = () => {
    const isValid = /^[01]+$/.test(binary);
    if (isValid) {
      const dec = parseInt(binary, 2);
      setDecimal(dec);
      setCorrect(true);
    } else {
      setDecimal(null);
      setCorrect(false);
    }
  };

  return (
    <main className="min-h-screen bg-primary text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Binary to Decimal Challenge</h1>
      <p className="mb-6 max-w-md text-center">
        Enter a binary number to convert it to decimal. Only valid binary values are accepted (0 and 1).
      </p>

      <input
        type="text"
        value={binary}
        onChange={(e) => setBinary(e.target.value)}
        placeholder="Enter binary (e.g., 1011)"
        className="px-4 py-2 text-black rounded w-full max-w-sm mb-4"
      />

      <button
        onClick={convertBinary}
        className="bg-primary px-6 py-2 rounded hover:bg-blue-700"
      >
        Convert
      </button>

      {correct === true && (
        <div className="mt-4 text-green-300 text-xl">✅ Decimal: {decimal}</div>
      )}
      {correct === false && (
        <div className="mt-4 text-red-400 text-xl">❌ Invalid Binary Input</div>
      )}
    </main>
  );
}

"use client";

import { useState } from "react";

export default function PingTimeCalculator() {
  const [packetSize, setPacketSize] = useState(64); // in bytes
  const [bandwidth, setBandwidth] = useState(10); // in Mbps
  const [pingTime, setPingTime] = useState(null);

  const calculatePingTime = () => {
    const sizeBits = packetSize * 8; // Convert bytes to bits
    const bandwidthBps = bandwidth * 1_000_000; // Convert Mbps to bps
    const timeSeconds = sizeBits / bandwidthBps;
    setPingTime(timeSeconds * 1000); // in ms
  };

  return (
    <div className="bg-background text-foreground max-w-xl mx-auto p-6 rounded-xl shadow-lg space-y-6">
      <h3 className="text-2xl font-bold mb-4 text-primary">Ping Time Calculator</h3>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Packet Size (Bytes)</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          value={packetSize}
          onChange={(e) => setPacketSize(Number(e.target.value))}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Bandwidth (Mbps)</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          value={bandwidth}
          onChange={(e) => setBandwidth(Number(e.target.value))}
        />
      </div>

      <button
        onClick={calculatePingTime}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate
      </button>

      {pingTime !== null && (
        <div className="mt-4 text-lg font-medium text-primary">
          Approximate Ping Time: {pingTime.toFixed(2)} ms
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

const distanceUnits = {
  mm: 0.001,
  m: 1,
  cm: 0.01,
  km: 1000,
};

const timeUnits = {
  ms: 0.001,
  s: 1,
  h: 3600,
};

export default function SpeedDistanceTimeCalculator() {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [distanceUnit, setDistanceUnit] = useState("m");
  const [timeUnit, setTimeUnit] = useState("s");

  const [result, setResult] = useState(null);

  const calculate = () => {
    const distInMeters = parseFloat(distance) * distanceUnits[distanceUnit];
    const timeInSeconds = parseFloat(time) * timeUnits[timeUnit];

    if (!isNaN(distInMeters) && !isNaN(timeInSeconds) && timeInSeconds !== 0) {
      const mps = distInMeters / timeInSeconds;
      const kph = mps * 3.6;
      const cmps = mps * 100;
      const mmps = mps * 1000;

      setResult({
        "Meters per second (m/s)": mps.toFixed(3),
        "Kilometers per hour (km/h)": kph.toFixed(3),
        "Centimeters per second (cm/s)": cmps.toFixed(3),
        "Millimeters per second (mm/s)": mmps.toFixed(3),
      });
    } else {
      setResult(null);
    }
  };

  return (
    <div className="bg-background text-foreground max-w-xl mx-auto p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        Speed · Distance · Time Calculator
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Distance:</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full p-2 border rounded bg-white text-black"
          />
          <select
            value={distanceUnit}
            onChange={(e) => setDistanceUnit(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.keys(distanceUnits).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Time:</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border rounded bg-white text-black"
          />
          <select
            value={timeUnit}
            onChange={(e) => setTimeUnit(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.keys(timeUnits).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={calculate}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate Speed
      </button>

      {result && (
        <div className="text-lg font-semibold space-y-2 ">
          <p className="text-primary">Speed Results:</p>
          {Object.entries(result).map(([label, value]) => (
            <p key={label}>
              {label}: <span className="text-primary">{value}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

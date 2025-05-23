"use client";

import React, { useState } from "react";

const gates = [
  {
    name: "AND",
    symbol: "∧",
    truthTable: [
      { A: 0, B: 0, Out: 0 },
      { A: 0, B: 1, Out: 0 },
      { A: 1, B: 0, Out: 0 },
      { A: 1, B: 1, Out: 1 },
    ],
  },
  {
    name: "OR",
    symbol: "∨",
    truthTable: [
      { A: 0, B: 0, Out: 0 },
      { A: 0, B: 1, Out: 1 },
      { A: 1, B: 0, Out: 1 },
      { A: 1, B: 1, Out: 1 },
    ],
  },
  {
    name: "NOT",
    symbol: "¬",
    truthTable: [
      { A: 0, Out: 1 },
      { A: 1, Out: 0 },
    ],
  },
  {
    name: "XOR",
    symbol: "⊕",
    truthTable: [
      { A: 0, B: 0, Out: 0 },
      { A: 0, B: 1, Out: 1 },
      { A: 1, B: 0, Out: 1 },
      { A: 1, B: 1, Out: 0 },
    ],
  },
];

export default function IctLabPage() {
  const [selectedGate, setSelectedGate] = useState(gates[0]);
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");

  const handleBinaryChange = (e) => {
    const val = e.target.value.replace(/[^01]/g, "");
    setBinary(val);
    setDecimal(val ? parseInt(val, 2).toString(10) : "");
  };

  const handleDecimalChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setDecimal(val);
    setBinary(val ? parseInt(val, 10).toString(2) : "");
  };

  const networkingBasics = [
    {
      term: "IP Address",
      desc: "A unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.",
      details: (
        <>
          <p><strong>Example:</strong> 192.168.1.1 (IPv4), or 2001:0db8:85a3::8a2e:0370:7334 (IPv6)</p>
          <p>An IP address consists of two parts: the network part and the host part.</p>
        </>
      ),
    },
    {
      term: "Subnet Mask",
      desc: "Defines which portion of an IP address refers to the network and which part refers to the host (device).",
      details: (
        <>
          <p><strong>Example Subnet Mask:</strong> 255.255.255.0</p>
          <p>Subnet masks allow the segmentation of a network into smaller subnetworks (subnets).</p>
          <p><strong>Classful Subnets:</strong></p>
          <ul className="list-disc list-inside">
            <li><strong>Class A:</strong> 255.0.0.0 (Supports 16 million hosts)</li>
            <li><strong>Class B:</strong> 255.255.0.0 (Supports 65,000 hosts)</li>
            <li><strong>Class C:</strong> 255.255.255.0 (Supports 254 hosts)</li>
          </ul>
        </>
      ),
    },
    {
      term: "Router",
      desc: "A device that forwards data packets between computer networks, creating an overlay internetwork.",
      details: (
        <>
          <p>Routers manage traffic between different networks by forwarding data packets to their intended IP addresses.</p>
          <p>They often perform NAT (Network Address Translation) to allow multiple devices on a local network to share a single public IP address.</p>
        </>
      ),
    },
    {
      term: "DNS (Domain Name System)",
      desc: "Translates human-readable domain names (like example.com) into IP addresses that computers use to identify each other.",
      details: (
        <>
          <p>DNS servers maintain a directory of domain names and translate them to IP addresses upon request.</p>
          <p>Example: When you enter <em>google.com</em>, DNS translates it to its IP address like 172.217.10.46.</p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-primary text-primary p-4 md:p-10 mx-5">
      <h1  className="text-center text-3xl sm:text-4xl font-bold mb-4 text-textprimary drop-shadow-md">
        ICT Lab - Basics
      </h1>

      {/* Logic Gates */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold border-b-2 border-blue-500 text-white pb-2 mb-6">Logic Gates</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {gates.map((gate) => (
            <button
              key={gate.name}
              onClick={() => setSelectedGate(gate)}
              className={`px-5 py-2 rounded-xl font-semibold transition-colors duration-300 shadow-md
                ${selectedGate.name === gate.name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-400 hover:text-white"}`}
            >
              {gate.name} ({gate.symbol})
            </button>
          ))}
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">
            {selectedGate.name} Gate ({selectedGate.symbol})
          </h3>
          <table className="w-full border border-gray-300 text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">A</th>
                {selectedGate.name !== "NOT" && (
                  <th className="border border-gray-300 px-4 py-2">B</th>
                )}
                <th className="border border-gray-300 px-4 py-2">Output</th>
              </tr>
            </thead>
            <tbody>
              {selectedGate.truthTable.map((row, i) => (
                <tr key={i} className="hover:bg-blue-50 transition">
                  <td className="border border-gray-300 px-4 py-2">{row.A}</td>
                  {selectedGate.name !== "NOT" && (
                    <td className="border border-gray-300 px-4 py-2">{row.B}</td>
                  )}
                  <td className="border border-gray-300 px-4 py-2 font-bold text-blue-700">
                    {row.Out}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Binary & Decimal Converter */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold border-b-2 text-white border-green-500 pb-2 mb-6">Binary & Decimal Converter</h2>
        <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto space-y-6">
          <div>
            <label className="block text-lg font-medium mb-1">Binary</label>
            <input
              type="text"
              value={binary}
              onChange={handleBinaryChange}
              placeholder="Enter binary number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Decimal</label>
            <input
              type="text"
              value={decimal}
              onChange={handleDecimalChange}
              placeholder="Enter decimal number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>
      </section>

      {/* Networking Basics */}
      <section>
        <h2 className="text-3xl font-bold border-b-2 border-purple-500 pb-2 mb-6">Networking Basics</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {networkingBasics.map(({ term, desc, details }) => (
            <div
              key={term}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">{term}</h3>
              <p className="text-gray-700 mb-3">{desc}</p>
              <div className="text-gray-600 prose prose-sm max-w-none">{details}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

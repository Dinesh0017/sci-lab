// app/ict-lab/page.jsx (or wherever you want to place it)
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
    if (val) {
      setDecimal(parseInt(val, 2).toString(10));
    } else {
      setDecimal("");
    }
  };

  const handleDecimalChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setDecimal(val);
    if (val) {
      setBinary(parseInt(val, 10).toString(2));
    } else {
      setBinary("");
    }
  };

  const networkingBasics = [
    {
      term: "IP Address",
      desc: "A unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.",
      details: (
        <>
          <p>
            <strong>Example:</strong> 192.168.1.1 (IPv4), or
            2001:0db8:85a3::8a2e:0370:7334 (IPv6)
          </p>
          <p>
            An IP address consists of two parts: the network part and the host
            part.
          </p>
        </>
      ),
    },
    {
      term: "Subnet Mask",
      desc: "Defines which portion of an IP address refers to the network and which part refers to the host (device).",
      details: (
        <>
          <p>
            <strong>Example Subnet Mask:</strong> 255.255.255.0
          </p>
          <p>
            Subnet masks allow the segmentation of a network into smaller
            subnetworks (subnets).
          </p>
          <p>
            <strong>Classful Subnets:</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Class A:</strong> 255.0.0.0 (Supports 16 million hosts)
            </li>
            <li>
              <strong>Class B:</strong> 255.255.0.0 (Supports 65,000 hosts)
            </li>
            <li>
              <strong>Class C:</strong> 255.255.255.0 (Supports 254 hosts)
            </li>
          </ul>
        </>
      ),
    },
    {
      term: "Router",
      desc: "A device that forwards data packets between computer networks, creating an overlay internetwork.",
      details: (
        <>
          <p>
            Routers manage traffic between different networks by forwarding data
            packets to their intended IP addresses.
          </p>
          <p>
            They often perform NAT (Network Address Translation) to allow
            multiple devices on a local network to share a single public IP
            address.
          </p>
        </>
      ),
    },
    {
      term: "DNS (Domain Name System)",
      desc: "Translates human-readable domain names (like example.com) into IP addresses that computers use to identify each other.",
      details: (
        <>
          <p>
            DNS servers maintain a directory of domain names and translate them
            to IP addresses upon request.
          </p>
          <p>
            Example: When you enter <em>google.com</em>, DNS translates it to
            its IP address like 172.217.10.46.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-primary text-primary p-6 mx-5">
      <h1 className="text-3xl md:text-4xl font-extrabold text-textprimary mb-6 text-center"
            style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}>ICT Lab - Basics</h1>

      {/* Logic Gates Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-blue-600 pb-2">
          Logic Gates
        </h2>

        <div className="flex flex-wrap gap-4 mb-6">
          {gates.map((gate) => (
            <button
              key={gate.name}
              onClick={() => setSelectedGate(gate)}
              className={`px-5 py-2 rounded shadow font-semibold transition-colors ${
                selectedGate.name === gate.name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {gate.name} ({gate.symbol})
            </button>
          ))}
        </div>

        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-3">
            {selectedGate.name} Gate ({selectedGate.symbol})
          </h3>
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
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
                <tr key={i} className="hover:bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2">{row.A}</td>
                  {selectedGate.name !== "NOT" && (
                    <td className="border border-gray-300 px-4 py-2">
                      {row.B}
                    </td>
                  )}
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    {row.Out}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Binary Converter Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-green-600 pb-2">
          Binary & Decimal Converter
        </h2>

        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-6">
          <div>
            <label className="block mb-1 font-medium">Binary</label>
            <input
              type="text"
              value={binary}
              onChange={handleBinaryChange}
              placeholder="Enter binary number"
              className="w-full border border-gray-300 rounded px-3 py-2 font-mono text-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Decimal</label>
            <input
              type="text"
              value={decimal}
              onChange={handleDecimalChange}
              placeholder="Enter decimal number"
              className="w-full border border-gray-300 rounded px-3 py-2 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Networking Basics Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-purple-600 pb-2">
          Networking Basics
        </h2>

        <ul className="max-w-3xl mx-auto space-y-6">
          {networkingBasics.map(({ term, desc, details }) => (
            <li
              key={term}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{term}</h3>
              <p className="text-gray-700 mb-3">{desc}</p>
              <div className="text-gray-600 prose prose-sm max-w-none">
                {details}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

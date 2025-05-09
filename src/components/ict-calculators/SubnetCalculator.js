"use client";

import { useState } from "react";

export default function SubnetCalculator() {
  const [cidr, setCidr] = useState(24);
  const [ip, setIp] = useState("192.168.1.0");

  const cidrToMask = (cidr) => {
    const mask = [];
    for (let i = 0; i < 4; i++) {
      const bits = Math.min(8, cidr - i * 8);
      mask.push(bits > 0 ? 256 - Math.pow(2, 8 - bits) : 0);
    }
    return mask.join(".");
  };

  const maskToWildcard = (mask) =>
    mask
      .split(".")
      .map((octet) => 255 - parseInt(octet))
      .join(".");

  const ipToBinary = (ip) =>
    ip
      .split(".")
      .map((octet) => parseInt(octet).toString(2).padStart(8, "0"))
      .join("");

  const binaryToIp = (bin) =>
    bin
      .match(/.{1,8}/g)
      .map((b) => parseInt(b, 2))
      .join(".");

  const getNetworkAddress = (ip, cidr) => {
    const ipBin = ipToBinary(ip);
    const networkBin = ipBin.substring(0, cidr).padEnd(32, "0");
    return binaryToIp(networkBin);
  };

  const getBroadcastAddress = (ip, cidr) => {
    const ipBin = ipToBinary(ip);
    const broadcastBin = ipBin.substring(0, cidr).padEnd(32, "1");
    return binaryToIp(broadcastBin);
  };

  const getUsableHosts = (cidr) =>
    cidr >= 31 ? 0 : Math.pow(2, 32 - cidr) - 2;

  const getClass = (ip) => {
    const firstOctet = parseInt(ip.split(".")[0]);
    if (firstOctet < 128) return "A";
    if (firstOctet < 192) return "B";
    if (firstOctet < 224) return "C";
    if (firstOctet < 240) return "D";
    return "E";
  };

  const getDefaultCidr = (ipClass) => {
    return { A: 8, B: 16, C: 24 }[ipClass] || 0;
  };

  const getSubnetCount = (cidr, ipClass) => {
    const defaultCidr = getDefaultCidr(ipClass);
    const borrowed = cidr - defaultCidr;
    return borrowed >= 0 ? Math.pow(2, borrowed) : 0;
  };

  const mask = cidrToMask(cidr);
  const wildcard = maskToWildcard(mask);
  const networkAddress = getNetworkAddress(ip, cidr);
  const broadcastAddress = getBroadcastAddress(ip, cidr);
  const usableHosts = getUsableHosts(cidr);
  const ipClass = getClass(ip);
  const subnetCount = getSubnetCount(cidr, ipClass);

  return (
    <div className="p-6 bg-background text-foreground rounded-xl shadow-xl space-y-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-primary">Subnet Calculator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">IP Address</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">CIDR Notation</label>
          <input
            type="number"
            min={0}
            max={32}
            className="w-full p-2 border border-gray-300 rounded"
            value={cidr}
            onChange={(e) => setCidr(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="space-y-2">
          <p><strong>Subnet Mask:</strong> {mask}</p>
          <p><strong>Wildcard Mask:</strong> {wildcard}</p>
          <p><strong>Network Address:</strong> {networkAddress}</p>
          <p><strong>Broadcast Address:</strong> {broadcastAddress}</p>
        </div>
        <div className="space-y-2">
          <p><strong>Usable Hosts:</strong> {usableHosts}</p>
          <p><strong>IP Class:</strong> Class {ipClass}</p>
          <p><strong>Possible Subnets:</strong> {subnetCount}</p>
        </div>
      </div>
    </div>
  );
}

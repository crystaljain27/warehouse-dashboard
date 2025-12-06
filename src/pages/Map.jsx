import React, { useEffect, useRef, useState } from "react";
import { useBotStore } from "../store/botStore";

export default function Map() {
  const bots = useBotStore((s) => s.bots);
  const updateBots = useBotStore((s) => s.updateBots);

  const [svgContent, setSvgContent] = useState(null);
  const containerRef = useRef(null);

  // Move bots every 2 seconds (simulated movement)
  useEffect(() => {
    const interval = setInterval(() => {
      updateBots();
    }, 2000);

    return () => clearInterval(interval);
  }, [updateBots]);

  // Read uploaded SVG
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== "image/svg+xml") return;

    const reader = new FileReader();
    reader.onload = () => {
      setSvgContent(reader.result);
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Warehouse Map</h1>

      {/* Upload Button */}
      <label className="inline-block mb-6 cursor-pointer">
        <input
          type="file"
          accept=".svg"
          onChange={handleFileUpload}
          className="hidden"
        />
        <span className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium">
          Upload Warehouse SVG
        </span>
      </label>

      {/* Map Container */}
      <div
        ref={containerRef}
        className="relative bg-gray-800 rounded-lg w-full h-[500px] overflow-hidden"
      >
        {/* SVG */}
        {svgContent && (
          <div
            className="absolute inset-0"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        )}

        {/* Bots */}
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="absolute rounded-full shadow-md transition-all duration-1000"
            style={{
              width: 12,
              height: 12,
              left: `${bot.x * 100}%`,
              top: `${bot.y * 100}%`,
              backgroundColor:
                bot.status === "idle"
                  ? "#60a5fa"
                  : bot.status === "busy"
                  ? "#facc15"
                  : bot.status === "charging"
                  ? "#4ade80"
                  : "#f87171",
            }}
          />
        ))}
      </div>
    </div>
  );
}

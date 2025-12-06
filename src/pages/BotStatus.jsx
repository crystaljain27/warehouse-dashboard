import React, { useEffect } from "react";
import { useBotStore } from "../store/botStore";

export default function BotStatus() {
  const bots = useBotStore((s) => s.bots);
  const updateBots = useBotStore((s) => s.updateBots);

  // auto update bots every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      updateBots();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Bot Status</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
          >
            <h2 className="text-xl font-semibold mb-2">Bot #{bot.id}</h2>

            <p>Battery: {bot.battery}%</p>
            <p>Status: {bot.status}</p>
            <p>Speed: {bot.speed} m/s</p>
            <p>Current Task: {bot.task}</p>
            <p className="text-gray-400 mt-2 text-sm">
              Last Updated: {bot.updatedAt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

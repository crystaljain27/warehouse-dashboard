import { create } from "zustand";

const STATUSES = ["idle", "busy", "charging", "error"];

const generateBots = () =>
  Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    battery: Math.floor(Math.random() * 101), // 0–100
    status: STATUSES[Math.floor(Math.random() * 4)],
    speed: Math.floor(Math.random() * 10) + 1,
    task: `Task ${i + 1}`,
    updatedAt: new Date().toLocaleTimeString(),
    x: Math.random(),
    y: Math.random(),
  }));

export const useBotStore = create((set, get) => ({
  bots: generateBots(),

  updateBots: () =>
    set({
      bots: get().bots.map((bot) => {
        let battery = bot.battery;

        // realistic drain / charge
        if (bot.status === "busy") battery -= Math.random() * 8;
        if (bot.status === "idle") battery -= Math.random() * 3;
        if (bot.status === "charging") battery += Math.random() * 4;

        battery = Math.max(0, Math.min(100, battery));

        // smarter status logic
        let status = bot.status;
        if (battery < 20) status = "charging";
        else if (battery > 80) status = "busy";
        else status = STATUSES[Math.floor(Math.random() * 3)];

        return {
          ...bot,
          battery: Math.round(battery),
          status,
          speed: Math.floor(Math.random() * 10) + 1,
          updatedAt: new Date().toLocaleTimeString(),

          // smooth movement
          x: Math.min(1, Math.max(0, bot.x + (Math.random() - 0.5) * 0.05)),
          y: Math.min(1, Math.max(0, bot.y + (Math.random() - 0.5) * 0.05)),
        };
      }),
    }),
}));

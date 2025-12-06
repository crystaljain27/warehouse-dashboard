import React from "react";
import { useBotStore } from "../store/botStore";
import { useTaskStore } from "../store/taskStore";

export default function Home() {
  const bots = useBotStore((s) => s.bots);
  const tasks = useTaskStore((s) => s.tasks);

  return (
    <div className="p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Bots" value={bots.length} />
        <StatCard title="Pending Tasks" value={tasks.length} />
        <StatCard
          title="Idle Bots"
          value={bots.filter((b) => b.status === "idle").length}
        />
        <StatCard
          title="Busy Bots"
          value={bots.filter((b) => b.status === "busy").length}
        />
        <StatCard
          title="Bots in Error"
          value={bots.filter((b) => b.status === "error").length}
        />
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg text-gray-300">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

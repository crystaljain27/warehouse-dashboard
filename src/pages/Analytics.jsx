import React from "react";
import { useBotStore } from "../store/botStore";
import { useTaskStore } from "../store/taskStore";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  const bots = useBotStore((s) => s.bots);
  const tasks = useTaskStore((s) => s.tasks);

  const batteryData = bots.map((b) => ({
    name: `Bot ${b.id}`,
    battery: b.battery,
  }));

  const statusCount = {
    idle: bots.filter((b) => b.status === "idle").length,
    busy: bots.filter((b) => b.status === "busy").length,
    error: bots.filter((b) => b.status === "error").length,
  };

  const statusData = [
    { name: "Idle", value: statusCount.idle },
    { name: "Busy", value: statusCount.busy },
    { name: "Error", value: statusCount.error },
  ];

  const COLORS = ["#4ade80", "#60a5fa", "#f87171"];

  return (
    <div className="p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>

      {/* Battery Chart */}
      <div className="bg-gray-800 p-6 rounded-lg mb-10">
        <h2 className="text-xl mb-4">Bot Battery Levels</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={batteryData}>
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="battery" fill="#60a5fa" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bot Status Pie Chart */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl mb-4">Bot Status Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {statusData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

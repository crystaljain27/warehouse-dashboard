import React, { useEffect } from "react";
import { useTaskStore } from "../store/taskStore";

export default function TaskQueue() {
  const tasks = useTaskStore((s) => s.tasks);
  const removeTask = useTaskStore((s) => s.removeTask);

  useEffect(() => {
    if (tasks.length === 0) return;

    const interval = setInterval(() => {
      removeTask();
    }, 3000);

    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Task Queue</h1>

      {tasks.length === 0 && <p>No pending tasks</p>}

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-800 p-4 rounded shadow-md border border-gray-700"
          >
            <p><strong>Pickup:</strong> {task.pickup}</p>
            <p><strong>Drop:</strong> {task.drop}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            {task.comments && <p><strong>Comments:</strong> {task.comments}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

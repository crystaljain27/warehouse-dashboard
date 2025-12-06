import React, { useState } from "react";
import { useTaskStore } from "../store/taskStore";
import { useNavigate } from "react-router-dom";

export default function TaskAllocation() {
  const addTask = useTaskStore((s) => s.addTask);
  const navigate = useNavigate();

  const [task, setTask] = useState({
    pickup: "",
    drop: "",
    priority: "",
    comments: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.pickup || !task.drop || !task.priority) {
      alert("Pickup, Drop, and Priority are required");
      return;
    }

    addTask({
      id: Date.now(),
      ...task,
    });

    alert("Task added successfully!");
    navigate("/queue");
  };

  const inputStyle =
    "w-full p-2 mt-1 rounded bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Create New Task</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-md max-w-md"
      >
        {/* Pickup */}
        <div className="mb-4">
          <label className="block mb-1">Pickup Location</label>
          <input
            className={inputStyle}
            placeholder="Enter pickup location"
            value={task.pickup}
            onChange={(e) => setTask({ ...task, pickup: e.target.value })}
          />
        </div>

        {/* Drop */}
        <div className="mb-4">
          <label className="block mb-1">Drop Location</label>
          <input
            className={inputStyle}
            placeholder="Enter drop location"
            value={task.drop}
            onChange={(e) => setTask({ ...task, drop: e.target.value })}
          />
        </div>

        {/* Priority */}
        <div className="mb-4">
          <label className="block mb-1">Priority</label>
          <input
            className={inputStyle}
            placeholder="Low / Medium / High"
            value={task.priority}
            onChange={(e) => setTask({ ...task, priority: e.target.value })}
          />
        </div>

        {/* Comments */}
        <div className="mb-4">
          <label className="block mb-1">Comments (optional)</label>
          <textarea
            className={inputStyle}
            placeholder="Any special instructions..."
            rows={3}
            value={task.comments}
            onChange={(e) => setTask({ ...task, comments: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

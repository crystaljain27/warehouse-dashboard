import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/home" },
    { label: "Bots", path: "/bots" },
    { label: "Allocate Task", path: "/allocate" },
    { label: "Task Queue", path: "/queue" },
    { label: "Analytics", path: "/analytics" },
    { label: "Map", path: "/map" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed left-0 top-0 px-6 py-8">
      <h1 className="text-2xl font-bold mb-10">Robot Dashboard</h1>

      <nav className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2 rounded-lg transition ${
              pathname === item.path
                ? "bg-blue-500 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

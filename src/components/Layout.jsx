import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full p-6">
        {children}
      </div>
    </div>
  );
}

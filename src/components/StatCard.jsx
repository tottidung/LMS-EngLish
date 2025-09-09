import React from "react";

export default function StatCard({ title, completed, total, icon }) {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <div className="font-semibold text-gray-800 mb-1">
        {title} <span className="text-green-600">{completed}/{total}</span>
      </div>
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, idx) => (
          <span key={idx} className="text-2xl">
            {idx < completed ? icon : "⚪"}
          </span>
        ))}
      </div>
    </div>
  );
}

import React from 'react'

export default function ExerciseCard({ completed, total }) {
  const trees = Array.from({ length: total }, (_, i) => i < completed);

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <div className="font-semibold mb-2">
        Hoàn thành {completed}/{total} bài tập
      </div>
      <p className="text-sm text-gray-500 mb-2">
        Hoàn thành bài tập để tích lũy điểm
      </p>
      <div className="flex gap-2">
        {trees.map((t, idx) => (
          <span key={idx} className="text-2xl">
            {t ? "🌳" : "⚪"}
          </span>
        ))}
      </div>
    </div>
  );
}

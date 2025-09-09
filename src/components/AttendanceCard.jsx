import React from 'react'

export default function AttendanceCard({ attended, total }) {
  const seeds = Array.from({ length: total }, (_, i) => i < attended);

  return (
    <div className="bg-white shadow rounded-xl p-4 mb-4">
      <div className="font-semibold mb-2">
        Tham gia {attended}/{total} buổi học
      </div>
      <p className="text-sm text-gray-500 mb-2">
        Tham gia buổi học để tích lũy điểm
      </p>
      <div className="flex gap-2">
        {seeds.map((s, idx) => (
          <span key={idx} className="text-2xl">
            {s ? "🌱" : "⚪"}
          </span>
        ))}
      </div>
    </div>
  );
}

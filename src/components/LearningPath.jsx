import React, { useState, useRef, useEffect } from "react";

export default function LearningPath() {
  const [hovered, setHovered] = useState(null);
  const hideTimeout = useRef(null);

  // dữ liệu mẫu
  const levels = [
    {
      id: 1,
      title: "BUỔI 1: KHAI GIẢNG",
      date: "08/08/2025 (19:45 - 21:30)",
      content: [
        "Tâm thế học viên",
        "Timeline, nội quy",
        "Chia nhà, hiểu thương cùng nhóm bạn tốt",
        "BTVN (Bài tập về nhà)",
      ],
    },
    { id: 2, title: "BUỔI 2: CHỦ ĐỀ A", date: "10/08/2025", content: ["Giới thiệu", "BTVN"] },
    { id: 3, title: "BUỔI 3: CHỦ ĐỀ B", date: "12/08/2025", content: ["Thảo luận nhóm", "BTVN"] },
    { id: 4, title: "BUỔI 4", date: "14/08/2025", content: ["Thực hành"] },
    { id: 5, title: "BUỔI 5", date: "16/08/2025", content: ["Bài tập"] },
    { id: 6, title: "BUỔI 6", date: "18/08/2025", content: ["Thảo luận"] },
    { id: 7, title: "BUỔI 7", date: "22/08/2025", content: ["Ôn tập"] },
    { id: 8, title: "BUỔI 8", date: "24/08/2025", content: ["Kiểm tra"] },
    { id: 9, title: "BUỔI 9", date: "28/08/2025", content: ["Ôn tập tổng hợp"] },
    { id: 10, title: "BUỔI 10: TỔNG KẾT", date: "30/08/2025", content: ["Trao giải", "Tổng kết"] },
  ];

  // cleanup khi unmount
  useEffect(() => {
    return () => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  const handleEnter = (id) => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setHovered(id);
  };

  const handleLeave = () => {
    // delay để tránh ẩn khi di chuột qua khoảng nhỏ
    hideTimeout.current = setTimeout(() => {
      setHovered(null);
      hideTimeout.current = null;
    }, 200); // bạn có thể tăng giảm (ms) nếu cần mượt hơn
  };

  return (
    <div className="flex-1 flex justify-center items-start relative py-10 bg-amber-200">
      <div className="flex flex-col gap-16 relative">
        {levels.map((level, i) => (
          // container cha bao vòng tròn + popup (onMouseEnter/Leave ở đây)
          <div
            key={level.id}
            className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"} relative`}
            onMouseEnter={() => handleEnter(level.id)}
            onMouseLeave={handleLeave}
          >
            {/* Vòng tròn */}
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold relative cursor-pointer shadow
                ${i % 2 === 0 ? "bg-green-500" : "bg-green-400"}`}
            >
              {level.id}
              {level.id === 10 && (
                <span className="absolute -bottom-6 text-2xl">🏆</span>
              )}
              {level.id === 9 && (
                <span className="absolute -bottom-6 text-2xl">⭐</span>
              )}
              {level.id === 3 && (
                <span className="absolute -right-6 text-2xl">📋</span>
              )}
            </div>

            {/* Popup chi tiết (sát vào vòng tròn bằng left/right = 56px) */}
            {hovered === level.id && (
              <div
                className="absolute top-0 w-80 bg-green-400 text-white rounded-xl shadow-lg p-4 z-10"
                style={{
                  // w-14 = 56px, đặt sát cạnh -> left or right = 56px
                  left: i % 2 === 0 ? "56px" : undefined,
                  right: i % 2 !== 0 ? "56px" : undefined,
                }}
              >
                <div className="text-xs text-gray-100 mb-1">{level.date}</div>
                <div className="font-bold mb-2">{level.title}</div>
                <ul className="text-sm list-disc list-inside mb-3">
                  {level.content.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2">
                  <button className="bg-white text-green-600 font-semibold py-1 px-3 rounded shadow hover:bg-gray-100">
                    Xem lại buổi học
                  </button>
                  <button className="bg-yellow-400 text-gray-800 font-semibold py-1 px-3 rounded shadow hover:bg-yellow-300">
                    Nộp bài tập
                  </button>
                  <button className="bg-yellow-500 text-gray-800 font-semibold py-1 px-3 rounded shadow hover:bg-yellow-400">
                    Báo cáo bài tập
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";

export default function Sidebar() {
  const menu = [
    { label: "Học tập", icon: "📘", path: "/hoc-tap" },
    { label: "Kỷ luật", icon: "📋", path: "/learning" },
    { label: "Trợ lý AI", icon: "🤖", path: "/tro-ly-ai" },
    { label: "Cài đặt", icon: "⚙️", path: "/cai-dat" },
  ];

  const handleClick = (path) => {
    window.location.href = path; // chuyển trang
  };

  return (
    <aside className="w-60 bg-white shadow-lg p-4">
      <div className="mb-6 font-bold text-xl">Canva All In One</div>
      <ul>
        {menu.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleClick(item.path)}
          >
            <span>{item.icon}</span> {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}

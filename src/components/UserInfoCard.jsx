import React, { useState } from "react";

export default function UserInfoCard({ user, users, onSelect }) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filteredUsers = users.filter(
    (u) =>
      u.code.toLowerCase().includes(search.toLowerCase()) ||
      u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white shadow rounded-xl p-4 w-auto relative">
      {/* Tên user */}
      <div className="font-bold text-lg text-blue-700 text-center uppercase mb-2">
        {user.name}
      </div>

      {/* Dropdown chọn user */}
      <div className="relative mb-3">
        <div
          className="border rounded-md px-3 py-2 cursor-pointer bg-white"
          onClick={() => setOpen(!open)}
        >
          {user.code} - {user.name}
        </div>
        {open && (
          <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg mt-1 z-10">
            {/* Ô tìm kiếm */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm mã học viên..."
              className="w-full px-2 py-1 border-b text-sm outline-none"
            />
            {/* Danh sách */}
            <div className="max-h-40 overflow-y-auto">
              {filteredUsers.map((u) => (
                <div
                  key={u.code}
                  className={`px-3 py-2 cursor-pointer hover:bg-blue-100 ${
                    u.code === user.code ? "bg-blue-50 font-semibold" : ""
                  }`}
                  onClick={() => {
                    onSelect(u);
                    setOpen(false);
                    setSearch("");
                  }}
                >
                  {u.code} - {u.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Nhà */}
      <div className="flex items-center gap-2 mb-3">
        <img
          src={user.avatar || "https://via.placeholder.com/30"}
          alt="house"
          className="w-8 h-8 rounded-full"
        />
        <div className="text-gray-700 font-medium">{user.house}</div>
      </div>

      {/* Điểm toàn khóa */}
      <div className="text-red-600 text-2xl font-bold text-center">
        {user.score} <span className="text-base font-normal">điểm toàn khóa</span>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LearningPath from "../components/LearningPath";
import UserInfoCard from "../components/UserInfoCard";
import StatCard from "../components/StatCard";
const allUsers = [
  {
    code: "N0103",
    name: "NGUYỄN LÊ THẢO NGUYÊN",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/9/91/Zalo_Logo.png",
    house: "NHÀ 01 (CHỬ THỊ THUẦN)",
    score: 687.1,
    classes: { completed: 8, total: 8 },
    exercises: { completed: 4, total: 4 },
  },
  {
    code: "N0102",
    name: "NGUYỄN LÊ THẢO LAM (SÓC)",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/9/91/Zalo_Logo.png",
    house: "NHÀ 01 (CHỬ THỊ THUẦN)",
    score: 687.1,
  },
  {
    code: "N0103",
    name: "NGUYỄN LÊ THẢO NGUYÊN",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/9/91/Zalo_Logo.png",
    house: "NHÀ 02 (TRẦN THỊ HOA)",
    score: 720.3,
  },
];

export default function Study() {
  const [selectedUser, setSelectedUser] = useState(allUsers[0]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Giữa: Learning path */}
      <LearningPath />

      {/* Bên phải: Thông tin + thống kê */}
      <div className="w-96 p-4 flex flex-col gap-4">
        <UserInfoCard
          user={selectedUser}
          users={allUsers}
          onSelect={setSelectedUser}
        />

        <StatCard
          title="Tham gia buổi học"
          completed={selectedUser.classes.completed}
          total={selectedUser.classes.total}
          icon="🌱"
        />

        <StatCard
          title="Hoàn thành bài tập"
          completed={selectedUser.exercises.completed}
          total={selectedUser.exercises.total}
          icon="🌳"
        />

        <div className="bg-white shadow rounded-xl p-4">
          <div className="font-semibold text-gray-800 mb-1">
            Kết quả học tập nhà {selectedUser.house.split(" ")[1]}
          </div>
          <div className="text-sm text-gray-500">
            Đồng hành cùng các thành viên nhà mình bạn nhé 💪
          </div>
        </div>
      </div>
    </div>
  );
}

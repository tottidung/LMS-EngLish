import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import DataTable from "../components/DataTable";
import UserInfoCard from "../components/UserInfoCard";
import AttendanceCard from "../components/AttendanceCard";
import ExerciseCard from "../components/ExerciseCard";
import ClassRules from "../components/ClassRules";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

export default function LearningLog() {
  const allUsers = [
  {
    code: "N0101",
    name: "NGUYỄN TRẦN PHƯƠNG MINH",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/9/91/Zalo_Logo.png",
    house: "NHÀ 01 (CHỬ THỊ THUẦN)",
    score: 500.5,
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
 const [selectedUser, setSelectedUser] = useState(allUsers[1]);


  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-sky-600 mb-6 flex items-center gap-2">
            <CheckCircle className="text-sky-500" /> SỔ NHẬT KÝ HỌC TẬP
        </h2>
        <SearchBar onSearch={(q) => console.log("search:", q)} />
        <DataTable />
        <ClassRules />
      </main>
      <aside className="w-100 p-4 flex flex-col gap-4">
          <UserInfoCard
        user={selectedUser}
        users={allUsers}
        onSelect={setSelectedUser}
      />
        <AttendanceCard attended={8} total={8} />
        <ExerciseCard completed={4} total={4} />
      </aside>
    </div>
  );
}

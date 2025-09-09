import React from "react";
import { CheckCircle } from "lucide-react";

const ClassRules = () => {
  return (
    <div className="max-w-4xl mx-1 p-6">
      <h2 className="text-2xl font-bold text-sky-600 mb-6 flex items-center gap-2">
        <CheckCircle className="text-sky-500" /> NỘI QUY LỚP HỌC
      </h2>

      {/* 1. Bài học - Bài tập - Điểm danh */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">1. Bài học - Bài tập - Điểm danh</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Thời lượng học: 8 buổi học + 1 buổi talkshow tốt nghiệp + bế giảng</li>
          <li>Thời gian học: Online zoom 19h45 - 22h mỗi buổi</li>
          <li>Điểm danh 8 buổi: Nhấp mã số HV vào zoom từ Web hành trình</li>
          <li>Bài tập 06 bài = 4 BTVN + 1 đồ án tốt nghiệp teamwork + 1 talkshow tốt nghiệp</li>
        </ul>
      </div>

      {/* 2. Quy định điểm số */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">2. Quy định điểm số</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Đầu khóa học HV được cấp 500 điểm</li>
          <li>1 buổi vắng: -50đ</li>
          <li>2 buổi vắng: -150đ</li>
          <li>3 buổi vắng: -250đ</li>
          <li>4 buổi vắng: -500đ</li>
          <li>Không làm hoặc đã làm nhưng quên báo cáo 1 BT: -100đ</li>
          <li>Không làm hoặc đã làm nhưng quên báo cáo 2 BT: -250đ</li>
          <li>Không làm hoặc đã làm nhưng quên báo cáo 3 BT: -500đ</li>
          <li>Hoàn thành BT teamwork talkshow: + max 100đ</li>
          <li>Hoàn thành BT talkshow tốt nghiệp: + max 100đ</li>
        </ul>
      </div>

      {/* 3. Điều kiện tốt nghiệp */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">3. Điều kiện tốt nghiệp, Gieo hạt vi phạm</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Điểm tốt nghiệp = Tổng điểm toàn khóa</li>
          <li>Điểm tốt nghiệp ≤ 250đ: Chưa đạt - trung thực và chủ động gieo hạt 300k</li>
          <li>Điểm tốt nghiệp &gt; 250đ: Đạt</li>
          <li>=&gt; chứng nhận tốt nghiệp KINDTECH (E-Certificate CANVA ALL IN ONE online)</li>
        </ul>
      </div>

      {/* 4. Phần thưởng tinh thần */}
      <div>
        <h3 className="text-lg font-semibold mb-3">4. Phần thưởng tinh thần</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            Quà tặng khóa học: sách, ấn phẩm BKE, coaching nâng cao video capcut/canva, Mindmap,
            thiết kế game trên canva dành cho:
          </li>
          <li>Quà nhóm - Nhà xuất sắc: 01 Nhà học viên có điểm talkshow tốt nghiệp cao nhất</li>
          <li>
            Quà cá nhân: 10 học viên có điểm tốt nghiệp toàn khóa cao nhất và bài tập về nhà tốt
            nhất (BTC bình chọn 10 HV/tổng 20 HV điểm cao nhất, không kể HV đã nhận quà nhóm)
          </li>
          <li>Chứng nhận tốt nghiệp khóa học</li>
        </ul>
      </div>
    </div>
  );
};

export default ClassRules;

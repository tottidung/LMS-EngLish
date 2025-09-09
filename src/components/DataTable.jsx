import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Clock, CheckCircle, XCircle } from 'lucide-react';

const DataTable = () => {
  const [data, setData] = useState([
    {
      nha: 'NHÀ 01',
      maHocVien: 'N0101-NGUYỄN TRẦN PHƯƠNG MINH-****9404',
      hanhTrinh: 100,
      tongDiem: 500,
      diemViPham: 0,
      diemTotNghiep: 687.1,
      gieoHatViPham: 'KHÔNG',
      buoi: [
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' }
      ]
    },
    {
      nha: 'NHÀ 01',
      maHocVien: 'N0102-NGUYỄN LÊ THẢO LAM (SÓC)-****9207',
      hanhTrinh: 100,
      tongDiem: 500,
      diemViPham: 0,
      diemTotNghiep: 687.1,
      gieoHatViPham: 'KHÔNG',
      buoi: [
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' }
      ]
    },
    {
      nha: 'NHÀ 01',
      maHocVien: 'N0103-NGUYỄN LÊ THẢO NGUYÊN-****9207',
      hanhTrinh: 100,
      tongDiem: 500,
      diemViPham: 0,
      diemTotNghiep: 687.1,
      gieoHatViPham: 'KHÔNG',
      buoi: [
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' }
      ]
    },
    {
      nha: 'NHÀ 01',
      maHocVien: 'N0104-NGUYỄN THỊ NGỌC DIỆP-****4514',
      hanhTrinh: 94.44,
      tongDiem: 500,
      diemViPham: 50,
      diemTotNghiep: 637.1,
      gieoHatViPham: 'KHÔNG',
      buoi: [
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'vang', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' }
      ]
    },
    {
      nha: 'NHÀ 01',
      maHocVien: 'N0105-HUỲNH THỊ NỮ-****5749',
      hanhTrinh: 100,
      tongDiem: 500,
      diemViPham: 0,
      diemTotNghiep: 712.1,
      gieoHatViPham: 'KHÔNG',
      buoi: [
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' }
      ]
    },
    {
      nha: 'NHÀ 01',
      maHocVien: 'N0106-TRẦN THỊ LAN-****1503',
      hanhTrinh: 100,
      tongDiem: 500,
      diemViPham: 0,
      diemTotNghiep: 687.1,
      gieoHatViPham: 'KHÔNG',
      buoi: [
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' }
      ]
    },
    {
      nha: 'NHÀ 01',
      maHocVien: 'N0107-LÊ THỊ HẢI HÀ-****3951',
      hanhTrinh: 100,
      tongDiem: 500,
      diemViPham: 0,
      diemTotNghiep: 687.1,
      gieoHatViPham: 'KHÔNG',
      buoi: [
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' }
      ]
    },
    {
      nha: 'NHÀ 01',
      maHocVien: 'N0108-PHẠM TRỌNG THẠCH-****3289',
      hanhTrinh: 94.44,
      tongDiem: 500,
      diemViPham: 100,
      diemTotNghiep: 587.1,
      gieoHatViPham: 'KHÔNG',
      buoi: [
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' }
      ]
    },
    {
      nha: 'NHÀ 01',
      maHocVien: 'N0109-ĐÀO BÍCH THUỲ-****8408',
      hanhTrinh: 94.44,
      tongDiem: 500,
      diemViPham: 100,
      diemTotNghiep: 587.1,
      gieoHatViPham: 'KHÔNG',
      buoi: [
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' }
      ]
    },
    {
      nha: 'NHÀ 02',
      maHocVien: 'N0201-HỒ ANH KHOA-****1967',
      hanhTrinh: 100,
      tongDiem: 500,
      diemViPham: 0,
      diemTotNghiep: 661.34,
      gieoHatViPham: 'KHÔNG',
      buoi: [
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' }
      ]
    },
    {
      nha: 'NHÀ 02',
      maHocVien: 'N0203-LÊ THỊ THUỲ LYNH-****9049',
      hanhTrinh: 88.89,
      tongDiem: 500,
      diemViPham: 150,
      diemTotNghiep: 511.34,
      gieoHatViPham: 'KHÔNG',
      buoi: [
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'vang', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' },
        { diemDanh: 'cham', baoCao: 'hoanThanh' }
      ]
    }
  ]);

  const [expandedRows, setExpandedRows] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const toggleExpand = (index) => {
    setExpandedRows(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const getProgressColor = (percentage) => {
    if (percentage === 100) return 'bg-green-500';
    if (percentage >= 90) return 'bg-yellow-400';
    return 'bg-orange-400';
  };

  const getStatusIcon = (type, status) => {
    if (type === 'diemDanh') {
      if (status === 'cham') {
        return <Clock className="w-5 h-5 text-yellow-600" />;
      } else if (status === 'vang') {
        return <div className="w-5 h-5 bg-red-600 rounded" />;
      }
    } else if (type === 'baoCao') {
      if (status === 'hoanThanh') {
        return <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-4 h-4 text-white" />
        </div>;
      }
    }
    return null;
  };

  const buoiHocDates = [
    'Thứ 6 ngày 09/08/25',
    'Thứ 2 ngày 11/08/25',
    'Thứ 4 ngày 13/08/25',
    'Thứ 6 ngày 15/08/25',
    'Thứ 2 ngày 18/08/25',
    'Thứ 4 ngày 20/08/25',
    'Thứ 6 ngày 22/08/25',
    'Thứ 2 ngày 25/08/25'
  ];

  return (
    <div className="w-full bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="relative">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th rowSpan="2" className="sticky left-0 bg-gray-100 px-4 py-3 text-left text-sm font-medium text-gray-700 border-r border-gray-200 z-10 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSort('nha')}>
                    Nhà
                  </th>
                  <th rowSpan="2" className="sticky left-16 bg-gray-100 px-4 py-3 text-left text-sm font-medium text-gray-700 border-r border-gray-200 z-10 min-w-[250px] cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSort('maHocVien')}>
                    Mã học viên
                  </th>
                  <th rowSpan="2" className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSort('hanhTrinh')}>
                    Hành trình của bạn
                  </th>
                  <th rowSpan="2" className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSort('tongDiem')}>
                    Tổng điểm
                  </th>
                  <th rowSpan="2" className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSort('diemViPham')}>
                    Điểm vi phạm
                  </th>
                  <th rowSpan="2" className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSort('diemTotNghiep')}>
                    Điểm tốt nghiệp
                  </th>
                  <th rowSpan="2" className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSort('gieoHatViPham')}>
                    Gieo hạt vi phạm
                  </th>
                  {buoiHocDates.map((date, index) => (
                    <th key={index} colSpan="2" className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200">
                      <div>Buổi {index + 1}</div>
                      <div className="text-xs font-normal text-gray-500">{date}</div>
                    </th>
                  ))}
                  <th rowSpan="2" className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                    Điều khiển
                  </th>
                </tr>
                <tr>
                  {[...Array(8)].map((_, index) => (
                    <React.Fragment key={index}>
                      <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-r border-gray-200">
                        Điểm danh
                      </th>
                      <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-r border-gray-200">
                        Báo cáo bài tập
                      </th>
                    </React.Fragment>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedData.map((row, index) => (
                  <React.Fragment key={index}>
                    <tr className="hover:bg-gray-50">
                      <td className="sticky left-0 bg-white px-4 py-3 text-sm text-gray-900 border-r border-gray-200">
                        {row.nha}
                      </td>
                      <td className="sticky left-16 bg-white px-4 py-3 text-sm text-gray-900 border-r border-gray-200 min-w-[250px]">
                        {row.maHocVien}
                      </td>
                      <td className="px-4 py-3 border-r border-gray-200">
                        <div className="flex items-center justify-center">
                          <div className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getProgressColor(row.hanhTrinh)}`}>
                            {row.hanhTrinh.toFixed(2)}%
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-900 border-r border-gray-200">
                        {row.tongDiem}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-900 border-r border-gray-200">
                        {row.diemViPham}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-900 border-r border-gray-200">
                        {row.diemTotNghiep}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-900 border-r border-gray-200">
                        {row.gieoHatViPham}
                      </td>
                      {row.buoi.map((buoi, buoiIndex) => (
                        <React.Fragment key={buoiIndex}>
                          <td className="px-2 py-3 text-center border-r border-gray-200">
                            <div className="flex justify-center">
                              {getStatusIcon('diemDanh', buoi.diemDanh)}
                            </div>
                          </td>
                          <td className="px-2 py-3 text-center border-r border-gray-200">
                            <div className="flex justify-center">
                              {getStatusIcon('baoCao', buoi.baoCao)}
                            </div>
                          </td>
                        </React.Fragment>
                      ))}
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => toggleExpand(index)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          {expandedRows[index] ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      </td>
                    </tr>
                    {expandedRows[index] && (
                      <tr>
                        <td colSpan="24" className="px-4 py-3 bg-gray-50">
                          <div className="text-sm text-gray-600">
                            <p className="mb-2"><strong>Chi tiết học viên:</strong></p>
                            <div className="grid grid-cols-3 gap-4">
                              <div>
                                <p>• Nhà: {row.nha}</p>
                                <p>• Mã số: {row.maHocVien.split('-')[0]}</p>
                                <p>• Họ tên: {row.maHocVien.split('-').slice(1, -1).join('-')}</p>
                              </div>
                              <div>
                                <p>• Tiến độ học tập: {row.hanhTrinh}%</p>
                                <p>• Tổng điểm đạt được: {row.tongDiem}</p>
                                <p>• Điểm vi phạm: {row.diemViPham}</p>
                              </div>
                              <div>
                                <p>• Điểm tốt nghiệp: {row.diemTotNghiep}</p>
                                <p>• Gieo hạt vi phạm: {row.gieoHatViPham}</p>
                                <p>• Số buổi vắng: {row.buoi.filter(b => b.diemDanh === 'vang').length}</p>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #9CA3AF #E5E7EB;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #E5E7EB;
          border-radius: 5px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9CA3AF;
          border-radius: 5px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6B7280;
        }
      `}</style>
    </div>
  );
};

export default DataTable;
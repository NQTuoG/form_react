import React from 'react'
import { useSelector } from 'react-redux';
const KetQua = () => {

    const {tongSoBanThang, tongSoBanChoi, banChon } = useSelector((state) => state.xiNgauSlice);

  return (
    <div className='ketQua'>
            <p>
        Bạn chọn{" "}
        <span className={`ml-3 ${banChon ? "text-red-500" : "text-green-500"}`}>{banChon ? "Tài" : "Xỉu"}</span>
      </p>
            <p>Tổng số bàn thắng <span className='text-blue-500 ml-3'>{tongSoBanThang}</span></p>
            <p>Tổng số bàn chơi <span className='text-blue-500 ml-3'>{tongSoBanChoi}</span></p>
    </div>
  )
}

export default KetQua

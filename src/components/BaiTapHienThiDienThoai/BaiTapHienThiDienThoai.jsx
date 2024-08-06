import React, { useState } from 'react'
import DanhSachDienThoai from './DanhSachDienThoai';
import ChiTietDienThoai from './ChiTietDienThoai';
import { useSelector } from 'react-redux';

const BaiTapHienThiDienThoai = () => {
  const {iphones} = useSelector((state) => state.dienThoaiSlice);
  console.log(iphones)

    let [ dienThoai, setChiTietDienThoai ] =useState(iphones[0])

    function updateDienThoai(dienThoai){
        setChiTietDienThoai(dienThoai)
    }

  return (
    <div>
     <h2> Bài tập hiển thị chi tiết điện thoại</h2>
        <DanhSachDienThoai listphone={iphones} 
        title="Danh sách điện thoại"
        updateDienThoai = {updateDienThoai}
        />
        <ChiTietDienThoai dienThoai={dienThoai} />
    </div>
  )
}

export default BaiTapHienThiDienThoai

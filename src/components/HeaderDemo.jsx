// câu lệnh : rafce
import React from 'react'

const HeaderDemo = () => {
  const sinhVien = {
    hoTen: "Nguyễn Quốc Tường",
    lop: "BCS12",
    tuoi: 22,
  }
//===
  const arrMonAn = [{
    tenMon: " Mì xào hải sản ",
    giaTien: 35000,
  },
  {
    tenMon: " Súp Cua ",
    giaTien: 25000,
  },
  {
    tenMon: " Lẩu manwah ",
    giaTien: 30000,
  },{
    tenMon: "Cơm Chiên hải sản ",
    giaTien: 35000,
  },
];
// string, number, array (string, number, jsx)
const classBtn = 'py-2 px-5 bg-green-400 text-white'


  return (
    <div className='bg-black text-white p-10'>
      <p>Á đù vip {sinhVien.hoTen}</p>
      <button className={classBtn} type="button"> Đăng nhập</button>
      <p>{sinhVien.tuoi > 18 
      ? "Xin chúc mừng bạn đã đủ tuổi"
      : "Xin lỗi bạn chưa đủ tuổi"}
      </p>
      {[<div>đây là thẻ div</div>]}
      <button className={classBtn} type="button"> Đăng ký</button>

      {arrMonAn.map((item,index)=> {
        return (
        <div>
          <h3>{item.tenMon}</h3>
          <p>{item.giaTien}</p>
        </div>  
        );
      })}
    </div>
    
  )
}

export default HeaderDemo

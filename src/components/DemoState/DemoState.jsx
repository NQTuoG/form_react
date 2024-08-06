import React, { useState } from 'react'
import hinhXeDen from './../../assets/products/black-car.jpg'
const DemoState = () => {
    // luông khai báo hook nằm ở đầu component
    // hooks không được khai báo trong các function hay bất kì điều kiện if else, chỉ được khai báo ở tỏng function component
    // hook useState
    const [state, setState] =useState(8);
    //
    const [hoTen,setHoTen] =useState('');
    let diemToan = 9;
  return (
    <div>
      <h2>Demo state trong react</h2>
      <p>{diemToan}</p>
      <p>Giá trị State: {state}</p>
      <button 
    //   onClick={()=>{
    //     diemToan ++;
    //     console.log(diemToan)
    //   }} 
    onClick={() =>{
        setState(state + 1)
    }}
      className='py-2 px-5 bg-red-500 rounded-lg text-white'>Tăng số</button>


        {/* DEMO LẤY DỮ LOAD DỮ LIỆU BĂNG STATE NHẬP TỪ INPUT  */}
      <div>
        {/* thực hiện truyền dữ liệu state họ trên qua  data binding     */}
        <label htmlFor=""> Nhập tên</label>
        <input onChange={(event)=>{
            console.log(event.target.value);
            setHoTen(event.target.value);
        }} type="text" className='p-2 border' placeholder='nhập họ tên' />
        <p>{hoTen}</p>
      </div>

      <img src="./public/CarBasic/products/black-car.jpg" alt="" />
      <img src={hinhXeDen} alt="" />


    </div>
  )
}

export default DemoState

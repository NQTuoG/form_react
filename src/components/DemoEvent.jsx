// câu lệnh : rafce
import React from 'react'

const DemoEvent = () => {
  // onclick, onchange
    // Dom.onclick = () =>{
    // alert ("người dung đã bấm nít")
    //}

    function chaoMungSinhVienMoi(hoTen){
        alert(`Chúc mừng sing viên ${hoTen} đã nhập học`)
    }
    return (
    <div>
      <h2 className='text-2xl font-bold>'> Demo về xử lí sự kiện trong React</h2>
      <button onClick={()=>{
        alert("người dùng đã bấm nút");
      }} 
      className='bg-black text-white py-2 px-5 rounded-md' > hiển thị câu chào
      </button>

     <button onClick={()=>{
       chaoMungSinhVienMoi("Quốc Tường")
      }} 
      className='bg-blue-500 text-white py-2 px-5 rounded-md' > hiển thị câu chào 2
      </button>

      <label htmlFor="" className='block' > họ tên</label>
      <input type="text"placeholder='Nhập họ tên'
      className='p-2 border rounded-md block mb-10' 
      onChange={(event)=>{
        console.log(event.target.value);
      }}/>
    </div>
  )
}

export default DemoEvent
 
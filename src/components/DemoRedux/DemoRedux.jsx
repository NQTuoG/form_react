import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { capNhatHoTen } from '../../redux/slices/userSlice'

const DemoRedux = () => {
  const dispatch = useDispatch();
  return (
    <div>

       <h2>Đê mô xử lí chức năng của redux toolkit</h2>
       <label htmlFor=""> Tên người dùng </label>
       <input 
       onChange={(event) => {
        console.log(event.target.value);
        dispatch (capNhatHoTen(event.target.value));
       }}
       type="text"
       className='border p-2 rounded-md'
       placeholder='Vui lòng nhập tên người dùng' />
    </div>
  )
}

export default DemoRedux

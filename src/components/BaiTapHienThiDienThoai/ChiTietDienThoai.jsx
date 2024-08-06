import React from 'react'

const ChiTietDienThoai = ({ dienThoai }) => {
  return (
    <div className='flex'>
        <div className='w-4/12'>
        <img className='h-80' src={dienThoai.image} alt="" />
        </div>
        <div className='w-8/12'>
        <h3 className='text-xl font-bold'>Thông số kỹ thuật</h3>
        <h3 className='text-xl font-bold'>{dienThoai.name}</h3>
        <table border={2} cellPadding={10} >
            <tr>
                <td>Màn Hình:</td>
                <td>{dienThoai.screen}</td>
            </tr>
            <tr>
                <td>Hệ Điều Hành:</td>
                <td>{dienThoai.os}</td>
            </tr>
            <tr>
                <td>Camera Trước:</td>
                <td>{dienThoai.front_camera}</td>
            </tr>
            <tr>
                <td>Camera Sau:</td>
                <td>{dienThoai.rear_camera}</td>
            </tr>
            <tr>
                <td>Ram:</td>
                <td>{dienThoai.ram}</td>
            </tr>
            <tr>
                <td>Rom:</td>
                <td>{dienThoai.rom}</td>
            </tr>
        </table>
        </div>
    </div>
  )
}

export default ChiTietDienThoai

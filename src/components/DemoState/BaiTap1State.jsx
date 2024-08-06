import React, { useState } from 'react'

const BaiTap1State = (props) => {
    // dữ liệu props là dữ liệu chỉ đọc (readonly)
    const [selectCar, setSelectCar] =useState("black-car.jpg");
    console.log(props);
    const arrBtn = [
        {
            selectCar:"black-car.jpg",
            icon: "./public/CarBasic/icons/icon-black.jpg" ,
            title:"Crystal Black" ,
            subTitle: "Pearl",
        },
        {
            selectCar:"steel-car.jpg",
            icon: "./public/CarBasic/icons/icon-steel.jpg" ,
            title:"Modern Steel" ,
            subTitle: "Pearl",
        },
        {
            selectCar:"silver-car.jpg",
            icon: "./public/CarBasic/icons/icon-silver.jpg" ,
            title:"Luna Silver" ,
            subTitle: "Pearl",
        },
        {
            selectCar:"red-car.jpg",
            icon: "./public/CarBasic/icons/icon-red.jpg" ,
            title:"Rallye Red" ,
            subTitle: "Pearl",
        },
    ]
  return (
    <div>
        <h2>Bài Tập hiển thị loại xe ứng dụng bằng State {props.abc} </h2>
        <button className='py-2` px-5 bg-red-500 text-white rounded-lg' onClick={props.updateStateCount} > tăng count </button>
        <div className='flex'>
            <div className='w-2/3'>
            <img src={`./public/CarBasic/products/${selectCar}`} alt="" />
            </div>

            <div className='w-1/3 space-y-4'>

            {arrBtn.map((item, index)=>{
                    return(
                    <button onClick={()=>{
                        setSelectCar(item.selectCar)
                    }} className='flex items-center py-2 px-5 rounded-lg border space-x-3 border-black mx-5 w-1/2'>
                    <img width={40} src={item.icon} alt="" />
                    <b>{item.title} </b>
                    <p>{item.subTitle}</p>
                    </button>
                    );
                })
            }
            </div>
        </div>
    </div>
  )
}

export default BaiTap1State

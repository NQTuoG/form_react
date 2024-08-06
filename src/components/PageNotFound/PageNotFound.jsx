import React from "react";
import animationPageNotFound from "./../../animation/PageNotFoundAnimation.json";
import Lottie from "lottie-react";
import {Link, useNavigate} from "react-router-dom";

const PageNotFound = () => {

  const navigate = useNavigate();
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <Lottie 
        style={{width :"100%",
            height:"600px",
        }} animationData ={animationPageNotFound} loops  />
        <h2> Trang wed bạn đang tìm kiếm không có, vui lòng quay lại trang chủ</h2>

        {/* chuyển hướng dùng navigate */}
        <button onClick={() =>{navigate("/")}} className='bg-red-600 text-white py-2 px-5 rounded-lg'>Về trang chủ</button>

        {/* chuyển hướng dùng thẻ Link của thư viện import {Link, useNavigate} from "react-router-dom"; */}
        {/* <Link to={"/"} className='bg-red-600 text-white py-2 px-5 rounded-lg'>Về trang chủ</Link> */}

    </div>
  )
}

export default PageNotFound

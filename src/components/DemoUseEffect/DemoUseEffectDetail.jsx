import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const DemoUseEffectDetail = () => {
  const [shoe, setShoe] = useState({});
  const [searchParam, setSearchPram] = useSearchParams();
  const dataGiaTien = searchParam.get("giatien");
  const dataHang = searchParam.get("hang");
  console.log(dataGiaTien);

  // shoe.tuoi ==> undifined
  const { id } = useParams();
  // tham số thứ 2 của useEffect là 1 mảng có tên dependecy giúp thực hiện cho phép người dùng lựa chọn chạy lại useEffect khi một hoặc nhiều giá trị thay đổi
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    })
      .then((res) => {
        setShoe(res.data.content);
      })
      .catch((err) => {});
  }, [id]);


  // Hook useMemo
  let random = id + Math.floor(Math.random() *6)
  const randomMemo = useMemo(() => {
    return random;
  }, [id]);
  console.log(random)

  useEffect(()=>{
    return() =>{
      console.log("component use effect đã bị tắt")
      // tracking thời gian
    }
  })

  console.log(shoe,id);

  // hook ref
  const refCustom = useRef(null);
  const refInput = useRef(null)

  return (
    <>
      <input type="text" placeholder="Nhập năm sinh" ref={refInput} 
        onChange={(event)=>{
          console.log(event.target.value)
          console.log(refInput.current.value)
        }}
      />

      <p>{refInput?.current?.value}</p>
      <button onClick={()=>{
        console.log(refCustom.current.scrollIntoView(
          {
            behavior:"smooth",
            block :"center",
          })
        );
      }} className="py-2 px-5 bg-black text-white rounded-md">Bấm vào để xem sản phẩm liên quan</button>

      {randomMemo}

      <input type=" text" 
      className="p-2 border border-black rounded-md" 
      placeholder="Nhập tên hãng"
      onChange={(event)=>{
        const dataQuery = Object.fromEntries(searchParam);
        console.log(dataQuery)

        setSearchPram({ ...dataQuery, hang: event.target.value});
      }}
    />

      <div>
      <h2>Demo về trang chi tiết sản phẩm</h2>
      <div className="flex">
        <div className="w-4/12">
          <img src={shoe.image} alt="" />
        </div>
        <div className="w-8/12">
          <h2 className="font-bold text-3xl">{shoe.name}</h2>
          <p>{shoe.shortDescription}</p>
          <p>Giá tiền: {shoe.price}</p>
          <button className="py-2 px-5 bg-black text-white rounded-md">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div ref={refCustom}>
        <h3>Các sản phẩm liên quan</h3>
        {shoe.relatedProducts?.map((item, index) => {
          return (
            <div>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>Giá tiền: {item.price}</p>
              <Link
                to={`/demo-use-effect-detail/${item.id}`}
                className="bg-blue-500 text-white py-2 px-5 rounded-md"
              >
                Xem chi tiết
              </Link>
            </div>
          );
        })}
      </div>

    </>
  );
};

export default DemoUseEffectDetail;
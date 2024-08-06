import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NotificationContext } from "../../App";
import { useCallback } from "react";
const DemoUseEffect = () => {

  // bước 3 tạo biến để lưu chữ const data = useContext(NotificationContext);
  const data = useContext(NotificationContext);
  console.log(data);

  const [listShoe, setListShoe] = useState();
  useEffect(() => {
    console.log("Tôi là useEffect chạy sau khi giao diện xuất hiện");
    // lưu ý useEffect này sẽ chạy 1 lần duy nhất khi component được khởi tạo
    // Xử lí gọi API cho component ở useEffect này
    axios({
      method: "GET",
      url: "https://shop.cyberlearn.vn/api/Product",
    })
      .then((res) => {
        console.log(res);
        setListShoe(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });

      // bước 4 gọi handleNotification từ contextHolder
      data.handleNotification("error", "Hello");
      console.log(data)
  }, []);

  console.log("Tôi là component demoUseEffect");
  console.log(listShoe);

  function render() {
    console.log("Tôi là giao diện của demouseEffect");
    return <p>{ listShoe && listShoe[0]?.name }</p>;
  }

  const [number, setNumber] = useState("");
  // useCallback được sử dụng khi chúng ta cần quản lí một function có nên được render lại khi compoent rerender hay không
  // các tham số  trong dependencies của useCallBack giúp thực hiện kiểm tra nào khi funtion đó nên render lại để lấy dữ liệu mới
  const functionCallBack =  useCallback(render, [number]);
  
  return (
    <div>
      {functionCallBack()}
      <input type="text" placeholder="nhập bất kì số" onChange={(event) =>{
        setNumber(event.target.value);
      }} />
      <div className="grid grid-cols-4 gap-5">
        {/* nếu có dữ liệu thì chạy, không thì sẽ không chạy  */}
        {listShoe?.map((item, index) => {
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
    </div>
  );
};

export default DemoUseEffect;
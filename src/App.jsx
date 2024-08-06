import { Route, Routes } from "react-router-dom";
import BaiTap1Props from "./components/BaiTap/BaiTap1Props";
import BaiTapHienThiDienThoai from "./components/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PokemonDetail from "./components/PokemonDetail";
import useRouteCustom from "./routes/useRouteCustom";
import { message } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

// bước 1 tạo 1 cái NotificationContext từ  createContext
export const NotificationContext = React.createContext();
function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const routes = useRouteCustom();

  const handleNotification = (status, content) => {
    messageApi.open({
      type : status,
      content,
    });
  }
  return (<>

{/* // bước 2  .Provider  để chia sẽ dữ liệu cho các component nằm trong NotificationContext */}

    <NotificationContext.Provider value={{abc: "leuleu",handleNotification,}} >
      {contextHolder}
      {routes}
    </NotificationContext.Provider>
  </>
  );
  {
    
  }
  // cách setup và sử dụng
  // index, element, path, trong react router dom
  // setup template sử dụng chung cho các trang
  // page not found
  // lấy dữ liệu param (:id) , query param(&name="")
  // custom 

  //  return(
  //   <>
  //     <Routes>
  //       <Route path="/" element={<HomeTemplate/>} >
  //       <Route index element={<BaiTap1Props/>} /> 
  //       {/* thuộc tính index xác định một componet con sẽ hiển thị cùng lúc khi người dung truy cập tới đường dẫn của component cha */}
  //       <Route path="bai-tap-dt" element={<BaiTapHienThiDienThoai/>} />

  //       <Route path="pokemon-detail/:id" element={<PokemonDetail/>}/>

  //       </Route>
  //       <Route path="*" element={<PageNotFound/>}/>
  //     </Routes>
  //   </>
  //  );
}

export default App;

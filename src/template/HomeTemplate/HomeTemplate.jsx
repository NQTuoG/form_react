import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { path } from '../../common/path';
import { useSelector } from 'react-redux';

const { Header, Content, Footer } = Layout;
// const items = new Array(3).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));
const HomeTemplate = () => {
  const {hoTen} = useSelector((state) => state. userSlice);

  const arrNavLink = [{
    to : path.homePage,
    content : "Home",
  },
  {
    to : path.baiTapDT,
    content : "Bài Tập điện thoại",
  },
  {
    to : path.DemoRedux,
    content : "Demo redux",
  },
  {
    to : path.BaiTapLacXiNgau,
    content : "Tài xỉu",
  },
  {
    to: "/demo-useEffect",
    content: "Demo useEffect",
  },
  {
    to: "/demo-form-react",
    content: "Demo Form React",
  },
];
   
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='min-h-screen'>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-between"

        }}
      >
        
        <div className="demo-logo" />

        <div>
        {arrNavLink.map((item, index) =>{
          return(
            <NavLink className={({isActive}) => {
              /**
               * trong hàm trả về class của thẻ NavLink có cung cấp thuộc tính isActive giúp kiểm tra path của url
               * và giá trị trong thuộc tính của thẻ xem giống nhau hay không, nếu giống trả về kết quả true và ngược lại
               */
              console.log(isActive);
              return `mx-4 ${isActive ? "text-green-600" : "text-white"}`;
            }} to={item.to}> {item.content}</NavLink>
          )
        })}
        </div>
        <div className='text-white'>{hoTen}</div>
        

      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Repo của Họa Sĩ Người Áo
      </Footer>
    </Layout>
  );
};
export default HomeTemplate;
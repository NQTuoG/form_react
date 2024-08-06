import React from 'react'
import { Space, Table, Tag } from "antd";
import ButtonCustom from './ButtonCustom';



const TableNhanVien = ({ data, handleDeleteNhanVien, handleGetInforNhanVien }) => {
  const columns = [
    {
      title: "MSNV",
      dataIndex: "msnv",
      key: "msnv",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Giới Tính",
      key: "gioiTinh",
      dataIndex: "gioiTinh",
      render: (text) => {
        return <Tag color={text === "Nam" ? "magenta" : "geekblue"}>{text}</Tag>;
      },
    },
    {
      title: "Hành Động",
      key: "hanhDong",
      render: (text, record) => {
        return (
          <>
            <ButtonCustom onClick={() => {
              handleDeleteNhanVien(record.msnv);
            }} content={"Xoá"} bgColor="bg-red-500" />
            <ButtonCustom onClick={() => {
              handleGetInforNhanVien(record);
            }} content={"Sửa"} bgColor="bg-purple-500" />
          </>
        );
      },
    },
  ];
  return (
    <div className="mt-10">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TableNhanVien;
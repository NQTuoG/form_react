import React from 'react'
import { useState } from 'react'
import { Formik, useFormik } from "formik";
import InputCustom from './InputCustom';
import { DatePicker } from "antd";
import ButtonCustom from './ButtonCustom';
import TableNhanVien from './TableNhanVien';
import * as yup from 'yup';
import Password from 'antd/es/input/Password';
import Item from 'antd/es/list/Item';
import { useContext } from 'react';
import { NotificationContext } from "../../App";


const DemoFormReact = () => {
  // const [value, setValue] = useState({
  //   hoTen: "",
  //   email: "",
  // });
  // console.log(value);
  // const handleChange = (event) => {
  //   const id = event.target.id;
  //   setValue({ ...value, [id]: event.target.value });
  // };

  // msnv,họ tên, email, mật khẩu, ngày tháng năm sinh, giới tính, số điện thoại
  // Form nhập dữ liệu người dùng (thuần), Table quản lí nhân viên (antd)
  const [arrNhanVien, setArrNhanVien] = useState([]);
  const {handleSubmit, handleChange,values, setFieldValue,errors,handleBlur,touched,resetForm, setValues} = useFormik({
    // initialValues là dữ liệu mặc định của formik được cung cấp từ người dùng
    initialValues: {
      msnv:"",
      hoTen: "",
      email:"",
      soDienThoai:"",
      matKhau: "",
      gioiTinh: "",
      ngaySinh: "",
    },
    // onSubmit được thực thi khi form bắt đầu chạy sự kiện submit, tham số values đại diện cho dữ liệu của tất cả field trong form
    onSubmit: (values) => {
      console.log(values,{resetForm});
      // const newArrNhanVien = [...arrNhanVien];
      // newArrNhanVien.push(values);
      // setArrNhanVien(newArrNhanVien);
      setArrNhanVien([...arrNhanVien, values]);
      resetForm()
    },
    // yub .object sẽ nhận được một object chứ thông tin cho các field ở initiaValues
    validationSchema : yup.object({
      email : yup.string().required("Vui lòng không bỏ trống").email("không đúng định dạng mail"),

      msnv: yup.string()
      .min(4, "Mã số nhân viên phải từ 4 đến 8 kí tự")
      .max(8, "Mã số nhân viên phải từ 4 đến 8 kí tự")
      .required("Vui lòng không bỏ trống mã số nhân viên"),
      
      soDienThoai : yup.string()
      .matches(/^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/, "Số điện thoại không hợp lệ")
      .required("Vui lòng không bỏ trống"),

      hoTen: yup.string()
      .matches(/^[A-Za-zÀ-ỹ\s]+$/, "Tên chỉ chứa các ký tự chữ cái tiếng Việt và khoảng trắng")
      .min(2, "Tên quá ngắn, phải có ít nhất 2 ký tự")
      .max(30, "Tên quá dài, không được vượt quá 30 ký tự")
      .required("Vui lòng không bỏ trống tên"),

      matKhau: yup.string()
      .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, "Mật Khẩu Yêu Cầu Kí Tự Hoa, Kí Tự Đặc Biệt, Số ")
      .min(6, "Mật Khẩu quá ngắn, phải có ít nhất 6 ký tự")
      .required("Vui lòng không bỏ trống"),

      gioiTinh: yup.string().required("Vui lòng chọn"),

      ngaySinh: yup.string().required("Vui lòng chọn"),
    })
  });

  const valueContext = useContext(NotificationContext)
  const deleteNhanVien = (msnv) => {
    const newArrNhanVien = [...arrNhanVien]
    const index = newArrNhanVien.findIndex((item) => item.msnv == msnv)
    if (index != -1) {
      newArrNhanVien.splice(index, 1)
      setArrNhanVien(newArrNhanVien)
    } else {
      valueContext.handleNotification("error","Có lỗi xảy ra người dùng không có trong hệ thống")
    }
  }

  const getInforNhanVien = (record) => {
    // sử dụng phương thực setValues để lấy record và cập nhật lên form
    setValues({
      msnv: record.msnv,
      hoTen: record.hoTen,
      email: record.email,
      soDienThoai: record.soDienThoai,
      matKhau: record.matKhau,
      gioiTinh: record.gioiTinh,
      ngaySinh: record.ngaySinh,
    });
  }

  const updateNhanVien = () => {
    if (!Object.keys(errors).length) {
      const newArrNhanVien = arrNhanVien.map((nv) => {
        if (nv.msnv === values.msnv) {
          return { ...values };
        }
        return nv;
      });
      setArrNhanVien(newArrNhanVien);
      resetForm();
    } else {
      valueContext.handleNotification("error", "Vui lòng kiểm tra lại thông tin.");
    }
  };

  // tìm kiếm nhân viên( lọc theo tên)




  return (
    <div>
      <h2>Bài tập ứng dụng xây dựng form lấy dữ liệu trong React</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-5'>
          <InputCustom
            labelContent={"MSNV"}
            placeholder={"Vui lòng nhập msnv"}
            name={"msnv"}
            value={values.msnv}
            onChange={handleChange}
            id={"msnv"}
            onBlur={handleBlur}
            error={errors.msnv}
            touched={touched.msnv}
          />
          <InputCustom
            labelContent={"Họ Tên"}
            placeholder={"Vui Lòng nhập họ tên"}
            name={"hoTen"}
            value={values.hoTen}
            onChange={handleChange}
            id={"hoTen"}
            onBlur={handleBlur}
            error={errors.hoTen}
            touched={touched.hoTen}
          />
          <InputCustom
            labelContent={"Email"}
            placeholder={"Vui Lòng nhập Email"}
            name={"email"}
            value={values.email}
            onChange={handleChange}
            id={"email"}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />
          <InputCustom
            labelContent={"Số Điện Thoại"}
            placeholder={"Vui Lòng nhập SĐT"}
            name={"soDienThoai"}
            value={values.soDienThoai}
            onChange={handleChange}
            id={"soDienThoai"}
            onBlur={handleBlur}
            error={errors.soDienThoai}
            touched={touched.soDienThoai}
          />
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Ngày sinh
            </label>
            <DatePicker
              format={"DD-MM-YYYY"}
              onChange={(date, dateString) => {
                setFieldValue("ngaySinh", dateString);
              }}
              onBlur={() => handleBlur({ target: { name: 'ngaySinh' } })}
            />
            {errors.ngaySinh && touched.ngaySinh ? <p className='text-red-500'>{errors.ngaySinh}</p> : null}
          </div>
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={values.gioiTinh}
              onChange={handleChange}
              name="gioiTinh"
            >
              <option selected>Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            {errors.gioiTinh && touched.gioiTinh ? <p className='text-red-500'>{errors.gioiTinh}</p> : null}
          </div>
          <InputCustom
            labelContent={"Mật Khẩu"}
            type={"password"}
            placeholder={"Vui lòng nhập mật khẩu"}
            name={"matKhau"}
            value={values.matKhau}
            onChange={handleChange}
            id={"matKhau"}
            classWrapper="col-span-2"
            onBlur={handleBlur}
            error={errors.matKhau}
            touched={touched.matKhau}
          />
          <div className='space-x-5'>
            <ButtonCustom content={"Thêm nhân viên"} type="submit" />
            <ButtonCustom onClick={() => { resetForm() }} content={"Reset Form"} bgColor='bg-black' />
            <ButtonCustom onClick={updateNhanVien} content={"Cập nhật nhân viên"} bgColor='bg-yellow-500' />
            <input className='borounded-md' type="text" placeholder="Tìm kiếm nhân viên" onChange={(e) => searchNhanVien(e.target.value)} />
          </div>
        </div>
      </form>
      <TableNhanVien data={arrNhanVien} handleDeleteNhanVien={deleteNhanVien} handleGetInforNhanVien={getInforNhanVien} />
    </div>
  );
};

export default DemoFormReact;
import React from 'react'

const DanhSachDienThoai = ({listphone, title, updateDienThoai}) => {

    return (
        <>
            <h3>{title}</h3>
            <div className='grid grid-cols-4 gap-4'>
                {/* bước 1: thực hiện sử dụng để render tạo các thẻ div item hiển thị dữ liệu điện thoại, các thông tin cần hiển thị bao gồm: ... */}
                {listphone.map((item, index)=>{
                    const{name,image}=item;
                    return(
                        <div>   
                        <div className='bg-slate-300 rounded-lg p-2'>
                            <img className='rounded-lg' src={image} alt="" />
                            <div className='px-5'>
                                <h3>Tên: {name}</h3>
                                <button 
                                onClick={()=>{updateDienThoai(item)}}
                                className='  py-2 px-5 rounded-lg border space-x-3 border-black '>xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                    );
                })};
            </div>
        </>
    );
}

export default DanhSachDienThoai

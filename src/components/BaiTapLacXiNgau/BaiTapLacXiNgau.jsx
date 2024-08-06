import React from 'react';
import"./style.scss";
import XiNgau from './XiNgau';
import KetQua from './KetQua';
import { useDispatch } from 'react-redux';
import { playGameTaiXiu } from "./../../redux/slices/xiNgauSlice";
const BaiTapLacXiNgau = () => {
  const dispatch = useDispatch();
  return (
    <div className='baiTap2'>
      <div>
        <h2 className='uppercase text-5xl'> Tài xỉu</h2>

        <XiNgau/>
        <KetQua/>
        
        <button
        onClick={() => {
          dispatch(playGameTaiXiu("play"));
        }} 
        className='btn-play'>Play Game</button>
      </div>
    </div>
  )
}

export default BaiTapLacXiNgau

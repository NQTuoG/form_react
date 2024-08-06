import { createSlice } from "@reduxjs/toolkit";
import XiNgau from "../../components/BaiTapLacXiNgau/XiNgau";
import { getRandomNumber } from "../../utils/utils";

const initialState = {
  xiNgau: {
    xiNgau1: 2,
    xiNgau2: 3,
    xiNgau3: 6,
  },
  tongSoBanThang: 0,
  tongSoBanChoi: 0,
  // tài = true, xỉu = false
  banChon: true,
};

const xiNgauSlice = createSlice({
  name: "xiNgau",
  initialState,
  reducers: {
    luaChonNguoiDung: (state, action) => {
      console.log(action);
      state.banChon = action.payload;
    },

    playGameTaiXiu: (state, action) => {
      console.log(action);

      // const randomXiNgau = () => Math.floor(Math.random() * 6) + 1;
      state.xiNgau.xiNgau1 = getRandomNumber();
      state.xiNgau.xiNgau2 = getRandomNumber();
      state.xiNgau.xiNgau3 = getRandomNumber();

      // dung object literal
      // state.xiNgau = { xiNgau1, xiNgau2, xiNgau3 };

      state.tongSoBanChoi += 1;

      // tính tổng xí ngầu
      const tongXiNgau =
        state.xiNgau.xiNgau1 + state.xiNgau.xiNgau2 + state.xiNgau.xiNgau3;
      const isTai = tongXiNgau > 10;

      if (
        (state.banChon === true && isTai) ||
        (state.banChon === false && !isTai)
      ) {
        state.tongSoBanThang += 1;
      }
    },
  },
});

export const { luaChonNguoiDung, playGameTaiXiu } = xiNgauSlice.actions;

export default xiNgauSlice.reducer;

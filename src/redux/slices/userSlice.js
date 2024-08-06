// rxslice để tạo nhanh 1  redux toolkit
import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  hoTen: "Cẩm y Vệ",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    capNhatHoTen: (state, action) => {
      console.log(action);
      console.log(current(state));
      state.hoTen = action.payload;
    },
  },
});

export const { capNhatHoTen } = userSlice.actions;

export default userSlice.reducer;

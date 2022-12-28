import { Action, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IHomePageState } from "./type";

const initialState: IHomePageState = {
  topCars: [],
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    },
  },
});

export const { setTopCars } = homePageSlice.actions;
export default homePageSlice.reducer;


export const memoizedTopCars = createSelector(
  (state: RootState) => state.homePage.topCars,
  (cars) => {
    return cars;
  }
);

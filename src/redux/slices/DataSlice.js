import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  url: "",
  captions: [],
};

export const DataSlice = createSlice({
  name: "Data",
  initialState: initialValues,
  reducers: {
    clearData: (state, action) => {
      return initialValues;
    },
    setURL: (state, action) => {
      state.url = action.payload;
    },
    addSingleCaption: (state, action) => {
      state.captions.push(action.payload);
    },
    removeCaption: (state, action) => {
      state.captions = state.captions.filter(
        (item) => item.startTime !== action.payload.startTime
      );
    },
  },
});

export const { clearData, setURL, addSingleCaption, removeCaption } =
  DataSlice.actions;

export default DataSlice.reducer;

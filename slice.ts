import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VeryVerySlowType } from "./veryVerySlowType";
import { FastType } from "./fastType";

// Try typescript intellisense in another file.
// Then swap the lines below and try again for comparison.

const _initialState: FastType = {}
const initialState: VeryVerySlowType = {}

const slice = createSlice({
  name: "SlowSlice",
  initialState,
  reducers: {
    slowReducer: (state: VeryVerySlowType, action: PayloadAction<{}>) => {}
  }
})

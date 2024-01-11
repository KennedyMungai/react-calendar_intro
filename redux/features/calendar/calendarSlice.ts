import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"


const initialState = {
    date: Date
}


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setCalendarDate: (state, action) => {
            state.date = action.payload
        }
    }
})

export const { setCalendarDate } = calendarSlice.actions

export const selectCalendarDate = (state: RootState) => state.calendar.date

export default calendarSlice.reducer
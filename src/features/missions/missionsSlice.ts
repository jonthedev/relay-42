import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/store/store"

export type DepartureDate = {
  day: string
  month: string
  year: string
}

export type Mission = {
  name: string
  members: number
  destination: string
  departure: DepartureDate
}

export type Missions = {
  missions: Mission[]
}

const initialState: Missions = {
  missions: []
}

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    // business logic
    addMission: (state, action: PayloadAction<Mission>) => {
      state.missions.push(action.payload)
    }
  }
})

export const { addMission } = missionsSlice.actions

export const selectMissions = (state: RootState) => state.missions

export default missionsSlice.reducer

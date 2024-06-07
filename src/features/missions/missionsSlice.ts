import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/store/store"

interface MissionState {
  missions: string[]
}

const initialState: MissionState = {
  missions: []
}

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    // business logic
    addMission: (state, action: PayloadAction<string>) => {
      state.missions.push(action.payload)
    }
  }
})

export const { addMission } = missionsSlice.actions

export const selectMissions = (state: RootState) => state.missions

export default missionsSlice.reducer

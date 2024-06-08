import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/store/store"

export type DepartureDate = {
  day: string
  month: string
  year: string
}

export type Mission = {
  id: number
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
    },
    removeMission: (state, action: PayloadAction<number>) => {
      const updatedMissions = state.missions.filter(
        mission => mission.id !== action.payload
      )
      state.missions = updatedMissions
    },
    editMission: (state, action: PayloadAction<Mission>) => {
      const missionIndx = state.missions.findIndex(
        mission => mission.id === action.payload.id
      )
      state.missions[missionIndx] = action.payload
    }
  }
})

export const { addMission, removeMission, editMission } = missionsSlice.actions

export const selectMissions = (state: RootState) => state.missions

export default missionsSlice.reducer

import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/store/store"
import { findIndexByPredicate } from "@/utils"

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
  error: string | null
}

const initialState: Missions = {
  missions: [],
  error: null
}

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    addMission: (state, action: PayloadAction<Mission>) => {
      const { missions } = state
      const index = findIndexByPredicate(
        missions,
        mission => mission.id === action.payload.id
      )

      if (index !== -1) {
        state.error = "This mission already exists"
        return
      }

      state.missions.push(action.payload)
      state.error = null
    },
    removeMission: (state, action: PayloadAction<Mission>) => {
      const { missions } = state
      const index = findIndexByPredicate(
        missions,
        mission => mission.id === action.payload.id
      )

      if (index === -1) {
        state.error = "Mission not found"
        return
      }

      state.missions.splice(index, 1)
      state.error = null
    },
    editMission: (state, action: PayloadAction<Mission>) => {
      const index = findIndexByPredicate(
        state.missions,
        mission => mission.id === action.payload.id
      )

      if (index === -1) {
        state.error = "Mission not found"
        return
      }

      state.missions[index] = action.payload
      state.error = null
    }
  }
})

export const { addMission, removeMission, editMission } = missionsSlice.actions

export const selectMissions = (state: RootState) => state.missions

export const selectMissionById = (missionId: number) =>
  createSelector(selectMissions, ({ missions }) =>
    missions.find(mission => mission.id === missionId)
  )

export const selectMissionsError = (state: RootState) => state.missions.error

export default missionsSlice.reducer

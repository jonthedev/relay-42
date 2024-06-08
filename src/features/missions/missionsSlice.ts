import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
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
  error: string | null
}

const initialState: Missions = {
  missions: [],
  error: null
}

const findMissionIndexById = (missions: Mission[], id: number): number => {
  return missions.findIndex(mission => mission.id === id)
}

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    addMission: (state, action: PayloadAction<Mission>) => {
      if (findMissionIndexById(state.missions, action.payload.id) !== -1) {
        state.error = "Mission with this ID already exists"
        return
      }
      state.missions.push(action.payload)
      state.error = null
    },
    removeMission: (state, action: PayloadAction<number>) => {
      const missionIndex = findMissionIndexById(state.missions, action.payload)
      if (missionIndex === -1) {
        state.error = "Mission not found"
        return
      }
      state.missions = state.missions.filter(
        mission => mission.id !== action.payload
      )
      state.error = null
    },
    editMission: (state, action: PayloadAction<Mission>) => {
      const missionIndex = findMissionIndexById(
        state.missions,
        action.payload.id
      )
      if (missionIndex === -1) {
        state.error = "Mission not found"
        return
      }
      state.missions[missionIndex] = action.payload
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

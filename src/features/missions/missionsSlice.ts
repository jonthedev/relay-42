import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/store/store"
import { findIndexByPredicate } from "@/utils"
import { v4 as uuidv4 } from "uuid"
import { UUID } from "@/types"

export type DepartureDate = {
  day: string
  month: string
  year: string
}

export type Mission = {
  id: UUID
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
    addMission: (state, action: PayloadAction<Omit<Mission, "id">>) => {
      const { missions } = state
      const index = findIndexByPredicate(
        missions,
        mission => mission.name === action.payload.name
      )

      if (index !== -1) {
        state.error = "A mission with that name already exists"
        return
      }

      const newMission = {
        id: uuidv4(),
        ...action.payload
      }
      state.missions.push(newMission)
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

export const selectMission = (
  state: RootState,
  id: UUID
): Mission | undefined =>
  state.missions.missions.find(mission => mission.id === id)

export const selectMissionsError = (state: RootState) => state.missions.error

export default missionsSlice.reducer

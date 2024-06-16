/**
 * Missions Slice Types and Reducers
 * ---------------------------------
 *
 * This file provides TypeScript type definitions for the missions slice,
 * including the state shape, action creators, selectors, and reducer functions.
 *
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/store/store"
import { findIndexByPredicate } from "@/utils"
import { missionSchema, type UUID, type Mission, type Missions } from "@/schema"

const initialState: Missions = []

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    addMission: (state, action: PayloadAction<Mission>) => {
      const missions = state
      const result = missionSchema.safeParse(action.payload)

      if (!result.success) {
        console.error(`Invalid mission payload: ${result.error.message}`)
        return
      }

      const index = findIndexByPredicate(
        missions,
        mission => mission.name === action.payload.name
      )

      if (index !== -1) {
        console.error("A mission with that name already exists")
        return
      }

      const mission = result.data

      state.push(mission)
    },
    removeMission: (state, action: PayloadAction<Pick<Mission, "id">>) => {
      const missions = state
      const result = missionSchema.safeParse(action.payload)

      if (!result.success) {
        console.error(`Invalid mission payload: ${result.error.message}`)
        return
      }

      const index = findIndexByPredicate(
        missions,
        mission => mission.id === action.payload.id
      )

      if (index === -1) {
        console.error("This mission doesn't exist")
        return
      }

      state.splice(index, 1)
    },
    editMission: (state, action: PayloadAction<Mission>) => {
      const result = missionSchema.safeParse(action.payload)

      if (!result.success) {
        console.error(`Invalid mission payload: ${result.error.message}`)
        return
      }
      const index = findIndexByPredicate(
        state,
        mission => mission.id === action.payload.id
      )

      if (index === -1) {
        return
      }

      state[index] = action.payload
    }
  }
})

export const { addMission, removeMission, editMission } = missionsSlice.actions

export const selectMissions = (state: RootState) => state.missions

export const selectMission = (
  state: RootState,
  id: UUID
): Mission | undefined => state.missions.find(mission => mission.id === id)

export default missionsSlice.reducer

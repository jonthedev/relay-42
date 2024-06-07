import { describe, it, expect } from "vitest"
import { store } from "@/store/store"
import missionsReducer, {
  type Mission,
  type Missions,
  addMission,
  removeMission
} from "@/features/missions/missionsSlice"
import {
  mockInitialMissionsState,
  mockMission,
  mockMissions
} from "./missionsMockData"

describe("missions slice", () => {
  it("should return the initial missions state", () => {
    const initialState: Missions = mockInitialMissionsState
    expect(store.getState().missions).toEqual(initialState)
  })

  describe("reducer: addMission", () => {
    it("should handle adding a new mission", () => {
      const prevMissionsState: Missions = mockInitialMissionsState
      const newMission: Mission = mockMission
      const newState = missionsReducer(
        prevMissionsState,
        addMission(newMission)
      )
      expect(newState).toEqual({
        missions: [newMission]
      })
    })
  })

  describe("reducer: removeMission", () => {
    it("should handle removing a mission by id", () => {
      const prevMissionsState: Missions = mockMissions
      const mockMissionId = 1
      const newState = missionsReducer(
        prevMissionsState,
        removeMission(mockMissionId)
      )
      expect(newState.missions).toHaveLength(
        prevMissionsState.missions.length - 1
      )

      expect(
        newState.missions.some(mission => mission.id === mockMissionId)
      ).toBeFalsy()
    })
  })
})

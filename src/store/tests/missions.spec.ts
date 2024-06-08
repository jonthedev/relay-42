import { describe, it, expect } from "vitest"
import missionsReducer, {
  type Mission,
  type Missions,
  addMission,
  removeMission,
  selectMissions
} from "@/features/missions/missionsSlice"
import {
  mockInitialMissionsState,
  mockMission,
  mockMissions
} from "./missionsMockData"
import { type RootState } from "@/store/store"

describe("missions slice", () => {
  it("should return the initial missions state", () => {
    const initialState: RootState = {
      missions: mockInitialMissionsState
    }
    const selectedMissions: Missions = selectMissions(initialState)

    expect(selectedMissions).toEqual(mockInitialMissionsState)
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
        missions: [newMission],
        error: null
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

  describe("reducer: editMission", () => {
    it("should handle editing a mission by id", () => {})
  })
})

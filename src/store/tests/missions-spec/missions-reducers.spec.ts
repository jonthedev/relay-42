import missionsReducer, {
  Mission,
  Missions,
  addMission,
  removeMission
} from "@/features/missions/missionsSlice"
import { describe, it, expect } from "vitest"
import {
  mockInitialMissionsState,
  mockMission,
  mockMissions
} from "./missionsMockData"

describe("missions: reducers", () => {
  describe("addMission", () => {
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

  describe("removeMission", () => {
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

  describe("editMission", () => {
    it("should handle editing a mission by id", () => {})
  })
})

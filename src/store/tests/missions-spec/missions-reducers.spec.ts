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
    it("should handle removing a mission", () => {
      const prevMissionsState: Missions = mockMissions

      const stateWithMissionRemoved = missionsReducer(
        prevMissionsState,
        removeMission(mockMission)
      )
      expect(stateWithMissionRemoved.missions).toHaveLength(
        prevMissionsState.missions.length - 1
      )

      expect(
        stateWithMissionRemoved.missions.some(
          mission => mission.id === mockMission.id
        )
      ).toBeFalsy()
    })
  })

  describe("editMission", () => {
    it("should handle editing a mission", () => {})
  })
})

import missionsReducer, {
  Mission,
  Missions,
  addMission,
  editMission,
  removeMission
} from "@/features/missions/missionsSlice"
import { describe, it, expect } from "vitest"
import {
  mockInitialMissionsState,
  mockMission,
  mockMissions
} from "./missionsMockData"
import { findIndexByPredicate } from "@/utils"

//TODO: MAKE THESE REDUCERS MORE GENERIC AS SOME OF THESE COULD APPLY TO OTHER PIECES OF STATE
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
    it("should handle editing a mission", () => {
      const editedMission: Mission = {
        ...mockMission,
        destination: "Sun",
        name: "Solar Plane"
      }

      const stateWithEditedMission = missionsReducer(
        mockMissions,
        editMission(editedMission)
      )

      const index = findIndexByPredicate(
        stateWithEditedMission.missions,
        mission => mission.id === editedMission.id
      )

      expect(index).not.toBe(-1)

      expect(stateWithEditedMission.missions[index]).toEqual(editedMission)
    })
  })
})

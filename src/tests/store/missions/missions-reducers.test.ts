/**
 * Test Suite for Missions Reducers
 * -------------------------------
 *
 * This test suite verifies the behavior of the reducers in the missionsSlice module.
 *
 * It tests addMission, editMission, and removeMission functions against mock initial states
 * and various scenarios.
 */

import missionsReducer, {
  addMission,
  editMission,
  removeMission
} from "@/features/missions/missionsSlice"
import { describe, it, expect } from "vitest"
import {
  mockInitialMissions,
  mockMission,
  mockMissions
} from "./missionsMockData"
import { findIndexByPredicate } from "@/utils"
import { Mission, Missions } from "@/schema"

describe("missions: reducers", () => {
  describe("addMission", () => {
    it("should handle adding a new mission", () => {
      let initialMissions: Missions = mockInitialMissions
      const newMission: Mission = mockMission
      initialMissions = missionsReducer(initialMissions, addMission(newMission))
      expect(initialMissions).toEqual([newMission])
    })
  })

  describe("removeMission", () => {
    it("should handle removing a mission", () => {
      const prevMissionsState: Missions = mockMissions

      const stateWithMissionRemoved = missionsReducer(
        prevMissionsState,
        removeMission(mockMission)
      )
      expect(stateWithMissionRemoved).toHaveLength(prevMissionsState.length - 1)

      expect(
        stateWithMissionRemoved.some(mission => mission.id === mockMission.id)
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
        stateWithEditedMission,
        mission => mission.id === editedMission.id
      )

      expect(index).not.toBe(-1)

      expect(stateWithEditedMission[index]).toEqual(editedMission)
    })
  })
})

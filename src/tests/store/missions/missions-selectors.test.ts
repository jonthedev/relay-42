/**
 * Test Suite for Missions Selectors
 * ---------------------------------
 *
 * This test suite verifies the behavior of selectors in the missionsSlice module.
 * It tests selectMissions & selectMissionById functions.
 * against mock data and initial states.
 */
import {
  selectMission,
  selectMissions
} from "@/features/missions/missionsSlice"
import { describe, expect, it } from "vitest"
import {
  mockMission,
  mockMissionId1,
  mockMissions,
  mockRootStateWithMissions
} from "./missionsMockData"
import { RootState } from "@/store/store"

describe("missions: selectors", () => {
  describe("selectMissions", () => {
    it("should return all missions", () => {
      const state: RootState = mockRootStateWithMissions

      const missions = selectMissions(state)
      expect(missions).toEqual(mockMissions)
    })
  })

  describe("selectMissionById", () => {
    const state: RootState = {
      missions: mockMissions
    }

    it("should handle selecting a mission by id", () => {
      const selectedMission = selectMission(state, mockMissionId1)

      expect(selectMission).toBeDefined()
      expect(selectedMission).toEqual(mockMission)
    })

    it("should return undefined if a mission doesn't exist", () => {
      const selectedMission = selectMission(state, "500")

      expect(selectMission).toBeDefined()
      expect(selectedMission).toBeUndefined()
    })
  })
})

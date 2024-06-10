import {
  selectMission,
  selectMissions,
  selectMissionsError
} from "@/features/missions/missionsSlice"
import { describe, expect, it } from "vitest"
import {
  mockInitialMissionsState,
  mockMission,
  mockMissionsState,
  mockUUID1
} from "./missionsMockData"
import { RootState } from "@/store/store"

describe("missions: selectors", () => {
  describe("selectMissions", () => {
    it("should return all missions", () => {
      const state: RootState = {
        missions: mockMissionsState
      }

      const missions = selectMissions(state)
      expect(missions).toEqual(mockMissionsState)
    })
  })

  describe("selectMissionById", () => {
    const state: RootState = {
      missions: mockMissionsState
    }
    it("should handle selecting a mission by id", () => {
      const selectedMission = selectMission(state, mockUUID1)

      expect(selectMission).toBeDefined()
      expect(selectedMission).toEqual(mockMission)
    })

    it("should return undefined if a mission doesn't exist", () => {
      const selectedMission = selectMission(state, "500")

      expect(selectMission).toBeDefined()
      expect(selectedMission).toBeUndefined()
    })
  })

  describe("selectMissionsError", () => {
    it("should return mission error state", () => {
      const state: RootState = {
        missions: mockInitialMissionsState
      }
      const selectedError = selectMissionsError(state)
      expect(selectedError).toEqual(mockInitialMissionsState.error)
    })
  })
})

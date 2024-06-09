import { selectMissionsError } from "@/features/missions/missionsSlice"
import { describe, expect, it } from "vitest"
import { mockInitialMissionsState } from "./missionsMockData"
import { RootState } from "@/store/store"

//TODO: MAKE THESE SELECTORS MORE GENERIC AS SOME OF THESE COULD APPLY TO OTHER PIECES OF STATE
describe("missions: selectors", () => {
  describe("selectMissions", () => {
    it("should return all missions", () => {})
  })

  describe("selectMissionById", () => {
    it("should handle finding a mission by id", () => {})
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

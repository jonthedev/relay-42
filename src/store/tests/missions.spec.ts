import { describe, it, expect } from "vitest"
import { store } from "@/store/store"
import missionsReducer, {
  type Mission,
  type Missions,
  addMission
} from "@/features/missions/missionsSlice"
import { mockInitialMissionsState, mockMission } from "./missionsMockData"

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
})

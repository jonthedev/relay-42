import { describe, it, expect } from "vitest"
import { store } from "@/store/store"
import missionsReducer, {
  type Mission,
  type Missions,
  addMission
} from "@/features/missions/missionsSlice"

describe("missions slice", () => {
  it("should return the initial missions state", () => {
    const initialState: Missions = {
      missions: []
    }
    expect(store.getState().missions).toEqual(initialState)
  })

  describe("reducer: addMission", () => {
    it("should handle adding a new mission", () => {
      const prevMissionsState: Missions = { missions: [] }
      const newMission: Mission = {
        name: "Expedition 2021-11",
        members: 2,
        destination: "Mars alpha-116",
        departure: { day: "07", month: "05", year: "2023" }
      }
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

import { describe, it, expect } from "vitest"
import {
  type Missions,
  selectMissions
} from "@/features/missions/missionsSlice"
import { mockInitialMissionsState } from "./missionsMockData"
import { type RootState } from "@/store/store"

//TODO: MAKE THESE INITIAL STATE MORE GENERIC AS SOME OF THESE COULD APPLY TO OTHER PIECES OF STATE
describe("missions", () => {
  it("should return the initial state", () => {
    const initialState: RootState = {
      missions: mockInitialMissionsState
    }
    const selectedMissions: Missions = selectMissions(initialState)

    expect(selectedMissions).toEqual(mockInitialMissionsState)
  })
})

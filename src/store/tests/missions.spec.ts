import { describe, it, expect } from "vitest"
import { store } from "@/store/store"
import { MissionsState } from "@/features/missions/missionsSlice"

describe("missions slice", () => {
  it("should return the initial missions state", () => {
    const initialState: MissionsState = {
      missions: []
    }
    expect(store.getState().missions).toEqual(initialState)
  })
})

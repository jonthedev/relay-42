/**
 * Test Suite for Missions Slice
 * -----------------------------
 *
 * This test suite verifies the behavior of the missionsSlice, including selectors,
 * against mock data and initial states.
 */

import { describe, it, expect } from "vitest"
import { selectMissions } from "@/features/missions/missionsSlice"
import { mockInitialMissions } from "./missionsMockData"
import { type RootState } from "@/store/store"
import { Missions } from "@/schema"

describe("missions", () => {
  it("should return the initial state", () => {
    const initialState: RootState = {
      missions: []
    }
    const selectedMissions: Missions = selectMissions(initialState)

    expect(selectedMissions).toEqual(mockInitialMissions)
  })
})

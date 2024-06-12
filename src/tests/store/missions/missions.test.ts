/**
 * Test Suite for Missions Slice
 * -----------------------------
 *
 * This test suite verifies the behavior of the missionsSlice, including selectors,
 * against mock data and initial states.
 */

import { describe, it, expect } from "vitest"
import {
  type Missions,
  selectMissions
} from "@/features/missions/missionsSlice"
import { mockInitialMissionsState } from "./missionsMockData"
import { type RootState } from "@/store/store"

describe("missions", () => {
  it("should return the initial state", () => {
    const initialState: RootState = {
      missions: mockInitialMissionsState
    }
    const selectedMissions: Missions = selectMissions(initialState)

    expect(selectedMissions).toEqual(mockInitialMissionsState)
  })
})

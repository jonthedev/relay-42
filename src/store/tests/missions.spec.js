import { describe, it, expect } from "vitest"
import { store } from "@/store/store.ts"

describe("missions slice", () => {
  it("should return the initial missions state", () => {
    expect(store.getState()).toEqual({
      missions: { missions: [] }
    })
  })
})

/**
 * Constants for Mock Data and Test IDs
 * ------------------------------------
 *
 * This file contains constants used across tests for mock IDs and other test data.
 * Centralizing these constants here helps maintain consistency and ease of updates.
 */

import { type Mission, type Missions } from "@/features/missions/missionsSlice"
import { CrewMember, UUID } from "@/types"

export const mockMissionId1: UUID = "mock-mission-id-1"
export const mockMissionId2: UUID = "mock-mission-id-2"
export const mockMissionId3: UUID = "mock-mission-id-3"

export const mockCrewMember1Id: UUID = "mock-crew-member-id-1"
export const mockCrewMember2Id: UUID = "mock-crew-member-id-2"
export const mockCrewMember3Id: UUID = "mock-crew-member-id-3"
export const mockCrewMember4Id: UUID = "mock-crew-member-id-4"
export const mockCrewMember5Id: UUID = "mock-crew-member-id-5"

/**
 * Usage Notes:
 * ------------
 *
 * - Import these constants into test files to use them for mocking data.
 * - Ensure that these IDs are used consistently across tests for consistency.
 */

export const mockInitialMissionsState: Missions = {
  missions: [],
  error: null
}

export const mockPilotWithMinimumExperience: CrewMember = {
  id: mockCrewMember1Id,
  role: {
    experience: 12
  }
}
export const mockPilotWithoutMinimumExperience: CrewMember = {
  id: mockCrewMember2Id,
  role: {
    experience: 5
  }
}

export const mockEngineer1: CrewMember = {
  id: mockCrewMember3Id,
  role: {
    experience: 5,
    job: "Mechanics"
  }
}

export const mockEngineer2: CrewMember = {
  id: mockCrewMember4Id,
  role: {
    experience: 3,
    job: "Solar Panels"
  }
}

export const mockPassenger: CrewMember = {
  id: mockCrewMember5Id,
  role: {
    age: 34,
    wealth: "High"
  }
}

export const mockCrewMembers1: CrewMember[] = [
  mockEngineer1,
  mockPassenger,
  mockPilotWithoutMinimumExperience
]

export const mockCrewMembers2: CrewMember[] = [
  mockEngineer1,
  mockEngineer2,
  mockPassenger,
  mockPilotWithMinimumExperience
]

export const mockMission: Mission = {
  id: mockMissionId1,
  name: "Expedition 2021-11",
  members: [],
  destination: "Mars alpha-116",
  departure: { day: "07", month: "05", year: "2024" }
}

export const mockMissionsState: Missions = {
  missions: [
    mockMission,
    {
      id: mockMissionId2,
      name: "Mission B",
      members: mockCrewMembers1,
      destination: "Jupiter Outpost",
      departure: { day: "22", month: "10", year: "2023" }
    },
    {
      id: mockMissionId3,
      name: "Mission C",
      members: mockCrewMembers2,
      destination: "Jupiter Outpost",
      departure: { day: "01", month: "07", year: "2024" }
    }
  ],
  error: null
}

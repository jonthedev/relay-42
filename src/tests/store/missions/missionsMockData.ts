/**
 * Constants for Mock Data and Test IDs
 * ------------------------------------
 *
 * This file contains constants used across tests for mock IDs and other test data.
 * Centralizing these constants here helps maintain consistency and ease of updates.
 *
 */

import {
  type UUID,
  type CrewMember,
  type Mission,
  type Missions
} from "@/schema"
import { RootState } from "@/store/store"

export const mockMissionId1: UUID = "123e4567-e89b-12d3-a456-426614174000"
export const mockMissionId2: UUID = "123e4567-e89b-12d3-a456-426614174001"
export const mockMissionId3: UUID = "123e4567-e89b-12d3-a456-426614174002"

export const mockCrewMember1Id: UUID = "123e4567-e89b-12d3-a456-426614174003"
export const mockCrewMember2Id: UUID = "123e4567-e89b-12d3-a456-426614174004"
export const mockCrewMember3Id: UUID = "123e4567-e89b-12d3-a456-426614174005"
export const mockCrewMember4Id: UUID = "123e4567-e89b-12d3-a456-426614174006"
export const mockCrewMember5Id: UUID = "123e4567-e89b-12d3-a456-426614174007"

/**
 * Usage Notes:
 * ------------
 *
 * - Import these constants into test files to use them for mocking data.
 *
 */

export const mockInitialMissions: Missions = []

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
  departure: "07/05/2024"
}

export const mockMissions: Missions = [
  mockMission,
  {
    id: mockMissionId2,
    name: "Mission B",
    members: mockCrewMembers1,
    destination: "Jupiter Outpost",
    departure: "22/10/2023"
  },
  {
    id: mockMissionId3,
    name: "Mission C",
    members: mockCrewMembers2,
    destination: "Jupiter Outpost",
    departure: "01/07/2024"
  }
]

export const mockRootState: RootState = { missions: mockInitialMissions }
export const mockRootStateWithMissions: RootState = { missions: mockMissions }

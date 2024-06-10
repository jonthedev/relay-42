import { type Mission, type Missions } from "@/features/missions/missionsSlice"
import { UUID } from "@/types"

// Predefined mock UUIDs
export const mockUUID1: UUID = "123e4567-e89b-12d3-a456-426614174000"
export const mockUUID2: UUID = "223e4567-e89b-12d3-a456-426614174001"
export const mockUUID3: UUID = "323e4567-e89b-12d3-a456-426614174002"

export const mockInitialMissionsState: Missions = {
  missions: [],
  error: null
}

/*

! TODO Create a members type, Pilot, Engineer & Passenger
! TODO Create a job type, Navigation, Solar panels, Maintenance, Mechanics & Navigation

*/
export const mockMission: Mission = {
  id: mockUUID1,
  name: "Expedition 2021-11",
  members: 2,
  destination: "Mars alpha-116",
  departure: { day: "07", month: "05", year: "2024" }
}

export const mockMissionsState: Missions = {
  missions: [
    mockMission,
    {
      id: mockUUID2,
      name: "Mission B",
      members: 5,
      destination: "Jupiter Outpost",
      departure: { day: "22", month: "10", year: "2023" }
    },
    {
      id: mockUUID3,
      name: "Mission C",
      members: 5,
      destination: "Jupiter Outpost",
      departure: { day: "01", month: "07", year: "2024" }
    }
  ],
  error: null
}

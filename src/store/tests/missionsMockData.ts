import { type Mission, type Missions } from "@/features/missions/missionsSlice" // Adjust import path based on your project structure

export const mockInitialMissionsState: Missions = {
  missions: []
}

export const mockMission: Mission = {
  id: 1,
  name: "Expedition 2021-11",
  members: 2,
  destination: "Mars alpha-116",
  departure: { day: "07", month: "05", year: "2024" }
}

export const mockMissions: Missions = {
  missions: [
    {
      id: 2,
      name: "Mission A",
      members: 3,
      destination: "Moon Base",
      departure: { day: "15", month: "08", year: "2023" }
    },
    {
      id: 3,
      name: "Mission B",
      members: 5,
      destination: "Jupiter Outpost",
      departure: { day: "22", month: "10", year: "2023" }
    }
  ]
}

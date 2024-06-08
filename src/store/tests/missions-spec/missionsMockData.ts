import { type Mission, type Missions } from "@/features/missions/missionsSlice"

export const mockInitialMissionsState: Missions = {
  missions: [],
  error: null
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
    mockMission,
    {
      id: 2,
      name: "Mission B",
      members: 5,
      destination: "Jupiter Outpost",
      departure: { day: "22", month: "10", year: "2023" }
    },
    {
      id: 3,
      name: "Mission C",
      members: 5,
      destination: "Jupiter Outpost",
      departure: { day: "01", month: "07", year: "2024" }
    }
  ],
  error: null
}

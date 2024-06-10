import {
  addMission,
  editMission,
  selectMission,
  selectMissions
} from "@/features/missions/missionsSlice"

import { BtnPrimary } from "./components"
import { mockMission } from "./store/tests/missions-spec/missionsMockData"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"

function App() {
  const { missions } = useAppSelector(selectMissions)
  const mission = useAppSelector(state => selectMission(state, 1))
  const dispatch = useAppDispatch()

  return (
    <>
      <h1>Relay 42</h1>
      <BtnPrimary />
      {missions.map(mission => (
        <p key={mission.id}>{mission.destination}</p>
      ))}
      <button onClick={() => dispatch(addMission(mockMission))}>
        Add Mission
      </button>
      <button
        onClick={() =>
          dispatch(editMission({ ...mockMission, destination: "Earth", id: 1 }))
        }
      >
        Edit Mission
      </button>
      Mission: {mission?.destination}
    </>
  )
}

export default App

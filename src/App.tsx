import { useSelector, useDispatch } from "react-redux"
import {
  addMission,
  editMission,
  selectMission,
  selectMissions
} from "@/features/missions/missionsSlice"

import { BtnPrimary } from "./components"
import { mockMission } from "./store/tests/missions-spec/missionsMockData"
import { RootState } from "./store/store"

function App() {
  const { missions } = useSelector(selectMissions)
  const mission = useSelector((state: RootState) => selectMission(state, 1))
  const dispatch = useDispatch()

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
          dispatch(
            editMission({ ...mockMission, destination: "Earth", id: 200 })
          )
        }
      >
        Edit Mission
      </button>
      Mission: {mission?.id}
    </>
  )
}

export default App

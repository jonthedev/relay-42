import {
  addMission,
  editMission,
  selectMission,
  selectMissions
} from "@/features/missions/missionsSlice"

import { BtnPrimary } from "@/components"
import {
  mockMission,
  mockMissionId1,
  mockMissionsState
} from "@/tests/store/missions/missionsMockData"
import { useAppDispatch, useAppSelector } from "@/store/storeHooks"
import { DataTable } from "@/components/Table/DataTable"
import { columnsMissions } from "@/components/Table/Columns/ColumnsMission"

const Missions = () => {
  const { missions } = useAppSelector(selectMissions)
  const mission = useAppSelector(state => selectMission(state, mockMissionId1))
  const dispatch = useAppDispatch()

  return (
    <>
      <h1>Missions</h1>
      <BtnPrimary />
      {missions.map(mission => (
        <p key={mission.id}>{mission.destination}</p>
      ))}
      <button onClick={() => dispatch(addMission(mockMission))}>
        Add Mission
      </button>
      <button
        onClick={() =>
          dispatch(editMission({ ...mockMission, destination: "Earth" }))
        }
      >
        Edit Mission
      </button>
      Mission: {mission?.destination}
      <DataTable columns={columnsMissions} data={mockMissionsState.missions} />
    </>
  )
}
export default Missions

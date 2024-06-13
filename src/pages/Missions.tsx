import { selectMissions } from "@/features/missions/missionsSlice"

import { useAppSelector } from "@/store/storeHooks"
import { DataTable } from "@/components/Table/DataTable"
import { columnsMissions } from "@/components/Table/Columns/ColumnsMission"
import PageLayout from "./PageLayout"

const Missions = () => {
  const { missions } = useAppSelector(selectMissions)

  return (
    <PageLayout title="Missions">
      <DataTable columns={columnsMissions} data={missions} />
    </PageLayout>
  )
}
export default Missions

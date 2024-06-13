import { selectMissions } from "@/features/missions/missionsSlice"

import { useAppSelector } from "@/store/storeHooks"
import { DataTable } from "@/components/Table/DataTable"
import { columnsMissions } from "@/components/Table/Columns/ColumnsMission"
import { PageLayout } from "@/pages"
import { BtnPrimary } from "@/components"

const Missions = () => {
  const { missions } = useAppSelector(selectMissions)

  return (
    <PageLayout title="Missions">
      <BtnPrimary text="New Mission" />
      <DataTable columns={columnsMissions} data={missions} />
    </PageLayout>
  )
}
export default Missions

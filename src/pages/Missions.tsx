import { selectMissions } from "@/features/missions/missionsSlice"
import { useAppSelector } from "@/store/storeHooks"
import { DataTable } from "@/components/Table/DataTable"
import { columnsMissions } from "@/components/Table/Columns/ColumnsMission"
import { PageLayout } from "@/pages"
import { ButtonLink } from "@/components"

const Missions = () => {
  const { missions } = useAppSelector(selectMissions)

  return (
    <PageLayout title="Missions">
      <ButtonLink text="New Mission" url="/new-mission" />
      <DataTable columns={columnsMissions} data={missions} />
    </PageLayout>
  )
}

export default Missions

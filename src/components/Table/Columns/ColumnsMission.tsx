import { type Mission } from "@/features/missions/missionsSlice"
import { ColumnDef } from "@tanstack/react-table"

export const columnsMissions: ColumnDef<Mission>[] = [
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    accessorKey: "members",
    header: "Members"
  },
  {
    accessorKey: "destination",
    header: "Destination"
  },
  { accessorKey: "departure", header: "Departure" }
]

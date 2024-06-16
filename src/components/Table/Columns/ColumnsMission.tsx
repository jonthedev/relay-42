import { CrewMember, type Mission } from "@/schema"
import { ColumnDef } from "@tanstack/react-table"

export const columnsMissions: ColumnDef<Mission>[] = [
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    accessorKey: "members",
    header: "Members",
    cell: ({ row }) => {
      const membersAmount = row.getValue("members") as CrewMember[]
      return membersAmount.length
    }
  },
  {
    accessorKey: "destination",
    header: "Destination"
  },
  {
    accessorKey: "departure",
    header: "Departure"
  }
]

import { DepartureDate, type Mission } from "@/features/missions/missionsSlice"
import { CrewMember } from "@/types"
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
    header: "Departure",
    cell: ({ row }) => {
      const { day, month, year } = row.getValue("departure") as DepartureDate
      return `${day}/${month}/${year}`
    }
  }
]

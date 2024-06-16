import { z } from "zod"
import { crewMemberSchema } from "./member"
import { uuidSchema } from "./uuid"

export const missionSchema = z.object({
  id: uuidSchema,
  name: z.string(),
  members: z.array(crewMemberSchema),
  destination: z.string(),
  departure: z.string()
})

export const missionsSchema = z.array(missionSchema)

export type Missions = z.infer<typeof missionsSchema>
export type Mission = z.infer<typeof missionSchema>

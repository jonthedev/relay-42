import { z } from "zod"

export const UUIDSchema = z.string().uuid()

export const DepartureDateSchema = z.string()

export const JobSchema = z.enum([
  "Navigation",
  "Solar Panels",
  "Maintenance",
  "Mechanics"
])

export const EngineerSchema = z.object({
  experience: z.number(),
  job: JobSchema
})

export const PilotSchema = z.object({
  experience: z.number()
})

export const PassengerSchema = z.object({
  age: z.number(),
  wealth: z.string()
})

export const RoleSchema = z.union([
  PilotSchema,
  EngineerSchema,
  PassengerSchema
])

export const CrewMemberSchema = z.object({
  id: UUIDSchema,
  role: RoleSchema
})

export const missionSchema = z.object({
  id: UUIDSchema,
  name: z.string().min(2, {
    message: "Mission name must be at least 2 characters."
  }),
  members: z.array(CrewMemberSchema),
  destination: z.string(),
  departure: z.string()
})

export type UUIDSchemaType = z.infer<typeof UUIDSchema>
export type DepartureDateSchemaType = z.infer<typeof DepartureDateSchema>
export type JobSchemaType = z.infer<typeof JobSchema>
export type EngineerSchemaType = z.infer<typeof EngineerSchema>
export type PilotSchemaType = z.infer<typeof PilotSchema>
export type PassengerSchemaType = z.infer<typeof PassengerSchema>
export type RoleSchemaType = z.infer<typeof RoleSchema>
export type CrewMemberSchemaType = z.infer<typeof CrewMemberSchema>
export type MissionSchemaType = z.infer<typeof missionSchema>

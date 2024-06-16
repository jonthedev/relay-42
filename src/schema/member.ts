import { z } from "zod"
import { uuidSchema } from "./uuid"

export const jobSchema = z.enum([
  "Navigation",
  "Solar Panels",
  "Maintenance",
  "Mechanics"
])

export const engineerSchema = z.object({
  experience: z.number(),
  job: jobSchema
})

export const pilotSchema = z.object({
  experience: z.number()
})

export const passengerSchema = z.object({
  age: z.number(),
  wealth: z.string()
})

export const roleSchema = z.union([
  pilotSchema,
  engineerSchema,
  passengerSchema
])

export const crewMemberSchema = z.object({
  id: uuidSchema,
  role: roleSchema
})

export type Job = z.infer<typeof jobSchema>
export type Engineer = z.infer<typeof engineerSchema>
export type Pilot = z.infer<typeof pilotSchema>
export type Passenger = z.infer<typeof passengerSchema>
export type CrewMember = z.infer<typeof crewMemberSchema>
export type Role = z.infer<typeof roleSchema>

/**
 * Crew Member Types
 * -----------------
 *
 * This file contains TypeScript type definitions related to crew members.
 * Types include Engineer, Pilot, Passenger, Role, and CrewMember.
 *
 */

import { UUID } from "@/types"

type Job = "Navigation" | "Solar Panels" | "Maintenance" | "Mechanics"

export type Engineer = {
  experience: number
  job: Job
}

export type Pilot = {
  experience: number
}

export type Passenger = {
  age: number
  wealth: string
}

export type Role = Pilot | Engineer | Passenger

export type CrewMember = {
  id: UUID
  role: Role
}

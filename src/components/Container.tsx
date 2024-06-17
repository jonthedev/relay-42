import { cn } from "@/utils"
import { ReactNode } from "react"

export type ContainerProps = {
  className?: string
  children: ReactNode
}

const Container = ({ className, children }: ContainerProps) => {
  return <div className={cn(className)}>{children}</div>
}
export default Container

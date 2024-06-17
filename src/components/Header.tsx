import { cn } from "@/utils"
import { ReactNode } from "react"

export type HeaderProps = {
  className?: string
  children: ReactNode
}

const Header = ({ className, children }: HeaderProps) => {
  return <header className={cn(className)}>{children}</header>
}
export default Header

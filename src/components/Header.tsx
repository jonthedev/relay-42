import { ReactNode } from "react"

export type HeaderProps = {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return <header>{children}</header>
}
export default Header

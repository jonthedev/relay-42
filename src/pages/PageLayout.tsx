import { ReactNode } from "react"

type PageLayoutProps = {
  title: string
  children: ReactNode
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}
export default PageLayout

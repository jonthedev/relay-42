import { PropsWithChildren } from "react"
import ReduxStoreProvider from "./ReduxStoreProvider"

const Providers = ({ children }: PropsWithChildren) => {
  return <ReduxStoreProvider>{children}</ReduxStoreProvider>
}

export default Providers

import { store } from "@/store/store"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux"

const ReduxStoreProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxStoreProvider

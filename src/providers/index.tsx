/**
 * Providers Component
 * ---------------------------------
 *
 * This is where you wrap all providers, context, redux, auth etc etc.
 *
 */

import { PropsWithChildren } from "react"
import ReduxStoreProvider from "./ReduxStoreProvider"

const Providers = ({ children }: PropsWithChildren) => {
  return <ReduxStoreProvider>{children}</ReduxStoreProvider>
}

export default Providers

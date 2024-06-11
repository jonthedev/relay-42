/**
 * Redux Hooks Configuration
 * --------------------------
 *
 * Configures custom Redux hooks `useAppDispatch` and `useAppSelector` with type safety.
 * Utilizes `useDispatch` and `useSelector` from `react-redux` to create typed versions
 * for `AppDispatch` and `RootState`, respectively.
 */

import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "./store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

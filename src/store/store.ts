/**
 * Redux Store Configuration
 * --------------------------
 *
 * Configures the Redux store using @reduxjs/toolkit's configureStore function.
 * Sets up the missions slice reducer to manage missions-related state.
 * Defines types `RootState` and `AppDispatch` inferred from the store instance.
 *
 */

import { configureStore } from "@reduxjs/toolkit"
import missionsReducer from "@/features/missions/missionsSlice"

export const store = configureStore({
  reducer: {
    missions: missionsReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

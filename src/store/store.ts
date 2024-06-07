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

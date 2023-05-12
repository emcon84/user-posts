import { configureStore } from "@reduxjs/toolkit";
import { photoSlice } from "./photoSlice";
import { usersSlice } from "./usersSlice";
import { postsSlice } from "./postsSlice";

interface RootState {
  photos: ReturnType<typeof photoSlice.reducer>;
  users: ReturnType<typeof usersSlice.reducer>;
  posts: ReturnType<typeof postsSlice.reducer>;
}

export const store = configureStore({
  reducer: {
    photos: photoSlice.reducer,
    users: usersSlice.reducer,
    posts: postsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type { RootState };

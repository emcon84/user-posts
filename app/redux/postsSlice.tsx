import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PostsState {
    loading: boolean;
    posts: Post[];
    error: string | null;
    userId: number | null;
}

const initialState: PostsState = {
    loading: false,
    posts: [],
    error: null,
    userId: null,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPostsStart(state, action: PayloadAction<number>) {
            state.loading = true;
            state.error = null;
            state.userId = action.payload;
        },
        getPostsSuccess(state, action: PayloadAction<Post[]>) {
            state.loading = false;
            state.posts = action.payload;
            state.error = null;
        },
        getPostsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        removePost(state, action: PayloadAction<number>) {
            const postId = action.payload;
            state.posts = state.posts.filter((post) => post.id !== postId);
        },
    },
});

export const { getPostsStart, getPostsSuccess, getPostsFailure, removePost } = postsSlice.actions;

export default postsSlice.reducer;

export const fetchPosts = (userId: number): any => async (dispatch: any) => {
    try {
        dispatch(getPostsStart(userId));
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const data = await response.json();
        dispatch(getPostsSuccess(data));
    } catch (error: any) {
        dispatch(getPostsFailure(error.message));
    }
};

import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';


export interface User {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface UsersState {
    users: User[];
    isLoading: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    loading: false,
    error: null,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersStart(state): void {
            state.isLoading = true;
            state.error = null;
        },
        getUsersSuccess(state, action: PayloadAction<User[]>): void {
            state.users = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        getUsersFailure(state, action: PayloadAction<string>): void {
            state.users = [];
            state.isLoading = false;
            state.error = action.payload;
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
            state.loading = false;
            state.error = null;
        },
        getUsersById: (state, action: PayloadAction<User>) => {
            const { id, first_name, last_name, avatar } = action.payload;
            const user = state.users.find((user) => user.id === id);
            if (user) {
                user.first_name = first_name;
                user.last_name = last_name;
                user.avatar = avatar;
            }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },

        editUser: (state, action: PayloadAction<User>) => {
            const { id, first_name, last_name } = action.payload;
            const userIndex = Array.isArray(state.users) ? state.users.findIndex((user) => user.id === id) : -1;
            if (userIndex !== -1) {
                state.users[userIndex].first_name = first_name;
                state.users[userIndex].last_name = last_name;
            }
        },
    },
});


export const { getUsersStart, getUsersSuccess, getUsersFailure, editUser } = usersSlice.actions;

export const fetchUsers = (): any => async (dispatch: Dispatch): Promise<void> => {
    try {
        dispatch(getUsersStart());
        const response = await fetch('https://reqres.in/api/users');
        const json = await response.json();
        const data = json.data;
        dispatch(getUsersSuccess(data));
    } catch (error: any) {
        dispatch(getUsersFailure(error.message));
    }
};

export default usersSlice.reducer;

import { createSlice, createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface PhotoState {
    photos: Photo[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: PhotoState = {
    photos: [],
    status: "idle",
    error: null,
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
    );
    if (!response.ok) {
        throw new Error("Error fetching photos");
    }
    const data = await response.json();
    return data as Photo[];
});

export const photoSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        getPhotosStart: (state) => {
            state.status = "loading";
        },
        getPhotosSuccess: (state, action) => {
            state.status = "succeeded";
            state.photos = action.payload;
        },
        getPhotosFailure: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
    },
});

export const { getPhotosStart, getPhotosSuccess, getPhotosFailure } =
    photoSlice.actions;


export const fetchAllPhotos = () => async (dispatch: any) => {
    try {
        dispatch(getPhotosStart());
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos"
        );
        if (!response.ok) {
            throw new Error("Error fetching photos");
        }
        const data = await response.json();
        dispatch(getPhotosSuccess(data));
    } catch (error: any) {
        dispatch(getPhotosFailure(error.toString()));
    }
};
export const fetchPhotosByUserId = (id: any): any => async (dispatch: Dispatch): Promise<void> => {
    try {
        dispatch(getPhotosStart(id));
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
        );
        if (!response.ok) {
            throw new Error("Error fetching photos");
        }
        const data = await response.json();
        dispatch(getPhotosSuccess(data));
    } catch (error: any) {
        dispatch(getPhotosFailure(error.toString()));
    }
};

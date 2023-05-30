import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa-logo.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },
    reducers: {
        deleteTuit(state, action) {
            const index = state.tuits
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.tuits.splice(index, 1);
        },

        likeTuit(state, action) {
            switch (action.type) {
                case 'LIKE_POST':
                    return state.map(tuit =>
                        tuit._id === action.payload
                            ? { ...tuit, liked: true, likes: tuit.likes + 1 }
                            : tuit
                    );
                case 'UNLIKE_POST':
                    return state.map(tuit =>
                        tuit._id === action.payload
                            ? { ...tuit, liked: false, likes: tuit.likes - 1 }
                            : tuit
                    );
                default:
                    return state;
            }
        },

        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const { createTuit, deleteTuit, likeTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;


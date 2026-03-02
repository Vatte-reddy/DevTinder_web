import { createSlice } from '@reduxjs/toolkit'


const feedSlice=createSlice({

    name: 'feed',
    // keep a safe default (empty array) so UI code can map over it without checks
    initialState: [],

    reducers: {
        addFeed: (state, action) => {
            return action.payload ?? []
        },
        removeFeed: (state, action) => {
            return []
        },
    },

})

export const {addFeed,removeFeed}=feedSlice.actions
export default feedSlice.reducer
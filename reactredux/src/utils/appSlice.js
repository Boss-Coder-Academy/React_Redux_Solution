// AppSlice.js

import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState : {
       isDescriptionVisible: false, // Add a new state for description visibility
       likeCount: 0
    }, 
    reducers : {
        
        toggleDescription: (state) => { // Toggle description visibility
             state.isDescriptionVisible = !state.isDescriptionVisible;
        },
        incrementLikes(state) {
            state.likeCount += 1;
          },
        
    }
});

export const { toggleDescription, incrementLikes} = appSlice.actions;
export default appSlice.reducer;


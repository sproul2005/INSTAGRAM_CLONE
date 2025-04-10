
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     posts: [], 
//     SelectedPost:null
// };

// const postSlice = createSlice({
//     name: "post",
//     initialState,
//     reducers: {
//         setPosts: (state, action) => {
//             state.posts = action.payload; // This should be used only when fetching all posts
//         },
//         SelectedPost:(state,action)=>{
//             state.setSelectedPost=action.payload;
//         },
//         addPost: (state, action) => {
//             state.posts = [action.payload, ...state.posts]; // Add new post at the beginning
//         }
//     }
// });

// export const { setPosts,SelectedPost ,addPost } = postSlice.actions;
// export default postSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
    name:'post',
    initialState:{
        posts:[],
        selectedPost:null,
    },
    reducers:{
        //actions
        setPosts:(state,action) => {
            state.posts = action.payload;
        },
        setSelectedPost:(state,action) => {
            state.selectedPost = action.payload;
        }
    }
});
export const {setPosts, setSelectedPost} = postSlice.actions;
export default postSlice.reducer;
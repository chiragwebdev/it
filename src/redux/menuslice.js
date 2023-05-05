import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showing: false,
    typeinput: false,
    getdata:[],
}

export const menuslice = createSlice({
    name: 'menuslice',
    initialState,
    reducers: {
        showmenu: (state) =>{
            state.showing = true;
        },
        hidemenu: (state) =>{
            state.showing = false;
        },
        hideshowicon: (state)=>{
            state.typeinput = !state.typeinput;
        },
        senddata: (state, actions)=>{
            state.getdata = actions.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { showmenu, hidemenu, hideshowicon, senddata } = menuslice.actions

export default menuslice.reducer
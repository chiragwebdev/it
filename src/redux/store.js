import { configureStore } from '@reduxjs/toolkit'
import  menusliceReducer  from './menuslice'

export const store = configureStore({
    reducer: {
        menuslice: menusliceReducer,
    },
})

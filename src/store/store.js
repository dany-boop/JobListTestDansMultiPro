import { configureStore } from '@reduxjs/toolkit'
import login from './reducers/login'
import job from './reducers/job'

export default configureStore({
    reducer: {
        login,
        job,
    },
})

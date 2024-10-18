import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Slices/MenuSlice";

const AppStore = configureStore({
    reducer: {
        menu: menuReducer,
    }
});


export default AppStore;
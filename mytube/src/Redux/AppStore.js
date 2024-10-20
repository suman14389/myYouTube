import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Slices/MenuSlice";
import searchSuggestionsReducer from "./Slices/SearchSuggestionsSlice";

const AppStore = configureStore({
    reducer: {
        menu: menuReducer,
        searchSuggestions: searchSuggestionsReducer
    }
});


export default AppStore;
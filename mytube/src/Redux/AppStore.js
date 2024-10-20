import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Slices/MenuSlice";
import searchSuggestionsReducer from "./Slices/SearchSuggestionsSlice";
import commentsReducer from "./Slices/CommentsSlice";

const AppStore = configureStore({
    reducer: {
        menu: menuReducer,
        searchSuggestions: searchSuggestionsReducer,
        comments: commentsReducer
    }
});


export default AppStore;
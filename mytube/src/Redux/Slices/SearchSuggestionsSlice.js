import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionsSlice = createSlice({
    name: 'searchSuggestions',
    initialState: {
        searchSuggestions: {}
    },
    reducers: {
        setSearchSuggestion: (state, action) => {
            const [searchText, searchAPIResponse] = action.payload;
            state.searchSuggestions[searchText] = searchAPIResponse;
        }
    }
})

export const { setSearchSuggestion } = searchSuggestionsSlice.actions;

export default searchSuggestionsSlice.reducer;
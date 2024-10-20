import { createSlice } from "@reduxjs/toolkit";
import { commentsConfigList } from "../../configs/commentsConfigList";
import { addNestedComment } from "../../Utils/helper";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: commentsConfigList
    },
    reducers: {
        addComment: (state, action) => {
            state.comments.unshift(action.payload);
        },
        addReply: (state, action) => {
            const [nestedString, replyText] = action.payload;
            const replyComment = {
                name: "malavika",
                comment: replyText,
                replies: []
            }
            const levelsArray = nestedString.split("_");
            
            addNestedComment(state.comments, levelsArray, replyComment);
        }

    }
})

export const { addComment, addReply } = commentsSlice.actions;

export default commentsSlice.reducer;
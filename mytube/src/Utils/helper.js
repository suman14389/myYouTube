import { randomNames, YOUTUBE_GET_VIDEO_BY_ID, randomcolors } from "./constants";
import { YOUTUBE_API_KEY } from "./secrets";

export const getVideoViewCount = (viewCount) => {
    if(viewCount > 1000000) {
        return (viewCount/1000000).toFixed(1) + 'M';
    } else if(viewCount > 1000) {
        return (viewCount/1000).toFixed(1) + 'K';
    } else {
        return viewCount;
    }
}

export const getVideoTruncatedTitle = (title, maxLength) => {
    if(title.length > maxLength) {
        return title.substring(0, maxLength) + '...';
    } else {
        return title;
    }
}

export const getYouTubeVideoByIdUrl = (id) => {
    return YOUTUBE_GET_VIDEO_BY_ID + id + "&key=" + YOUTUBE_API_KEY;
}

export const addNestedComment = (object, levelsArray, newValue, i=0) => {
    if(i===levelsArray.length-1){
        object[levelsArray[i]].replies.unshift(newValue);
    } else {
        addNestedComment(object[levelsArray[i]].replies, levelsArray, newValue, i+1);
    }
}

export const getRandomNames = () => {
    return randomNames[Math.floor(Math.random() * randomNames.length)];
}

export const getRandomColor = () => {
    return randomcolors[Math.floor(Math.random() * randomcolors.length)];
}

export function getRandomText(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomText = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomText += charset[randomIndex];
    }
  
    return randomText;
}
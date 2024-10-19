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
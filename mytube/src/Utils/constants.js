import { YOUTUBE_API_KEY } from "./secrets";

export const YOUTUBE_VIDEOS_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key="+YOUTUBE_API_KEY;

export const YOUTUBE_GET_VIDEO_BY_ID="https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=";

// export const YOUTUBE_SEARCH_API_URL="https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en&gl=in&gs_rn=64&gs_ri=youtube&tok=6JfnD0-FjG3FvA1jeMbH9w&ds=yt&cp=2&gs_id=30&q=";

// export const YOUTUBE_SEARCH_API_URL ="https://customsearch.googleapis.com/customsearch/v1&q="

export const YOUTUBE_SEARCH_API_URL = "http://suggestqueries.google.com/complete/search?client=firefox&q="


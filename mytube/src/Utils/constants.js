import { YOUTUBE_API_KEY } from "./secrets";

export const YOUTUBE_VIDEOS_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key="+YOUTUBE_API_KEY;

export const YOUTUBE_GET_VIDEO_BY_ID="https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=";

import { HISTORY_ICON, LIKE_ICON, PLAYLIST_ICON, VIDEO_ICON, HOME_ICON, EXPLORE_ICON, USER_ICON_URL, SHOPPING_ICON, NEWS_ICON, GAMING_ICON, SPORTS_ICON, MOVIES_ICON, BEAUTY_ICON, FASHION_ICON } from "../Utils/iconUrls"


export const leftBarConfigList = [
    {
        name: "Home",
        icon: HOME_ICON,
        children: []
    },
    {
        name: "You",
        icon: USER_ICON_URL,
        children: [
            {
                icon: HISTORY_ICON,
                name: "History",
            },
            {
                icon: LIKE_ICON,
                name: "Liked Videos",
            },
            {
                icon: VIDEO_ICON,
                name: "your Videos",
            },
            {
                icon: PLAYLIST_ICON,
                name: "Playlist",
            }, 
        ]
    },
    {
        name: "Subscriptions",
        icon: VIDEO_ICON,
        children: [
            {
                icon: USER_ICON_URL,
                name: "Cricbuzz",
            },
            {
                icon: USER_ICON_URL,
                name: "Maa Music",
            },
            {
                icon: USER_ICON_URL,
                name: "Namaste React",
            },
            {
                icon: USER_ICON_URL,
                name: "Frontend dev",
            },
            {
                icon: USER_ICON_URL,
                name: "Virat Kohli"
            }
        ]
    }, 
    {   
        name: "Explore", 
        icon: EXPLORE_ICON,
        children: [
            {
                icon: SHOPPING_ICON,
                name: "Shopping",
            },
            {
                icon: MOVIES_ICON,
                name: "Movies",
            },
            {
                icon: SPORTS_ICON,
                name: "Sports",
            },
            {
                icon: GAMING_ICON,
                name: "Gaming",
            },
            {
                icon: NEWS_ICON,
                name: "News",
            },
            {
                icon: FASHION_ICON,
                name: "Fashion",
            },
            {
                icon: BEAUTY_ICON,
                name: "Beauty",
            }
        ]
    }, 
]
class Pages {
	HOME = '/'
	TRENDING = '/trending'
	VIDEO_GAMES = '/video-games'

	MY_CHANNEL = '/my-channel'
	SUBSCRIPTIONS = '/subscriptions'
	HISTORY = '/history'
	LIKED_VIDEOS = '/liked-videos'

	FEEDBACK = '/feedback'

	VIDEO = (path: string) => `/v/${path}`
	CHANNEL = (path: string) => `/c/${path}`

	SEARCH = (searchTerm: string) => `/s?term=${searchTerm}`
}

export const PAGES = new Pages()

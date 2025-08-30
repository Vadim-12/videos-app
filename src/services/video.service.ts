import axios from 'axios'

import type { IVideo } from '@/types/video.types'

class VideoService {
	getAll(searchTerm?: string | null) {
		const options = searchTerm
			? {
					params: {
						searchTerm
					}
				}
			: {}
		return axios.get<{ videos: IVideo[] }>('http://localhost:4200/api/videos', options)
	}

	getTrendingVideos() {
		return axios.get<IVideo[]>('http://localhost:4200/api/videos/trending')
	}

	getExploreVideos() {
		return axios.get<{ videos: IVideo[] }>('http://localhost:4200/api/videos/explore')
	}
}

export const videoService = new VideoService()

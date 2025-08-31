import { axiosClassic } from '@/api/axios'

import type { IVideo } from '@/types/video.types'

class VideoService {
	private _VIDEOS_PREFIX = '/videos'

	getAll(searchTerm?: string | null) {
		const options = searchTerm
			? {
					params: {
						searchTerm
					}
				}
			: {}
		return axiosClassic.get<{ videos: IVideo[] }>(this._VIDEOS_PREFIX, options)
	}

	getTrendingVideos() {
		return axiosClassic.get<IVideo[]>(`${this._VIDEOS_PREFIX}/trending`)
	}

	getVideoGames() {
		return axiosClassic.get<{ videos: IVideo[] }>(`${this._VIDEOS_PREFIX}/games`)
	}

	getExploreVideos() {
		return axiosClassic.get<{ videos: IVideo[] }>(`${this._VIDEOS_PREFIX}/explore`)
	}
}

export const videoService = new VideoService()

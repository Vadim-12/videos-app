import { Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/heading'
import { VideoItem } from '@/ui/video-item/video-item'

import { PAGES } from '@/config/public-pages.config'

import { videoService } from '@/services/video.service'

export const revalidate = 60
// export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Video games',
	description: 'Best gaming videos',
	alternates: {
		canonical: PAGES.VIDEO_GAMES
	},
	openGraph: {
		type: 'website',
		url: PAGES.VIDEO_GAMES,
		title: 'Video games'
	}
}

export default async function VideoGamesPage() {
	const { data } = await videoService.getVideoGames()

	return (
		<section>
			<Heading
				isH1
				Icon={Gamepad2}
			>
				Video games
			</Heading>
			<div className='grid-6-cols'>
				{data?.videos?.length ? (
					data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							icon='flame'
						/>
					))
				) : (
					<p>Video games are temporarily unavailable</p>
				)}
			</div>
		</section>
	)
}

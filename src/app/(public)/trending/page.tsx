import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/heading'
import { VideoItem } from '@/ui/video-item/video-item'

import { PAGES } from '@/config/public-pages.config'

import { videoService } from '@/services/video.service'

export const revalidate = 60
// export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Trending video',
	alternates: {
		canonical: PAGES.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PAGES.TRENDING,
		title: 'Trending'
	}
}

export default async function TrendingPage() {
	const { data } = await videoService.getTrendingVideos()

	return (
		<section>
			<Heading
				isH1
				Icon={Flame}
			>
				Trending
			</Heading>
			<div className='grid-6-cols'>
				{data?.length ? (
					data.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							icon='flame'
						/>
					))
				) : (
					<p>Trends are temporarily unavailable</p>
				)}
			</div>
		</section>
	)
}

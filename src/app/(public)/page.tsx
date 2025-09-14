import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/heading'
import { VideoItem } from '@/ui/video-item/video-item'

import { PAGES } from '@/config/public-pages.config'

import { Explore } from './explore/explore'
import { videoService } from '@/services/video.service'

export const revalidate = 60
// export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Home',
	description: 'Best platform for watching videos',
	alternates: {
		canonical: PAGES.HOME
	},
	openGraph: {
		type: 'website',
		url: PAGES.HOME,
		title: 'Home'
	}
}

export default async function Home() {
	const { data } = await videoService.getTrendingVideos()
	const trendingVideos = data.slice(0, 6)

	return (
		<div>
			{trendingVideos?.length && (
				<section className='mb-4'>
					<Heading Icon={Flame}>Trending</Heading>
					<div className='grid grid-cols-6 gap-5'>
						{trendingVideos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								// Icon={Flame}
							/>
						))}
					</div>
				</section>
			)}
			<Explore />
		</div>
	)
}

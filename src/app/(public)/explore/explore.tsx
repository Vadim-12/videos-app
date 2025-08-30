'use client'

import { useQuery } from '@tanstack/react-query'
import { Compass } from 'lucide-react'
import type { FC } from 'react'

import { Heading } from '@/ui/heading'
import { SkeletonLoader } from '@/ui/skeleton-loader'
import { VideoItem } from '@/ui/video-item/video-item'

import { videoService } from '@/services/video.service'

export const Explore: FC = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<section>
			<Heading Icon={Compass}>Explore</Heading>
			<div className='grid grid-cols-6 gap-5'>
				{isLoading ? (
					<SkeletonLoader
						count={6}
						className='h-28 rounded-md'
					/>
				) : (
					!!data?.data.videos.length &&
					data.data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				)}
			</div>
		</section>
	)
}

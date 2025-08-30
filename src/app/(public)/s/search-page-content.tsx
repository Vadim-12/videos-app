'use client'

import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Heading } from '@/ui/heading'
import { SkeletonLoader } from '@/ui/skeleton-loader'
import { VideoItem } from '@/ui/video-item/video-item'

import { videoService } from '@/services/video.service'

export function SearchPageContent() {
	const searchParams = useSearchParams()

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchParams.get('term')],
		queryFn: () => videoService.getAll(searchParams.get('term'))
	})

	return (
		<section>
			<Heading
				isH1
				Icon={Search}
			>
				Search &quot;{searchParams.get('term')}&quot;
			</Heading>
			<div className='grid grid-cols-6 gap-5'>
				{isLoading ? (
					<SkeletonLoader
						count={6}
						className='h-28 rounded-md'
					/>
				) : data?.data.videos.length ? (
					data.data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				) : (
					<p>Videos not found</p>
				)}
			</div>
		</section>
	)
}

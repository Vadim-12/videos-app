import * as m from 'framer-motion/m'
import { type LucideIcon, Verified } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { type FC } from 'react'

import { PAGES } from '@/config/public-pages.config'

import { transformDate } from '@/utils/transform-date'
import { transformViews } from '@/utils/transform-views'

import type { IVideo } from '@/types/video.types'

interface Props {
	video: IVideo
	Icon?: LucideIcon
}

export const VideoItem: FC<Props> = ({ video, Icon }) => {
	return (
		<m.div
			className='text-xs'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			whileHover={{
				scale: 1.05,
				y: -5,
				boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)'
			}}
			transition={{
				type: 'spring',
				stiffness: 300,
				damping: 20
			}}
		>
			<div className='relative mb-1'>
				<Link
					href={PAGES.VIDEO(video.slug)}
					className='rounded-md overflow-hidden inline-block'
				>
					<Image
						src={video.thumbnailUrl}
						width={250}
						height={140}
						alt={video.title}
					/>
				</Link>
				<Link
					href={PAGES.CHANNEL(video.channel.slug)}
					className='rounded-full overflow-hidden inline-block absolute left-2 bottom-3'
				>
					<Image
						src={video.channel.avatarUrl}
						width={35}
						height={35}
						alt={video.channel.name}
					/>
				</Link>
			</div>
			<div className='mb-2 flex justify-between items-center text-gray-400'>
				<div className='flex items-center gap-1'>
					{Icon && (
						<Icon
							size={16}
							className='text-red-600'
						/>
					)}
					<span>{transformViews(video.viewsCount)}</span>
				</div>
				<div>
					<span>{transformDate(video.createdAt)}</span>
				</div>
			</div>
			<div>
				<Link
					href={PAGES.VIDEO(video.slug)}
					className='line-clamp-2 leading-tight'
				>
					{video.title}
				</Link>
			</div>
			<div>
				<Link
					href={PAGES.CHANNEL(video.channel.slug)}
					className='flex items-center gap-1'
				>
					<span className='text-gray-400'>{video.channel.name}</span>
					{video.channel.isVerified && (
						<span>
							{video.channel.isVerified && (
								<Verified
									className='text-green-500'
									size={12}
								/>
							)}
						</span>
					)}
				</Link>
			</div>
		</m.div>
	)
}

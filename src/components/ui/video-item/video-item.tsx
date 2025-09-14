'use client'

import { m } from 'framer-motion'
import { useAnimate } from 'framer-motion/mini'
import { FlameIcon, Gamepad2, Verified } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { type FC, useEffect, useMemo, useState } from 'react'

import { PAGES } from '@/config/public-pages.config'

import { transformDate } from '@/utils/transform-date'
import { transformViews } from '@/utils/transform-views'

import type { IVideo } from '@/types/video.types'

const CustomIcons = {
	flame: FlameIcon,
	game: Gamepad2
}
export type CustomIconType = keyof typeof CustomIcons

interface Props {
	video: IVideo
	icon?: CustomIconType
}

export const VideoItem: FC<Props> = ({ video, icon }) => {
	const [isCardHovered, setIsCardHovered] = useState(false)
	const [isChannelIconHovered, setIsChannelIconHovered] = useState(false)

	const [scope, animate] = useAnimate()

	const ThemeIcon = useMemo(() => icon && CustomIcons[icon], [icon])

	useEffect(() => {
		if (isCardHovered) {
			animate(scope.current, { rotate: '10deg', opacity: 0.4 })
		} else {
			animate(scope.current, { rotate: '0deg', opacity: 1 })
		}
	}, [isCardHovered, scope, animate])

	useEffect(() => {
		if (isChannelIconHovered) {
			animate(scope.current, { rotate: '0deg', opacity: 1 })
		} else {
			animate(scope.current, { rotate: '10deg', opacity: 0.4 })
		}
	}, [isChannelIconHovered, scope, animate])

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
			onHoverStart={() => setIsCardHovered(true)}
			onHoverEnd={() => setIsCardHovered(false)}
		>
			<m.div className='relative mb-1'>
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
					<m.span
						onHoverStart={() => setIsChannelIconHovered(true)}
						onHoverEnd={() => setIsChannelIconHovered(false)}
					>
						<Image
							src={video.channel.avatarUrl}
							width={35}
							height={35}
							alt={video.channel.name}
							ref={scope}
							style={{ rotate: '360deg' }}
						/>
					</m.span>
				</Link>
			</m.div>
			<div className='mb-2 flex justify-between items-center text-gray-400'>
				<div className='flex items-center gap-1'>
					{ThemeIcon && (
						<ThemeIcon
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

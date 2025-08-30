'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { STUDIO_PAGES } from '@/config/studio-pages.config'

export const HeaderProfile: FC = () => {
	return (
		<Link
			href={STUDIO_PAGES.SETTINGS}
			className='shrink-0'
		>
			{/* TODO: auth avatar */}
			<Image
				src={'/uploads/avatars/maddix.jpg'}
				alt={'Maddix'}
				width={35}
				height={35}
				className='rounded-lg'
			/>
		</Link>
	)
}

'use client'

import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import { COLORS } from '@/constants/colors.constants'

import { PAGES } from '@/config/public-pages.config'

interface Props {
	toggleSidebar: () => void
}

export const SidebarHeader: FC<Props> = ({ toggleSidebar }) => {
	return (
		<div className='flex items-center gap-5 mb-10'>
			<button
				className='opacity-80 hover:opacity-100 transition-opacity'
				onClick={toggleSidebar}
			>
				<Menu />
			</button>
			<Link
				href={PAGES.HOME}
				className='flex items-center gap-1.5'
			>
				<SquarePlay
					size={30}
					color={COLORS.primary}
				/>
				<span className='font-medium text-xl'>My video</span>
			</Link>
		</div>
	)
}

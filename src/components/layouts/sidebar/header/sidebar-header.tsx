'use client'

import { Menu } from 'lucide-react'
import type { FC } from 'react'

import { Logo } from './Logo'

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

			<Logo />
		</div>
	)
}

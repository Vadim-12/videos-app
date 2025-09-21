import { SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/colors.constants'

import { PAGES } from '@/config/public-pages.config'

export function Logo() {
	return (
		<Link
			href={PAGES.HOME}
			className='inline-flex items-center gap-1.5'
		>
			<SquarePlay
				size={30}
				color={COLORS.primary}
			/>
			<span className='font-medium text-xl'>My video</span>
		</Link>
	)
}

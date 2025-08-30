import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'

import type { ISidebarItem } from '../sidebar.types'

interface Props {
	item: ISidebarItem
	isActive: boolean
}

export const MenuItem: FC<Props> = ({ item, isActive }) => {
	return (
		<li>
			<Link
				href={item.link}
				className='flex items-center gap-5 py-2 group'
			>
				<item.icon
					className={cn('min-w-6', {
						'transition group-hover:text-primary group-hover:rotate-6': !isActive
					})}
				/>
				<span
					className={cn('border-b', {
						'border-white': isActive,
						'border-transparent': !isActive
					})}
				>
					{item.label}
				</span>
			</Link>
			{item.isBottomBorder && <div className='h-[1.2px] bg-border my-5'></div>}
		</li>
	)
}

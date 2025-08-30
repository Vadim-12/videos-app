import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'
import type { FC } from 'react'

import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './menu-item'

interface Props {
	title?: string
	menu: ISidebarItem[]
}

export const SidebarMenu: FC<Props> = ({ menu, title }) => {
	const pathname = usePathname()

	return (
		<nav>
			{title && <h3 className='opacity-40 uppercase text-xs font-medium mb-4'>{title}</h3>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.label}
						item={menuItem}
						isActive={!!match(menuItem.link)(pathname)}
					/>
				))}
			</ul>
		</nav>
	)
}

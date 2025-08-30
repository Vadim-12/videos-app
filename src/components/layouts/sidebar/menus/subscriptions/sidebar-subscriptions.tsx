import type { FC } from 'react'

import type { ISidebarChannel } from '../../sidebar.types'

import { SubItem } from './sub-item'

export const SidebarSubscriptions: FC = () => {
	const channels: ISidebarChannel[] = []

	return (
		<div>
			<ul>
				{channels.map(subItem => (
					<SubItem
						key={subItem.label}
						item={subItem}
					/>
				))}
			</ul>
		</div>
	)
}

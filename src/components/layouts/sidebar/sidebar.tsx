import type { FC } from 'react'

import { SidebarHeader } from './header/sidebar-header'
import { SidebarMenu } from './menus/sidebar-menu'
import { SidebarSubscriptions } from './menus/subscriptions/sidebar-subscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

interface Props {
	toggleSidebar: () => void
}

export const Sidebar: FC<Props> = ({ toggleSidebar }) => {
	return (
		<aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<SidebarMenu menu={SIDEBAR_DATA} />
			<SidebarSubscriptions />
			<SidebarMenu
				title='More from YouTube'
				menu={MORE_SIDEBAR_DATA}
			/>
		</aside>
	)
}

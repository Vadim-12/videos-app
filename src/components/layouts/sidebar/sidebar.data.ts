import {
	CircleAlert,
	CirclePlay,
	Compass,
	Flame,
	FolderHeart,
	Gamepad2,
	History,
	Settings,
	TvMinimalPlay
} from 'lucide-react'

import { PAGES } from '@/config/public-pages.config'
import { STUDIO_PAGES } from '@/config/studio-pages.config'

import type { ISidebarItem } from './sidebar.types'

export const SIDEBAR_DATA: ISidebarItem[] = [
	{
		icon: Compass,
		label: 'Explore',
		link: PAGES.HOME
	},
	{
		icon: Flame,
		label: 'Trending',
		link: PAGES.TRENDING
	},
	{
		icon: Gamepad2,
		label: 'Video games',
		link: PAGES.VIDEO_GAMES,
		isBottomBorder: true
	},
	{
		icon: TvMinimalPlay,
		label: 'My channel',
		link: PAGES.MY_CHANNEL
	},
	{
		icon: CirclePlay,
		label: 'Subscriptions',
		link: PAGES.SUBSCRIPTIONS
	},
	{
		icon: History,
		label: 'History',
		link: PAGES.HISTORY
	},
	{
		icon: FolderHeart,
		label: 'Liked videos',
		link: PAGES.LIKED_VIDEOS,
		isBottomBorder: true
	}
]

export const MORE_SIDEBAR_DATA: ISidebarItem[] = [
	{
		icon: Settings,
		label: 'Settings',
		link: STUDIO_PAGES.SETTINGS
	},
	{
		icon: CircleAlert,
		label: 'Send feedback',
		link: PAGES.FEEDBACK
	}
]

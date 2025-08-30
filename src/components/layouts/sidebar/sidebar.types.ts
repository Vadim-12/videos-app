import type { LucideIcon } from 'lucide-react'

export interface ISidebarItem {
	icon: LucideIcon
	label: string
	link: string
	isBottomBorder?: boolean
}

export interface ISidebarChannel {
	avatar?: string
	label: string
	link: string
	isLiveNow?: boolean
	isRecentUpload?: boolean
}

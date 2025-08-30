'use client'

import cn from 'clsx'
import { type PropsWithChildren, useCallback, useState } from 'react'

import { Content } from './content/content'
import { Sidebar } from './sidebar/sidebar'

import styles from './layout.module.scss'

export function Layout({ children }: PropsWithChildren) {
	const [isSidebarOpened, setIsSidebarOpened] = useState(true)

	const toggleSidebar = useCallback(() => {
		setIsSidebarOpened(prev => !prev)
	}, [setIsSidebarOpened])

	return (
		<main
			className={cn(
				'flex min-h-screen',
				styles['initial-sidebar'],
				isSidebarOpened ? styles['opened-sidebar'] : styles['hidden-sidebar']
			)}
		>
			<Sidebar toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</main>
	)
}

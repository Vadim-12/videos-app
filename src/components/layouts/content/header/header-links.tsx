import { Bell, LayoutGrid, PlusSquare } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import { STUDIO_PAGES } from '@/config/studio-pages.config'

const linkClassName = 'transition-opacity opacity-50 hover:opacity-100'

export const HeaderLinks: FC = () => {
	return (
		<div className='flex items-center gap-4'>
			<Link
				href={STUDIO_PAGES.UPLOAD_VIDEO}
				className={linkClassName}
			>
				<PlusSquare size={20} />
			</Link>
			<Link
				href={STUDIO_PAGES.HOME}
				className={linkClassName}
			>
				<LayoutGrid size={20} />
			</Link>
			<Link
				href={STUDIO_PAGES.HOME}
				className={linkClassName}
			>
				<Bell size={20} />
			</Link>
		</div>
	)
}

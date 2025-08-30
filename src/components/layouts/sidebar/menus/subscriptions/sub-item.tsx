import { Dot, Radio } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import type { ISidebarChannel } from '../../sidebar.types'

interface Props {
	item: ISidebarChannel
}

export const SubItem: FC<Props> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>
				{item.avatar && (
					<Image
						src={item.avatar}
						alt={item.label}
						width={40}
						height={40}
					/>
				)}
				<span>{item.label}</span>
				{item.isRecentUpload && <Dot color='blue' />}
				{item.isLiveNow && <Radio color='red' />}
			</Link>
		</li>
	)
}

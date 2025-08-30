import type { LucideIcon } from 'lucide-react'
import type { FC, PropsWithChildren } from 'react'

interface Props {
	Icon?: LucideIcon
	isH1?: boolean
}

export const Heading: FC<PropsWithChildren<Props>> = ({ children, Icon, isH1 = false }) => {
	return (
		<div className='flex items-center gap-1.5 opacity-80 mb-3'>
			{Icon && (
				<Icon
					size={20}
					className='text-primary'
				/>
			)}
			{isH1 ? (
				<h1 className='font-semibold text-lg'>{children}</h1>
			) : (
				<h2 className='font-semibold text-lg'>{children}</h2>
			)}
		</div>
	)
}

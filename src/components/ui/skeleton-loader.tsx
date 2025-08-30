import type { CSSProperties, FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	count?: number
	className?: string
	style?: CSSProperties
}

export const SkeletonLoader: FC<Props> = ({ count = 1, className = '', style }) => {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<div
					key={index}
					className={twMerge('bg-slate-800 rounded-sm h-10 mb-2.5 animate-pulse', className)}
					style={style}
				/>
			))}
		</>
	)
}

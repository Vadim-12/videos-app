import { useRouter } from 'next/navigation'
import { type FC, type KeyboardEvent, useState } from 'react'

import { PAGES } from '@/config/public-pages.config'

export const SearchField: FC = () => {
	const router = useRouter()
	const [searchTerm, setSearchTerm] = useState('')

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key != 'Enter') return
		e.preventDefault()

		if (searchTerm.trim()) {
			router.push(PAGES.SEARCH(searchTerm))
		}
	}

	return (
		<div className='w-2/3'>
			<input
				type='search'
				placeholder='Type to search'
				className='py-1.5 px-3 w-full bg-transparent outline-none border-none shadow-none'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	)
}

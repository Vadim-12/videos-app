import { HeaderLinks } from './header-links'
import { HeaderProfile } from './profile/header-profile'
import { SearchField } from './search-field'

export function Header() {
	return (
		<header className='p-layout border-border border-b flex items-center justify-between'>
			<SearchField />
			<div className='flex items-center gap-8'>
				<HeaderLinks />
				<HeaderProfile />
			</div>
		</header>
	)
}

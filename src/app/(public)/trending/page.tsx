import type { Metadata } from 'next'

import { PAGES } from '@/config/public-pages.config'

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Trending video',
	alternates: {
		canonical: PAGES.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PAGES.TRENDING,
		title: 'Trending'
	}
}

export default function TrendingPage() {
	return <div>Trending</div>
}

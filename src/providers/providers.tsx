'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, domAnimation } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

const client = new QueryClient()

export const Providers: FC<PropsWithChildren> = ({ children }) => (
	<QueryClientProvider client={client}>
		<LazyMotion features={domAnimation}>
			{children}
			<Toaster />
		</LazyMotion>
	</QueryClientProvider>
)

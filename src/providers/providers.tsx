'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { FC, PropsWithChildren } from 'react'

const client = new QueryClient()

export const Providers: FC<PropsWithChildren> = ({ children }) => (
	<QueryClientProvider client={client}>{children}</QueryClientProvider>
)

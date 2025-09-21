import type { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren<unknown>) {
	return <div className='w-screen h-screen flex justify-center items-center'>{children}</div>
}

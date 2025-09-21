import cn from 'clsx'
import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	registration: UseFormRegisterReturn
	error?: string
}

export function Field({ label, registration, error, ...props }: Props) {
	return (
		<div className='mb-4'>
			<label>
				<span className='block text-gray-400 font-semibold mt-2'>{label}</span>
				<input
					className={cn(
						'w-full px-3 py-2 border rounded shadow-sm transition-colors focus:outline-none focus:ring-0 focus:border-gray-500 bg-transparent',
						error ? 'border-red-500' : 'border-border'
					)}
					{...registration}
					{...props}
				/>
			</label>
			{error && <p className='text-red-500 text-sm'>{error}</p>}
		</div>
	)
}

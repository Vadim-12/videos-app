'use client'

import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { Logo } from '@/components/layouts/sidebar/header/Logo'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

interface IAuthForm {
	email: string
	password: string
	confirmPassword?: string
}

export function Auth() {
	const [isSignIn, setIsSignIn] = useState(true)
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		if (isSignIn) {
			console.log('sign-in data', data)
		} else {
			console.log('sign-up data', data)
		}
	}

	return (
		<div className='w-full max-w-md mx-8 p-layout border-border border rounded-lg'>
			<div className='text-center mb-1'>
				<Logo />
			</div>
			<div className='flex justify-center mb-6'>
				<button
					type='button'
					className={`px-4 py-2 font-semibold transition-colors ${isSignIn ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
					onClick={() => setIsSignIn(true)}
				>
					Sign in
				</button>
				<button
					type='button'
					className={`px-4 py-2 font-semibold transition-colors ${!isSignIn ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
					onClick={() => setIsSignIn(false)}
				>
					Sign up
				</button>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					label='Email'
					type='email'
					placeholder='Enter email'
					registration={register('email', { required: 'Email is required!' })}
					error={errors.email?.message}
				/>
				<Field
					label='Password'
					type='password'
					placeholder='Enter password'
					registration={register('password', { required: 'Password is required!' })}
					error={errors.password?.message}
				/>
				{!isSignIn && (
					<Field
						label='Password confirmation'
						type='password'
						placeholder='Confirm password'
						registration={register('confirmPassword', {
							required: 'Password confirmation is required!',
							validate: value => value === watch('password') || 'Passwords don`t match'
						})}
						error={errors.confirmPassword?.message}
					/>
				)}
				<div className='text-center mt-6'>
					<Button type='submit'>{isSignIn ? 'Sign in' : 'Sign up'}</Button>
				</div>
			</form>
		</div>
	)
}

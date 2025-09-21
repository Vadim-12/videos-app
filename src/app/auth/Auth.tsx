'use client'

import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { Logo } from '@/components/layouts/sidebar/header/Logo'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

import { useAuthForm } from './useAuthForm'
import type { IAuthForm } from '@/types/auth-form.types'

import styles from './captcha.module.scss'

export function Auth() {
	const [isSignIn, setIsSignIn] = useState(true)
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit, recaptchaRef } = useAuthForm(isSignIn ? 'login' : 'register', reset)

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

				<ReCAPTCHA
					ref={recaptchaRef}
					size='normal'
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
					theme='light'
					className={styles.recaptcha}
				/>

				<div className='text-center mt-6'>
					<Button
						type='submit'
						isLoading={isLoading}
					>
						{isSignIn ? 'Sign in' : 'Sign up'}
					</Button>
				</div>
			</form>
		</div>
	)
}

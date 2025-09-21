import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import type ReCAPTCHA from 'react-google-recaptcha'
import type { SubmitHandler, UseFormReset } from 'react-hook-form'
import toast from 'react-hot-toast'

import { PAGES } from '@/config/public-pages.config'

import { authService } from '@/services/auth.service'
import type { IAuthData, IAuthForm } from '@/types/auth-form.types'

export function useAuthForm(type: 'login' | 'register', reset: UseFormReset<IAuthForm>) {
	const router = useRouter()

	const [isPending, startTransition] = useTransition()

	const recaptchaRef = useRef<ReCAPTCHA>(null)

	const { mutateAsync, isPending: isAuthPending } = useMutation({
		mutationKey: [type],
		mutationFn: (data: IAuthData) => authService.main(type, data, recaptchaRef.current?.getValue())
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		const recaptchaToken = recaptchaRef.current?.getValue()

		if (!recaptchaToken) {
			toast.error('Pass the captcha!', { id: 'recaptcha' })
			return
		}

		toast.promise(
			mutateAsync(data),
			{
				loading: 'Loading...',
				success: () => {
					startTransition(() => {
						reset()
						router.push(PAGES.HOME)
					})

					return 'Successful login!'
				},
				error: e => {
					if (axios.isAxiosError(e)) {
						return e.response?.data?.message
					}
				}
			},
			{ id: 'recaptcha2' }
		)
	}

	const isLoading = isPending || isAuthPending

	return { onSubmit, recaptchaRef, isLoading }
}

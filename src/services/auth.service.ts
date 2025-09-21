import Cookies from 'js-cookie'

import { axiosClassic } from '@/api/axios'

import type { IAuthData } from '@/types/auth-form.types'
import type { IUser } from '@/types/user.types'

export enum TokensEnum {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken'
}

interface IAuthResponse {
	user: IUser
	accessToken: string
}

class AuthService {
	private _AUTH = '/auth'

	async main(type: 'login' | 'register', data: IAuthData, recaptchaToken?: string | null) {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/${type}`, data, {
			headers: {
				recaptcha: recaptchaToken
			}
		})

		if (response.data.accessToken) {
			await this._saveTokenToStorage(response.data.accessToken)
		}

		return response
	}

	/** FOR BROWSWER CALL */
	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/access-token`)

		if (response.data.accessToken) {
			await this._saveTokenToStorage(response.data.accessToken)
		}

		return response
	}

	/** FOR NEXT.JS SERVER CALL */
	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this._AUTH}/access-token`,
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`
				}
			}
		)

		return response
	}

	async logout() {
		const response = await axiosClassic.post<boolean>(`${this._AUTH}/logout`)

		if (response.data) {
			await this._removeTokenFromStorage()
		}

		return response
	}

	private async _saveTokenToStorage(accessToken: string) {
		Cookies.set(TokensEnum.ACCESS_TOKEN, accessToken, {
			domain: 'localhost',
			sameSite: 'strict',
			expires: 1
		})
	}

	private async _removeTokenFromStorage() {
		Cookies.remove(TokensEnum.ACCESS_TOKEN)
	}
}

export const authService = new AuthService()

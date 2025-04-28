// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Agaev NUXT',
			htmlAttrs: {
				lang: 'en',
			},
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
			],
		},
	},

	css: ['@/assets/styles/_Base.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import '/assets/styles/_Mixin.scss';`,
				},
			},
		},
	},

	compatibilityDate: '2025-04-18',
})

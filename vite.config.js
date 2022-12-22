import { sveltekit } from '@sveltejs/kit/vite'
import autoImport from 'sveltekit-autoimport'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		autoImport({
			components: ['./src/features']
		}),
		sveltekit()
	]
}

export default config

import { defineConfig } from 'vite';

export default {
	base: '/Positivus',
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				sourceMap: true,
			},
		},
	},
	build: {
		sourcemap: true,
	},
}
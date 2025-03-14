import { defineConfig } from 'vite';

export default {
	base: '/vite-test-project',
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
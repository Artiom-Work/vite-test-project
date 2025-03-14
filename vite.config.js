import { defineConfig } from 'vite';

export default {
	base: '/vite-test-project',
	css: {
		devSourcemap: true, // Включить source maps для CSS/SCSS в режиме разработки
		preprocessorOptions: {
			scss: {
				sourceMap: true, // Включить source maps для SCSS
			},
		},
	},
	build: {
		sourcemap: true, // Включить source maps для продакшена
	},
}
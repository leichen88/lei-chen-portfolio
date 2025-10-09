import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext',
		minify: 'esbuild',
		cssMinify: true
	},
	optimizeDeps: {
		include: ['three', '@threlte/core', '@threlte/extras']
	},
	server: {
		fs: {
			allow: ['..']
		}
	}
});

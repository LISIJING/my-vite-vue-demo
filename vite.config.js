import { defineConfig } from 'vite';
// import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import path from 'path';

//支持jsx文件的组件
import vueJsx from '@vitejs/plugin-vue-jsx';

import { md2html } from './dist/bundle.js';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		md2html()
		// legacy({
		// 	targets: ['defaults', 'not IE 11']
		// })
	]
	//构建npm库的配置
	// build: {
	// 	lib: {
	// 		entry: path.resolve(__dirname, 'src/main.ts'),
	// 		name: 'MyLib',
	// 		fileName: (format) => `my-lib.${format}.js`
	// 	},
	// 	rollupOptions: {
	// 		// 确保外部化处理那些你不想打包进库的依赖
	// 		external: ['vue'],
	// 		output: {
	// 			// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
	// 			globals: {
	// 				vue: 'Vue'
	// 			}
	// 		}
	// 	}
	// }
});

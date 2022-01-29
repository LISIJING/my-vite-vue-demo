import { createApp } from 'vue';
import App from './App.vue';
//天然支持json
import { age } from './data.json';
console.log(age);
//天然支持ts
import { add } from './add';
console.log(add(1, 1));

import { find } from 'lodash-es';
console.log(find);

import logoUrl from './assets/logo.png';
import logoRawUrl from './assets/logo.png?raw';
console.log(logoUrl);
// (document.getElementById('hero-img') as HTMLImageElement).src = logoUrl;
(document.getElementById('hero-img') as HTMLImageElement).src = logoUrl; // 字符串格式的图片
// console.log(logoRawUrl);

//懒加载引入文件
// const core = import.meta.glob('./core/*.js');
// console.log(core);
// for (const path in core) {
// 	core[path]().then((mod) => {
// 		console.log(path, mod);
// 	});
// }

//直接引入
const core = import.meta.globEager('./core/*.js');
console.log(core);
console.log(core['./core/bar.js'].bar());

createApp(App).mount('#app');

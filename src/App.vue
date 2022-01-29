<script setup lang="ts">
import User from './components/User.jsx';
import './style.less';
import './style.css';
import doc from './components/doc.md';
console.log(doc);
// 自己实现md loader,一个rollup plugin
console.log('hello markdown loader');
</script>

<template>
	<User></User>
	<div class="red">我是字体</div>
	<div class="nav">nav</div>
	<div>app</div>
</template>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	.nav {
		color: green;
	}
}
</style>

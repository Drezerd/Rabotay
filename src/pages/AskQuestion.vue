<template>
	<div class="askQuestion">
		<h2 class="title">Задайте интересующий ваш вопрос и получить ответ в кратчайшие сроки</h2>
		<div class="askQuestion__textarea">
			<textarea required="" type="text" v-model="textarea" />
			<span>Введите интересуеющий вас вопрос</span>
		</div>
		<div class="askQuestion__buttons">
			<button class="btn" @click="textarea = ''">Очистить</button>
			<button class="btn" @click="textarea = ''">Отправить</button>
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";
let textarea = ref("");
</script>

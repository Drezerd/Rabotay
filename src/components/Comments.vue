<template>
	<div class="comments">
		<h2 class="title">{{ text.text }}</h2>
		<p class="text" v-show="text.text == 'Комментарии клиентов сайта Rabotay.uz'">
			Мы ежедневно получаем более тысячи положительных отзывов от пользователей!
		</p>
		<div class="comments__cards">
			<div class="comments__cards_card">
				<div class="comments__cards_card-info">
					<p class="text">Фатима</p>
					<p class="fade">21.07.2023</p>
				</div>
				<p class="text">
					Заказывали уборку после ремонта. Очень довольны результатом! #Чистота и порядок
					#Ответственные работники
				</p>
			</div>
			<div class="comments__cards_card">
				<div class="comments__cards_card-info">
					<p class="text">Татьяна</p>
					<p class="fade">21.07.2023</p>
				</div>
				<p class="text">
					Устранил поломку стиральной машинки быстро и качественно, всем рекомендую.
					#Опрятный вид #Качественная работа
				</p>
			</div>
			<div class="comments__cards_card">
				<div class="comments__cards_card-info">
					<p class="text">Илья</p>
					<p class="fade">21.07.2023</p>
				</div>
				<p class="text">
					Заказывали установку водонагревателя. Работа выполнена на высшем уровне!
					#Быстрое выполнение #Отличное обслуживание
				</p>
			</div>
			<div class="comments__cards_card">
				<div class="comments__cards_card-info">
					<p class="text">Василий</p>
					<p class="fade">21.07.2023</p>
				</div>
				<p class="text">
					Оказали помощь с выбором и установкой кондиционера. Все работает отлично!
					#Квалифицированные #Высококлассное обслуживание
				</p>
			</div>
			<div class="comments__cards_card">
				<div class="comments__cards_card-info">
					<p class="text">Семен</p>
					<p class="fade">21.07.2023</p>
				</div>
				<p class="text">
					Перевозили мебель в новую квартиру. Все мебельные предметы пришли в целости и
					сохранности. #Бережное обращение #Отличная команда
				</p>
			</div>
			<div class="comments__cards_card">
				<div class="comments__cards_card-info">
					<p class="text">Дилшод</p>
					<p class="fade">21.07.2023</p>
				</div>
				<p class="text">
					Собрал комплексный шкаф-купе очень быстро, дешево и качественно! #Точность и
					пунктуальность #Отзывчивый персонал
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const text = defineProps(["text"]);
</script>

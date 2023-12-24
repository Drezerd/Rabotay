<template>
	<div class="order__questions questions">
		<h2 class="title">{{ elem.title.title_ru }}. Ответы на часто задаваемые вопросы</h2>
		<div class="questions__cards">
			<div
				class="questions__cards_card"
				:class="{ active: activeIndex === question.id }"
				@click="toggleActive(question.id)"
				v-for="question in questions"
				:key="question.id"
			>
				<p class="starter">
					{{ question.question }}<img src="@/assets/img/sign.svg" alt="arrow down" />
				</p>
				<div class="smooth__wrapper">
					<p class="text">{{ question.answer }}</p>
				</div>
			</div>
		</div>
		<div class="last__question">
			<p class="text">Появились другие вопросы? Задайте нам их!</p>
			<router-link to="/questions" class="text">Задать вопрос</router-link>
		</div>
	</div>
</template>
<script setup>
import { useJobsData } from "@/stores/jobs.js";
import { ref, watchEffect } from "vue";
const JobStores = useJobsData();
let elem = null;
let activeIndex = ref("");

function getStoredId() {
	let storedData = JSON.parse(localStorage.getItem("jobData"));
	if (JobStores.id == null || JobStores.type == null) {
		JobStores.id = storedData.id;
		JobStores.type = storedData.type;
	}
}

getStoredId();

watchEffect(() => {
	let newId = JobStores.id;
	let newType = JobStores.type;
	localStorage.setItem("jobData", JSON.stringify({ id: newId, type: newType }));
});

JobStores.category.forEach((category) => {
	category.children.forEach((el) => {
		if (JobStores.type == "client") {
			el.children.forEach((el) => {
				if (el.id == JobStores.id) {
					elem = el;
				}
			});
		} else {
			if (el.id == JobStores.id) {
				elem = el;
			}
		}
	});
});

const toggleActive = (index) => {
	if (activeIndex.value === index) {
		activeIndex.value = null;
	} else {
		activeIndex.value = index;
	}
};

let questions = [
	{
		question: `Как заказать услугу: ${elem.title.title_ru} в Ташкенте?`,
		answer: `Чтобы заказать услугу ${elem.title.title_ru} вы можете оставить заявку на сайте Rabotay.uz и ожидать ответа.`,
		id: 1,
	},
	{
		question: `Сколько стоит услуга: ${elem.title.title_ru} в Ташкенте?`,
		answer: `Цены на услуги: ${elem.title.title_ru} в Ташкенте могут составлять от - до - в зависимости от услуги или стоимости часа работ выбранного специалиста.`,
		id: 2,
	},
	{
		question: `Как проверяют специалистов категории: ${elem.title.title_ru} в Ташкенте?`,
		answer: `Каждый специалист категории: ${elem.title.title_ru} в Ташкенте проходит 4-ре этапа проверки: Регистрация в приложении, Тест, Интервью, Проверка документов.`,
		id: 3,
	},
	{
		question: `Как оставить отзыв о работе: ${elem.title.title_ru} в Ташкенте?`,
		answer: `Чтобы оценить работу ${elem.title.title_ru}, войдите в чат со специалистом и нажмите “Оценить” или троеточие в верхней части экрана.`,
		id: 4,
	},
];
</script>

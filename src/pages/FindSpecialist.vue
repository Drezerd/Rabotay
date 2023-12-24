<template>
	<Header :text="[headerh1, p, headerh2, button]" />
	<Categories :texts="mainCategories" :offer="offer" />
	<Offer :text="findJob" />
	<Partnership />
	<Comments :text="text" />
	<Questions :type="'client'" :status="'main'" />
	<Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Categories from "@/components/Categories.vue";
import Partnership from "@/components/Partnership.vue";
import Offer from "@/components/Offer.vue";
import Comments from "@/components/Comments.vue";
import Questions from "@/components/Questions.vue";
import Footer from "@/components/Footer.vue";

//                      DATA NEED TO BE PROPSED IN ORDER TO NOT CREATE 2 SAME COMPONENTS

const headerh1 = "Найдите подходящих работников";
const p =
	"Не тратьте время на долгий и сложный процесс поиска лучшего работника. Доверьтесь нам, и мы поможем вам найти идеального кандидата для успешного развития вашего бизнеса";
const headerh2 = { text: "Как нанять эксперта на Rabotay.uz?" };
const mainCategories = [{ text: "Представленные категории" }];
const offer = [
	"Не нашли подхдящего кондидата?",
	"Закажите нужного мастера!",
	"Создать заказ",
	"spec",
];
const findJob = [
	"Работай с",
	"Проидите регистрацию в Rabotay.uz и начинайте работать, и зарабатывать",
	" Rabotay.uz",
];
const button = ["Найти специалиста"];
const text = "Комментарии клиентов сайта Rabotay.uz";
</script>

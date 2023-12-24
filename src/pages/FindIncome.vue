<template>
	<Header :text="[headerh1, p, headerh2, button]" />
	<Categories :texts="mainCategories" :offer="offer" />
	<Requirements />
	<Offer :text="findJob" />
	<Questions :type="'specialist'" :status="'main'" />
	<Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Categories from "@/components/Categories.vue";
import Offer from "@/components/Offer.vue";
import Questions from "@/components/Questions.vue";
import Footer from "@/components/Footer.vue";
import Requirements from "@/components/Requirements.vue";

//                      DATA NEED TO BE PROPSED IN ORDER TO NOT CREATE 2 SAME COMPONENTS

const headerh1 = "Найдите работу или подработку";
const p =
	"Найдите работу независимо от вашего опыта и профессиональных навыков, у нас всегда найдется подходящее предложение для каждого";
const headerh2 = { text: "Как найти работу", span: "в Ташкенте", text2: "через Rabotay.uz?" };
const mainCategories = [{ text: "Вакансии в", span: "Ташкенте" }];
const offer = [
	"Не нашли подхдящую работу?",
	"Посмотрите больше вакансий!",
	"Показать вакансии",
	"income",
];
const findJob = ["Работа с Rabotay - это ..."];
const button = ["Найти работу"];
</script>

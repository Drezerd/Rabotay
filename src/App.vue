<template>
	<Modal></Modal>
	<!-- <Loader v-if="JobStores.isLoading" /> -->
	<div @click="(isLangModalOpen = false), (isProfileOpen = false)" class="app__content">
		<header class="header" :class="{ burger: isBurgerOpen }">
			<router-link to="/"><img src="@/assets/img/logo.png" alt="company logo" /></router-link>
			<div class="header__nav">
				<router-link @click="isBurgerOpen = false" to="/" class="text"
					>Найти специалиста</router-link
				>
				<router-link @click="isBurgerOpen = false" to="/income" class="text"
					>Найти заработок</router-link
				>
				<router-link
					@click="isBurgerOpen = false"
					to="/jobs"
					class="text"
					:class="{ 'router-link-active': $route.name === 'incomeList' }"
					>Вакансии</router-link
				>
				<router-link @click="isBurgerOpen = false" to="/terms" class="burger__text text"
					>Условия пользования</router-link
				>
				<router-link @click="isBurgerOpen = false" to="/policy" class="burger__text text"
					>Политика конфиденциальности</router-link
				>
			</div>
			<div class="header__info">
				<div class="header__info_lang" :class="{ active: isLangModalOpen }">
					<button
						@click.stop="
							(isLangModalOpen = !isLangModalOpen),
								isProfileOpen == true ? (isProfileOpen = !isProfileOpen) : ''
						"
						:class="{ active: isLangModalOpen }"
						class="btn"
					>
						<!-- second value of click stop is needed to avoid opening of two modals at the same time-->
						{{ currentLang }}
						<img
							:class="{ active: isLangModalOpen }"
							src="@/assets/img/sign.svg"
							alt="arrow down"
						/>
					</button>

					<button
						v-for="lang in langs"
						:key="lang.id"
						:class="{ active: isLangModalOpen, uzb: isUzbOpen }"
						@click="changeCurrentLang(lang)"
						class="header__info_lang-options btn"
						v-show="lang.isActive == false"
					>
						{{ lang.lang }}
					</button>
				</div>
				<router-link to="/signIn" class="btn" @click="isBurgerOpen = false"
					>Войти</router-link
				>
				<div class="profile">
					<a
						class="profile__info btn"
						@click.stop="
							(isProfileOpen = !isProfileOpen),
								isLangModalOpen == true ? (isLangModalOpen = !isLangModalOpen) : ''
						"
						:class="{ active: isProfileOpen }"
					>
						<!-- second value of click stop is needed to avoid opening of two modals at the same time -->
						Профиль<img src="@/assets/img/sign.svg" alt="arrow down"
					/></a>
					<router-link
						to="/account"
						class="profile__info btn"
						v-show="isProfileOpen"
						@click="(isProfileOpen = !isProfileOpen), (isBurgerOpen = false)"
						>Аккаунт</router-link
					>
					<router-link
						to="/requests"
						class="profile__info btn"
						v-show="isProfileOpen"
						@click="(isProfileOpen = !isProfileOpen), (isBurgerOpen = false)"
						>Заявки</router-link
					>
					<router-link
						to="/faq"
						class="profile__info btn"
						v-show="isProfileOpen"
						@click="(isProfileOpen = !isProfileOpen), (isBurgerOpen = false)"
						>Вопросы</router-link
					>
				</div>
			</div>
			<div class="burger" @click="isBurgerOpen = !isBurgerOpen">
				<input
					type="checkbox"
					class="burger__checkbox"
					:class="{ checked: isBurgerOpen }"
				/>
				<label for="checkbox" class="burger__toggle">
					<div class="burger__toggle_bar bar--middle"></div>
					<div class="burger__toggle_bar bar--top"></div>
					<div class="burger__toggle_bar bar--bottom"></div>
				</label>
			</div>
		</header>
		<div class="container">
			<router-view></router-view>
		</div>
		<div class="support">
			<img src="@/assets/img/support.png" alt="support icon" />
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useQuestions } from "@/stores/questions.js";
import { useJobsData } from "@/stores/jobs.js";
import Loader from "@/components/UI/Loader.vue";
const JobStores = useJobsData();
JobStores.getData();
const QuestionStores = useQuestions();
QuestionStores.getQuestions();
let currentLang = ref("");
let isLangModalOpen = ref(false);
let isProfileOpen = ref(false);
let isUzbOpen = ref(false);
let isBurgerOpen = ref(false);

let langs = [
	{
		lang: "RU",
		isActive: true,
	},
	{
		lang: "UZ",
		isActive: false,
	},
	{
		lang: "УЗБ",
		isActive: false,
	},
];

function changeCurrentLang(lang) {
	langs.forEach((lang) => {
		lang.isActive = false;
	});
	lang.isActive = true;
	isLangModalOpen.value = !isLangModalOpen.value;
	findCurrentLang();
}

function findCurrentLang() {
	langs.forEach((lang) => {
		lang.isActive ? (currentLang.value = lang.lang) : "";
		if (currentLang.value == "УЗБ") {
			isUzbOpen.value = true;
		} else {
			isUzbOpen.value = false;
		}
	});
}
findCurrentLang();
</script>

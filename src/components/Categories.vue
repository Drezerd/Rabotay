<template>
	<div class="categories" id="categories">
		<h2 class="title">
			{{ texts[0].text }} <span>{{ texts[0].span }}</span>
		</h2>
		<swiper
			:breakpoints="swiperOptions.breakpoints"
			:slidesPerView="3"
			:spaceBetween="30"
			:grid="{
				rows: 2,
			}"
			:pagination="{
				clickable: true,
			}"
			:modules="modules"
			class="categories__services"
		>
			<swiper-slide v-for="job in JobStores.jobs" :key="job.id">
				<router-link to="/jobs">
					<img :src="job.image" alt="category picture" />
					<p>{{ job.title.title_ru }}</p>
					<div class="apear">
						<p class="text">{{ job.description.desc_ru }}</p>
					</div>
				</router-link>
			</swiper-slide>
			<swiper-slide>
				<h3>{{ props.offer[0] }}</h3>
				<h3>{{ props.offer[1] }}</h3>
				<router-link
					:to="props.offer[3] == 'spec' ? 'createCategory' : '/jobs'"
					class="btn"
					>{{ props.offer[2] }}</router-link
				>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
//                      IMPORTING ESSENTIAL SWIPER SETTINGS AND STYLES

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { ref } from "vue";
import { useJobsData } from "@/stores/jobs.js";
const JobStores = useJobsData();
const modules = ref([Grid, Pagination]);
const props = defineProps(["texts", "offer"]);
//                      BREAKPOINTS FOR SWIPER (CHANGES NUMBER OF SLIDES)     [MORE DATA AVAILABLE IN SWIPER.COM]

let swiperOptions = ref({
	breakpoints: {
		220: {
			slidesPerView: 1,
		},
		831: {
			slidesPerView: 2,
		},
		993: {
			slidesPerView: 2,
		},
		1231: {
			slidesPerView: 3,
		},
	},
});
</script>

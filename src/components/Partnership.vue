<template>
	<section class="partnership">
		<h2 class="title">Работайте в крупнейших компаниях</h2>
		<swiper
			:slidesPerView="6"
			:breakpoints="swiperOptions.breakpoints"
			:autoplay="{
				delay: 1500,
				disableOnInteraction: false,
			}"
			:modules="modules"
		>
			<swiper-slide>
				<img src="@/assets/img/partnership/airways.png" alt="airways icon" />
			</swiper-slide>
			<swiper-slide>
				<img src="@/assets/img/partnership/cococola.png" alt="cococola icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/gm.png" alt="gm icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/lukoil.png" alt="lukoil icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/payme.png" alt="payme icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/samsung.png" alt="samsung icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/toyota.png" alt="toyota icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/uzauto.png" alt="uzauto icon" />
			</swiper-slide>
			<swiper-slide> <img src="@/assets/img/partnership/beeline.png" alt="beeline icon" /></swiper-slide>
			<swiper-slide>
				<img src="@/assets/img/partnership/click.png" alt="click icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/gazprom.png" alt="gazprom icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/hyundai.png" alt="hyundai icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/nestle.png" alt="nestle icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/pochta.png" alt="pochta icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/temir.png" alt="temir icon" />
			</swiper-slide>

			<swiper-slide>
				<img src="@/assets/img/partnership/usel.png" alt="usel icon" />
			</swiper-slide>
		</swiper>
	</section>
</template>

<script setup>
//                      IMPORTING ESSENTION SWIPER SETTINGS AND STYLES

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { ref } from "vue";

const modules = ref([Autoplay]);
//                      BREAKPOINTS FOR SWIPER (CHANGES NUMBER OF SLIDES)

let swiperOptions = ref({
	breakpoints: {
		220: {
			slidesPerView: 1,
		},
		500: {
			slidesPerView: 2,
		},
		700: {
			slidesPerView: 3,
		},
		951: {
			slidesPerView: 4,
		},
		1240: {
			slidesPerView: 5,
		},
	},
});
</script>

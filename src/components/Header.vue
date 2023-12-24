<template>
	<div class="start">
		<div class="start__info">
			<div class="start__info_text">
				<h1 class="title">{{ propTitle.text[0] }} <span class="title">в Ташкентe</span></h1>
				<p class="text">
					{{ propTitle.text[1] }}
				</p>
				<a class="btn" href="#categories">{{ propTitle.text[3][0] }}</a>
			</div>
			<swiper
				:loop="true"
				:spaceBetween="30"
				:centeredSlides="true"
				:slidesperview="1"
				:autoplay="{
					delay: 1500,
					disableOnInteraction: false,
				}"
				:modules="modules"
				class="firstswiper"
			>
				<swiper-slide
					><img src="@/assets/img/software.png" alt="worker photo"
				/></swiper-slide>
				<swiper-slide
					><img src="@/assets/img/firefighter.png" alt="worker photo"
				/></swiper-slide>
				<swiper-slide
					><img src="@/assets/img/engineer.png" alt="worker photo"
				/></swiper-slide>
				<swiper-slide
					><img src="@/assets/img/businessman.png" alt="worker photo"
				/></swiper-slide>
				<swiper-slide
					><img src="@/assets/img/teacher.png" alt="worker photo"
				/></swiper-slide>
				<swiper-slide><img src="@/assets/img/dj.png" alt="worker photo" /></swiper-slide>
				<swiper-slide
					><img src="@/assets/img/greengrocer.png" alt="worker photo"
				/></swiper-slide>
				<swiper-slide
					><img src="@/assets/img/doctor.png" alt="worker photo"
				/></swiper-slide>
				<swiper-slide><img src="@/assets/img/chef.png" alt="worker photo" /></swiper-slide>
				<swiper-slide
					><img src="@/assets/img/policeman.png" alt="worker photo"
				/></swiper-slide>
			</swiper>
		</div>
		<h2 class="title">
			{{ propTitle.text[2].text }} <span>{{ propTitle.text[2].span }}</span>
			{{ propTitle.text[2].text2 }}
		</h2>
		<div class="start__hire">
			<swiper
				:spaceBetween="30"
				:centeredSlides="true"
				:autoplay="{
					delay: 1500,
					disableOnInteraction: false,
				}"
				:pagination="{
					clickable: true,
				}"
				:modules="modules"
			>
				<swiper-slide>
					<div class="start__hire_step">
						<p class="text">1</p>
						<p class="starter">Подайте заявку</p>
						<p class="text">
							Опишите требуемый вид работы, и мы подберем вам специалистов
						</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="start__hire_step">
						<p class="text">2</p>
						<p class="starter">Найдите мастера</p>
						<p class="text">
							Выберите подходящего кандидата на основании цен, анкет и отзывов
						</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="start__hire_step">
						<p class="text">3</p>
						<p class="starter">Напишите отзыв</p>
						<p class="text">
							После завершения работы, обязательно оставьте отзыв специалисту
						</p>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>
<script setup>
//                      IMPORTING ESSENTION SWIPER SETTINGS AND STYLES

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { ref } from "vue";
const modules = ref([Autoplay, Pagination]);
const propTitle = defineProps(["text", "type"]);
</script>

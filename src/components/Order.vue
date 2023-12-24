<template lang="">
	<div class="order">
		<div class="order__info">
			<h2 class="title">
				{{
					JobStores.type == "client"
						? `${elem.title.title_ru} в Ташкенте с отзывами и ценами`
						: `Работа в категории ${elem.title.title_ru} в Ташкенте`
				}}
			</h2>
			<p class="starter">
				{{
					JobStores.type == "client"
						? "Оставьте заявку или выберите специалиста в каталоге"
						: "Начните работать в удобном для вас графике. Станьте высокооплачиваемым специалистом с Rabotay.uz"
				}}
			</p>
			<button class="btn">Заказать</button>
		</div>
	</div>
</template>

<script setup>
import { useJobsData } from "@/stores/jobs.js";
import { watchEffect } from "vue";
const JobStores = useJobsData();
let elem = null;

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
</script>

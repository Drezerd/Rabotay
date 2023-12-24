<template>
	<div class="joblist__nav">
		<div class="joblist__nav_btns">
			<router-link to="jobs" class="btn">Найти специалиста</router-link>
			<router-link to="incomeList" class="btn">Найти заработок</router-link>
		</div>
		<h2 class="title">
			{{
				type.type == "specialist"
					? "Какие услуги вы можете нам предложить?"
					: "Какая услуга вам нужна?"
			}}
		</h2>
		<div
			class="joblist"
			v-for="(job, index) in JobStores.category"
			:key="job.id"
			:class="{ lastJob: isLastJob(index), income: type.type == 'specialist' }"
		>
			<h3 class="starter">{{ job.title.title_ru }}</h3>
			<router-link
				:to="`${type.type == 'specialist' ? `findJob/${job.slug}` : ''}`"
				v-for="job in job.children"
				:key="job.id"
				@click="
					`${
						type.type == 'specialist'
							? `${findItem(job.id, type.type)}`
							: `${toggleActive(job.id)}`
					}`
				"
				class="joblist__content"
				:id="job.slug"
				:class="{ active: activeJob === job.id }"
			>
				<a class="starter"
					>{{ job.title ? job.title.title_ru : "No title yet" }}
					<img src="@/assets/img/sign.svg" alt="arrow down" />
				</a>
				<div class="smooth__wrapper">
					<div class="smooth__wrapper_content">
						<router-link
							class="text"
							@click="findItem(info.id, type.type)"
							:to="`order/${info.slug}`"
							v-for="info in job.children"
							:key="info.id"
							v-if="job.children.length"
						>
							{{ info.title.title_ru }}
						</router-link>
						<a class="text" v-else>No category yet</a>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { useJobsData } from "@/stores/jobs.js";
import { ref } from "vue";
const JobStores = useJobsData();
let activeJob = ref(null);
let type = defineProps(["type"]);
const toggleActive = (index) => (activeJob.value = activeJob.value === index ? null : index);

function findItem(id, type) {
	JobStores.type = type;
	JobStores.category.forEach((category) => {
		category.children.forEach((el) => {
			if (type == "client") {
				el.children.forEach((el) => {
					if (id == el.id) {
						JobStores.id = el.id;
					}
				});
			} else {
				if (id == el.id) {
					JobStores.id = el.id;
				}
			}
		});
	});
}

function isLastJob(index) {
	return index === JobStores.category.length - 1;
}
</script>

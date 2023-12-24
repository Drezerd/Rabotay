<template>
	<div class="questions" id="questions" v-show="!isEmpty">
		<h2 class="title">Часто задаваемые вопросы в сайте Rabotay.uz</h2>
		<div class="questions__cards" v-for="questions in questionList" :key="questions.id">
			<div
				class="questions__cards_card"
				:class="{ active: activeIndex === questions.id }"
				@click="toggleActive(questions.id)"
			>
				<p class="starter">
					{{ questions.question.question_ru
					}}<img src="@/assets/img/sign.svg" alt="arrow down" />
				</p>
				<div class="smooth">
					<div class="smooth__wrapper">
						<p class="text">{{ questions.answer.answer_ru }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="last__question">
			<p class="text">
				{{
					$route.name == "faq"
						? "Появились другие вопросы? Задайте нам их!"
						: "Появились другие вопросы? Посмотрите наш список недавних вопросов!"
				}}
			</p>
			<router-link :to="$route.name == 'faq' ? '/questions' : '/faq'" class="text">{{
				$route.name == "faq" ? "Задать вопрос!" : "Посмотрите"
			}}</router-link>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
const activeIndex = ref(null);
import { useQuestions } from "@/stores/questions.js";
let QuestionStores = useQuestions();
const { type, status } = defineProps(["type", "status"]);

let isEmpty = ref(true);
let questionList = [];

QuestionStores.questions.forEach((el) => {
	if (el.parent_status == type) {
		isEmpty.value = false;
	}
	if (type == el.parent_status && status == el.status) {
		questionList.push(el);
	}
});

//                      FUNCTION THAT TOGGLES CLASS FOR THE CLICKED ITEM

const toggleActive = (index) => (activeIndex.value = activeIndex.value === index ? null : index);
</script>

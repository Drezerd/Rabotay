import { defineStore } from "pinia";
import axios from "axios";

//                      GET QUESTIONS

export const useQuestions = defineStore("questions", {
	state: () => ({
		questions: [],
	}),
	actions: {
		async getQuestions() {
			try {
				const response = await axios.get(
					"https://management.rabotay.uz/api/v1/eav/question/list/"
				);
				this.questions = response.data.results;
			} catch (error) {
				console.log(error, "ERROR occured during getting questions");
			}
		},
	},
});

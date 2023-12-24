import { defineStore } from "pinia";
import axios from "axios";

export const useJobsData = defineStore("jobsInfo", {
	state: () => ({
		jobs: [],
		category: [],
		isLoading: true,
		id: null,
		sign: null,
		type: null,
	}),
	actions: {
		async getData() {
			try {
				const response = await axios.get(
					`https://management.rabotay.uz/api/v1/category/list/`
				);
				this.jobs = response.data;
				this.getInfo();
			} catch (error) {
				console.log(error, "ERROR occurred during getting data about jobs");
			}
		},

		async getInfo() {
			try {
				for (const elem of this.jobs) {
					const response = await axios.get(
						`https://management.rabotay.uz/api/v1/category/info/${elem.slug}`
					);
					this.category.push(response.data);
				}
				this.isLoading = false;
			} catch (error) {
				console.log(error, "ERROR occurred during getting more information about jobs");
			}
		},
	},
});

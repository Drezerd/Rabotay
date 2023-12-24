import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/FindSpecialist.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/income",
			name: "income",
			component: () => import("@/pages/FindIncome.vue"),
		},
		{
			path: "/incomeList",
			name: "incomeList",
			component: () => import("@/pages/IncomeList.vue"),
		},
		{
			path: "/jobs",
			name: "jobs",
			component: () => import("@/pages/Jobs.vue"),
		},
		{
			path: "/policy",
			name: "plicy",
			component: () => import("@/pages/Policy.vue"),
		},
		{
			path: "/terms",
			name: "terms",
			component: () => import("@/pages/TermsOfUse.vue"),
		},
		{
			path: "/signIn",
			name: "signIn",
			component: () => import("@/pages/Registration.vue"),
		},
		{
			path: "/signUp",
			name: "signUp",
			component: () => import("@/pages/Registration.vue"),
		},
		{
			path: "/questions",
			name: "questions",
			component: () => import("@/pages/Askquestion.vue"),
		},
		{
			path: "/faq",
			name: "faq",
			component: () => import("@/pages/FAQ.vue"),
		},
		{
			path: "/account",
			name: "account",
			component: () => import("@/pages/Account.vue"),
		},
		{
			path: "/order/:id",
			name: "order",
			component: () => import("@/pages/MakeOrder.vue"),
		},
		{
			path: "/findJob/:id",
			name: "findJob",
			component: () => import("@/pages/MakeOrder.vue"),
		},
		{
			path: "/requests",
			name: "requests",
			component: () => import("@/pages/Requests.vue"),
		},
		{
			path: "/changePassword",
			name: "changePassword",
			component: () => import("@/pages/ChangePassword.vue"),
		},
		{
			path: "/changePassword/code",
			name: "changePasswordcode",
			component: () => import("@/pages/ChangePassword.vue"),
		},
		{
			path: "/createCategory",
			name: "createCategory",
			component: () => import("@/pages/CreateCategory.vue"),
		},
	],
});

export default router;

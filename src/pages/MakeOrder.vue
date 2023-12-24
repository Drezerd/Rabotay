<template>
	<Order />
	<Catalog v-if="JobStores.type == 'client'" />
	<Comments v-else :text="text" />
	<OrderQuestions />
	<Footer />
</template>
<script setup>
const JobStores = useJobsData();
import Catalog from "@/components/Catalog.vue";
import Order from "@/components/Order.vue";
import OrderQuestions from "@/components/OrderQuestions.vue";
import Footer from "@/components/Footer.vue";
import Comments from "@/components/Comments.vue";
import { useJobsData } from "@/stores/jobs.js";
const text = "Последние отзывы";
</script>

<template>
	<JobList :type="'client'"/>
	<Questions :status="'category'" :type="'client'" />
	<Footer />
</template>
<script setup>
import JobList from "@/components/JobList.vue";
import Questions from "@/components/Questions.vue";
import Footer from "@/components/Footer.vue";
</script>

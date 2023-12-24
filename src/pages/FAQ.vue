<template>
	<div class="faq">
		<Questions :type="'simple'" :status="'faq'" />
		<Footer />
	</div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import Questions from "@/components/Questions.vue";
</script>

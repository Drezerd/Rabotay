<template>
	<div
		:style="{ backgroundColor: JobStores.type === 'error' ? 'red' : 'green' }"
		class="error"
		:class="{ active: JobStores.isActive }"
	>
		<p class="text">{{ JobStores.text }}</p>
	</div>
</template>

<script setup>
import { useModalData } from "@/stores/modal.js";
const JobStores = useModalData();
</script>

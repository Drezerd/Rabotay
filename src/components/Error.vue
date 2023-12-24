<template>
	<div
		:style="{ backgroundColor: props.type === 'error' ? 'red' : 'green' }"
		class="error"
		:class="{ active: props.text }"
	>
		<p class="text">{{ text }}</p>
	</div>
</template>

<script setup>
const props = defineProps(["text", "type"]);

</script>

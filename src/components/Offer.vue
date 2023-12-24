<template>
	<section class="offer">
		<h2 class="title">
			{{ props.text[0] }}<span>{{ props.text[2] }}</span>
		</h2>
		<p class="text">{{ props.text[1] }}</p>
		<div class="offer__info">
			<div class="offer__info_card">
				<img src="@/assets/img/calendar.png" alt="calendar icon" />
				<p class="starter">Бесплатный период</p>
				<p class="text">
					Для всех новых специалистов Rabotay.uz дает бесплатный период попробовать сервис
				</p>
			</div>
			<div class="offer__info_card">
				<img src="@/assets/img/comission.png" alt="commission icon" />
				<p class="starter">Без комиссии</p>
				<p class="text">
					Мы не берем проценты с заказов, профессионалы оплачивают лишь доступ к
					определённым категориям
				</p>
			</div>
			<div class="offer__info_card">
				<img src="@/assets/img/free.png" alt="free icon" />
				<p class="starter">Бесплатная реклама</p>
				<p class="text">
					Используйте свою анкету как собственный сайт с отзывами потребителей, которые
					послужат рекламой ради вас
				</p>
			</div>
			<div class="offer__info_card">
				<img src="@/assets/img/income.png" alt="income icon" />
				<p class="starter">Высокий доход</p>
				<p class="text">
					Профессионалы, имеющие хорошие навыки работы имеют шанс выйти на высокий и
					стабильный доход
				</p>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps(["text"]);
</script>

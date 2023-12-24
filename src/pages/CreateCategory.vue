<template>
	<div class="createCategory">
		<div class="createCategory__task">
			<p class="title">Что нужно сделать?</p>
			<div class="askQuestion__textarea">
				<textarea required="" type="text" v-model="desc" />
				<span>Опишите задание</span>
			</div>
		</div>
		<div class="createCategory__num">
			<p class="title">Введите номер для связи</p>
			<div class="globalInput">
				<input required="required" type="tel" :maxlength="19" v-model="phoneNumber" />
				<span>Введите номер</span>
			</div>
		</div>
		<div class="createCategory__adres">
			<p class="title">Когда и где начать работу?</p>
			<div class="createCategory__adres_inputs">
				<div class="createCategory__adres_inputs-date">
					<div class="globalInput">
						<input required="required" type="date" :maxlength="16" v-model="date" />
					</div>
					<div class="globalInput">
						<input required="required" type="time" :maxlength="16" v-model="time" />
					</div>
				</div>
				<div class="globalInput">
					<input required="required" type="text" :maxlength="50" v-model="adress" />
					<span>Укажите адрес</span>
				</div>
			</div>
		</div>
		<div class="createCategory__price">
			<p class="title">Сколько вы готовы заплатить</p>
			<div class="createCategory__price_inputs">
				<div class="globalInput">
					<input required="required" type="text" :maxlength="16" v-model="from" />
					<span>От</span>
				</div>
				<div class="globalInput">
					<input required="required" type="text" :maxlength="16" v-model="to" />
					<span>До</span>
				</div>
			</div>
		</div>
		<div class="createCategory__photo">
			<p class="title createCategory__photo_title">
				Добавить фото места работы<span class="text"
					>(Нажмите на ненужное фото, чтобы удалить его)</span
				>
			</p>
			<div class="createCategory__imgInput">
				<label for="img-input">
					<img v-lazy alt="default image" />
				</label>
				<img
					v-for="imgSrc in images"
					:key="imgSrc"
					:src="imgSrc"
					alt="uploaded photo"
					@click="delImg(imgSrc)"
				/>
				<input
					type="file"
					class="imgInput__input"
					accept="image/jpeg, image/png, image/jpg"
					id="img-input"
					@change="changePhotos"
				/>
			</div>
		</div>
		<button class="btn" @click="isFilled">Опубликовать</button>
	</div>
	<Footer />
</template>

<script setup>
import { ref, watch } from "vue";
import Footer from "@/components/Footer.vue";
import { useModalData } from "@/stores/modal.js";
const images = ref([]);
const adress = ref("");
const date = ref("");
const desc = ref("");
const from = ref("");
const time = ref("");
const to = ref("");
const Modal = useModalData();
const phoneNumber = ref("+998 (");
import router from "@/router";

watch(phoneNumber, (newValue, oldValue) => {
	const numericValue = newValue.replace(/[^\d+ ()-]/g, "");

	phoneNumber.value = numericValue;

	if (newValue !== oldValue && numericValue.length < 6) {
		phoneNumber.value = oldValue;
	}

	if (oldValue.length < newValue.length) {
		2;
		if (numericValue.length === 8) {
			const difference = newValue.slice(oldValue.length);
			phoneNumber.value = `${oldValue}${difference}) `;
		}
		if (numericValue.length === 14 || numericValue.length === 17) {
			const difference = newValue.slice(oldValue.length);
			phoneNumber.value = `${oldValue}-${difference}`;
		}
	}
});

const changePhotos = (event) => {
	const files = event.target.files;
	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const imgSrc = URL.createObjectURL(file);
		images.value.push(imgSrc);
		if (!Modal.isActive) {
			Modal.activateModal("Картинка успешно добавлена!", "success");
		}
	}
};

function delImg(id) {
	images.value = images.value.filter((imgSrc) => imgSrc !== id);
	if (!Modal.isActive) {
		Modal.activateModal("Картинка успешно удалена!", "error");
	}
}
function isFilled() {
	if (!Modal.isActive) {
		if (desc.value === "") {
			Modal.activateModal("Пожалуйста, опишите задание!", "error");
		} else if (phoneNumber.value.length < 19) {
			Modal.activateModal("Пожалуйста, введите свой номер телефона!", "error");
		} else if (date.value === "") {
			Modal.activateModal("Введите дату начала работы!", "error");
		} else if (time.value === "") {
			Modal.activateModal("Введите время начала работы!", "error");
		} else if (adress.value === "") {
			Modal.activateModal("Введите свой адрес!", "error");
		} else if ((from.value, to.value === "")) {
			Modal.activateModal("Введите, сколько вы готовы заплатить!", "error");
		} else {
			Modal.activateModal("Заявка успешно создана!", "success");
			router.push("/");
		}
	}
}
</script>

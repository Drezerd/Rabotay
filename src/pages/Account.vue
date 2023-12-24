<template>
	<div class="account">
		<div class="account__modal" v-show="isModalOpen" @click="isFilled">
			<div class="account__modal_info" @click.stop v-if="isModalMain">
				<div class="globalInput">
					<input required="required" type="text" :maxlength="16" v-model="name" />
					<span>Имя:</span>
				</div>
				<div class="globalInput">
					<input required="" type="text" v-model="surname" />
					<span>Фамилия:</span>
				</div>

				<div class="globalInput">
					<input required="" type="text" v-model="age" />
					<span>Возраст:</span>
				</div>
				<div class="globalInput">
					<input required="" type="text" v-model="mail" />
					<span>Mail:</span>
				</div>
				<label for="img-input" class="btn">Изменить фото</label>
				<router-link to="/changePassword" class="btn">Изменить пароль</router-link>
				<div class="account__modal_info-btns">
					<button class="btn" @click="isModalOpen = false">Отменить</button>
					<button class="btn" @click="isFilled">Сохранить</button>
				</div>
			</div>
			<div class="account__modal_info" @click.stop v-else>
				<div class="askQuestion__textarea">
					<textarea required="" type="text" v-model="info" />
					<span>{{ text }}</span>
				</div>
				<div class="account__modal_info-btns">
					<button class="btn" @click="isModalOpen = false">Отменить</button>
					<button class="btn" @click="isFilled">Сохранить</button>
				</div>
			</div>
		</div>
		<div class="account__info">
			<div class="account__info_imgInput">
				<img v-lazy="image" alt="default image" class="imgInput__img" />
				<input
					type="file"
					class="imgInput__input"
					accept="image/jpeg, image/png, image/jpg"
					id="img-input"
					@change="changePhoto"
				/>
				<p class="text">
					Абдуллаев Тимур <span class="fade">40 лет - в Rabotay 5 лет</span>
				</p>
				<button
					class="btn"
					@click.stop="(isModalOpen = true), (isModalMain = true)"
					v-show="$route.name === 'account'"
				>
					Изменить
				</button>
			</div>
			<div class="account__info_details">
				<p class="text">Номер: +998 (99) 999-99-99</p>
				<p class="text">Mail: {{ mail }}</p>
				<p class="text">Опыт работы: 3 года</p>
				<p class="text">Пароль: ********</p>
				<p class="text">Рейтинг: 4.6</p>
				<p class="text">Завершено работ: 12</p>
			</div>
		</div>
		<div class="account__desc">
			<div class="account__desc_info">
				<p class="starter">
					О себе:
					<span
						class="text"
						@click="changeText('Расскажите о себе', 'about')"
						v-show="$route.name === 'account'"
						>Изменить</span
					>
				</p>
				<p class="text">{{ info }}</p>
			</div>
			<div class="account__desc_info">
				<p class="starter">
					Образование и навыки:
					<span
						class="text"
						@click="changeText('Опишите образование и навыки', 'info')"
						v-show="$route.name === 'account'"
						>Изменить</span
					>
				</p>
				<p class="text">
					{{ info }}
				</p>
			</div>
		</div>
		<!-- Отзывы -->
		<!-- Недавние жалобы -->
	</div>
	<Footer />
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { useModalData } from "@/stores/modal.js";
const Modal = useModalData();
const name = ref("");
const surname = ref("");
const text = ref("");
const age = ref("");
const mail = ref("aslantimurov@gmail.com");
const info = ref(
	"Мастер на все руки, умею собирать мебель и сваривать металлические пренадлежностиМастер на все руки, умею собирать мебель и сваривать металлические"
);
const image = ref(null);
const isModalOpen = ref(false);
const isModalMain = ref(false);

const changePhoto = (event) => {
	const file = event.target.files[0];
	image.value = URL.createObjectURL(file);
	if (!Modal.isActive) {
		Modal.activateModal("Картинка успешно изменена!", "success");
	}
};

function isFilled() {
	if (!Modal.isActive) {
		if (isModalMain.value === true) {
			if (name.value && age.value && mail.value && surname.value !== "") {
				isModalOpen.value = false;
				if (!Modal.isActive) {
					Modal.activateModal("Изменения успешно сохранены!", "success");
				}
			}
		} else {
			if (info.value.length > 30) {
				isModalOpen.value = false;
				if (!Modal.isActive) {
					Modal.activateModal("Изменения успешно сохранены!", "success");
				}
			} else {
				Modal.activateModal("Описание должно содержать больше 30 символов!", "error");
			}
		}
	}
}

function changeText(arg, type) {
	isModalOpen.value = true;
	isModalMain.value = false;
	text.value = arg;
}
</script>

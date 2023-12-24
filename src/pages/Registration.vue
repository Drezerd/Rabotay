<template>
  <div class="registration">
    <div class="registration__content">
      <h2 class="title">
        {{
          $route.name == "signIn"
            ? "Ввойдите в свой аккаунт и продолжите свою профессиональную деятельность"
            : "Создайте аккаунт в Rabotay.uz и увеличьте свои шансы на нахождение работы"
        }}
      </h2>
      <div class="registration__content-inputs">
        <div class="globalInput">
          <input
            required="required"
            type="tel"
            limit="19"
            v-model="phoneNumber"
          />
          <span>Введите номер</span>
        </div>
        <div class="globalInput">
          <input
            required="required"
            type="text"
            limit="19"
            v-model="password"
          />
          <span>Введите пароль аккаунта</span>
        </div>
        <button class="btn" @click="isFilled" to="">
          {{ $route.name == "signUp" ? "Зарегистрироваться" : "Войти" }}
        </button>
      </div>
      <div class="registration__content-text">
        <router-link
          :to="`${$route.name == 'signIn' ? 'signUp' : 'signIn'}`"
          class="text"
        >
          {{
            $route.name == "signIn"
              ? "Еще нету аккаунта?"
              : "Уже есть аккаунт? "
          }}
          <span class="text">
            {{ $route.name == "signIn" ? "Зарегистрироваться" : "Войти" }}
          </span>
        </router-link>
        <router-link
          v-show="$route.name == 'signIn'"
          to="changePassword"
          class="text"
          >Забыли пароль?
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import router from "@/router";
import { useModalData } from "@/stores/modal.js";
const Modal = useModalData();
const password = ref("");
const phoneNumber = ref("+998 (");
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

function isFilled() {
  if (!Modal.isActive) {
    if (phoneNumber.value.length === 19 && password.value.length >= 8) {
      Modal.activateModal(
        `${
          router.currentRoute._value.name == "signIn"
            ? "Вы успешно зарегистрированны"
            : "Вы успешно вошли в свой аккаунт"
        }`,
        "success"
      );
      router.push("/");
    }
    if (phoneNumber.value.length < 19 && password.value.length < 8) {
      Modal.activateModal(
        "Пожалуйста заполните полностью все поля для ввода",
        "error"
      );
    } else if (password.value.length < 8) {
      Modal.activateModal("Пароль неверный", "error");
    }
  }
}
</script>

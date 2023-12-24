<template>
  <section class="changePassword">
    <h2 class="title">
      {{
        $route.name == "changePassword"
          ? "Введите номер вашего телефона ниже, чтобы получить на него код подтверждения для изменения пароля вашего аккаунта"
          : "Смс-подтверждение"
      }}
    </h2>
    <p class="text" v-show="$route.name == 'changePasswordcode'">
      На ваш номер был отправлен смс-код, пожалуйста введите его, чтобы
      подтвердить ваш номер телефона
    </p>
    <div class="globalInput">
      <input
        v-if="$route.name == 'changePassword'"
        required="required"
        type="tel"
        :maxlength="19"
        v-model="phoneNumber"
      />
      <input
        v-else
        required="required"
        type="text"
        :maxlength="6"
        v-model="code"
      />
      <span>{{
        $route.name == "changePassword"
          ? "Введите ваш номер"
          : "Введите смс-код"
      }}</span>
    </div>
    <router-link to="" class="btn" @click="isFilled">
      {{ $route.name == "changePassword" ? "Отправить код" : "Продолжить" }}
    </router-link>
    <div class="changePassword-text">
      <p
        class="text"
        v-show="$route.name == 'changePasswordcode'"
        @click="isFilled(true)"
      >
        Отправить код повторно
      </p>
      <router-link
        :to="$route.name == 'changePassword' ? '/signIn' : '/changePassword'"
        class="text"
        >Назад</router-link
      >
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { useModalData } from "@/stores/modal.js";
import router from "@/router";
const Modal = useModalData();
const code = ref("");
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
function isFilled(again) {
  if (!Modal.isActive) {
    if (again === true) {
      Modal.activateModal("Код был отправлен повторно", "success");
    }
    if (router.currentRoute._value.name == "changePassword") {
      if (phoneNumber.value.length < 19) {
        Modal.activateModal("Введите ваш полный номер телефона", "error");
      } else if (phoneNumber.value.length === 19) {
        Modal.isInputEmpty = true;
        router.push("/changePassword/code");
      }
    } else {
      if (code.value.length < 6) {
        Modal.activateModal("Введен неправильный код", "error");
      } else if (code.value.length === 6) {
        Modal.activateModal("Успешно!", "success");
      }
    }
  }
}
</script>

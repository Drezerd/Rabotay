<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__logo">
        <router-link class="text" to="/"
          ><img src="@/assets/img/logo.png" alt="company logo"
        /></router-link>
        <p class="text">
          При использовании любых материалов ссылка на сайт Rabotay.uz
          обязательна
        </p>
      </div>
      <div class="footer__info">
        <router-link to="/signIn" class="text">Войти в аккаунт</router-link>
        <router-link to="/terms" class="text"
          >Условия использования</router-link
        >
        <router-link to="/jobs" class="text">Список работ</router-link>
        <router-link to="/policy" class="text"
          >Политика конфиденциальности</router-link
        >
      </div>
      <div class="footer__media">
        <p class="text">Мы в соц-сетях</p>
        <div class="footer__media_examples">
          <a href="#@!"
            ><img src="@/assets/img/telegram.svg" alt="telegram icon"
          /></a>
          <a href="#@!"
            ><img src="@/assets/img/instagram.svg" alt="instagram icon"
          /></a>
          <a href="#@!"><img src="@/assets/img/youtube.svg" alt="youtube icon" /></a>
          <a href="#@!"
            ><img src="@/assets/img/facebook.svg" alt="facebook icon"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

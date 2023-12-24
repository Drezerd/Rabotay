import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);

import "./assets/styles/style.scss";
import VueLazyload from "vue-lazyload";
import Modal from "@/components/UI/Modal.vue";
import errorImage from "@/assets/img/lazyImg.png";
function scrollToTop() {
	const supportsSmoothScroll = "scrollBehavior" in document.documentElement.style;
	if (supportsSmoothScroll) {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	} else {
		window.scrollTo(0, 0);
	}
}
app.use(VueLazyload, {
	error: errorImage,
});
app.use(createPinia());
app.use(router);

router.beforeEach((to, from, next) => {
	scrollToTop();
	next();
});
app.component("Modal", Modal);
app.mount("#app");
import { useModalData } from "@/stores/modal.js";
const ModalStores = useModalData();

<template>
    <p v-if="isSmallScreen" class="warning_text">
        Размер вашего экрана {{ screenSizeValue }}px.<br />Пожалуйста, используйте устройство с
        большим экраном для лучшего опыта.
    </p>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isSmallScreen = ref(false);
const screenSizeValue = window.innerWidth;

const checkScreenSize = () => {
    isSmallScreen.value = window.innerWidth < 1300;
};

onMounted(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", checkScreenSize);
});
</script>

<style lang="scss">
@import "../styles/variables.scss";

.warning_text {
    position: absolute;
    top: -40px;
    left: -20px;

    width: 100vw;
    height: 100vh;
    z-index: 9999;
    padding: 20px;
    background: $primary_white_color;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 38px;
    font-weight: 700;
    color: $primary_black_color;
    text-align: center;
}

@media (max-width: 1024px) {
    .warning_text {
        font-size: 34px;
    }
}

@media (max-width: 768px) {
    .warning_text {
        font-size: 28px;
    }
}

@media (max-width: 425px) {
    .warning_text {
        font-size: 24px;
    }
}
</style>

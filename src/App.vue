<template>
    <main class="main_container">
        <h1 class="main_title">Check the keyboard operation</h1>
        <h2 class="subtitle">Choose your system</h2>
        <colorDropdown />
        <systemSwitch />
        <screenSizeWarning />
    </main>
</template>

<script setup>
import systemSwitch from "./components/systemSwitch.vue";
import colorDropdown from "./components/colorDropdown.vue";
import screenSizeWarning from "./components/screenSizeWarning.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import "./styles/variables.scss";

* {
    margin: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

body {
    min-width: 1340px;
    height: 100dvh;

    padding: 40px 20px;
    background: $primary_white_color;
    overflow: hidden;

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
}

.main_container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.main_title {
    margin-bottom: 15px;
    font-size: 26px;
    font-weight: 500;
    color: $primary_black_color;
}

.subtitle {
    margin-bottom: 15px;
    font-size: 22px;
    font-weight: 500;
    color: $primary_black_color;
}
</style>

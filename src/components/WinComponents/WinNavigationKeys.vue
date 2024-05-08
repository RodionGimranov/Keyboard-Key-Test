<template>
  <section class="navigation_keys_container">
    <div class="row_of_nav_keys">
      <span class="WinArrowUp Winkey"
        ><img
          class="arrow_top"
          src="../../assets/svg/WinOS-icons/winOS-arrow.svg"
          alt="Control arrow top icon"
      /></span>
    </div>
    <div class="row_of_nav_keys">
      <span class="WinArrowLeft Winkey"
        ><img
          class="arrow_left"
          src="../../assets/svg/WinOS-icons/winOS-arrow.svg"
          alt="Control arrow left icon"
      /></span>
      <span class="WinArrowDown Winkey"
        ><img
          class="arrow_down"
          src="../../assets/svg/WinOS-icons/winOS-arrow.svg"
          alt="Control arrow down icon"
      /></span>
      <span class="WinArrowRight Winkey"
        ><img
          class="arrow_right"
          src="../../assets/svg/WinOS-icons/winOS-arrow.svg"
          alt="Control arrow right icon"
      /></span>
    </div>
  </section>
</template>

<script setup>
import { useKeyWrapper } from "../../composables/useKeyWrapper.js";

useKeyWrapper();
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.navigation_keys_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.row_of_nav_keys {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.arrow_left {
  transform: rotate(-90deg);
}

.arrow_down {
  transform: rotate(180deg);
}

.arrow_right {
  transform: rotate(90deg);
}
</style>

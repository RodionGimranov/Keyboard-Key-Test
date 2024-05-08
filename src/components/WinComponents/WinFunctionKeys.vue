<template>
  <section class="function_keys_container">
    <span class="WinEscape Winkey">Esc</span>
    <span class="WinF1 Winkey">F1</span>
    <span class="WinF2 Winkey">F2</span>
    <span class="WinF3 Winkey">F3</span>
    <span class="WinF4 Winkey">F4</span>
    <span class="WinF5 Winkey">F5</span>
    <span class="WinF6 Winkey">F6</span>
    <span class="WinF7 Winkey">F7</span>
    <span class="WinF8 Winkey">F8</span>
    <span class="WinF9 Winkey">F9</span>
    <span class="WinF10 Winkey">F10</span>
    <span class="WinF11 Winkey">F11</span>
    <span class="WinF12 Winkey">F12</span>
  </section>
</template>

<script setup>
import { useKeyWrapper } from "../../composables/useKeyWrapper.js";

useKeyWrapper();
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.function_keys_container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.Winkey {
  width: 53px;
  height: 56px;

  border-radius: 3px;
  transition: 0.1s;
  padding: 5px 0px 0px 0px;
  background: $primary_white_color;
  border: 1px solid $fourth_gray_color;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  cursor: default;
  user-select: none;
  -webkit-user-select: none;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  font-size: 16px;
  font-weight: 300;
  color: $primary_black_color;
}

.WinEscape,
.WinF4,
.WinF8 {
  margin-right: 37px;
}
</style>

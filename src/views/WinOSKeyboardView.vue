<template>
  <section class="win_keyboard_container" :style="{ background: color }">
    <div class="first_column_key">
      <WinFunctionKeys />
      <WinBasicInputKeys />
    </div>
    <div class="second_column_key">
      <WinCursorKeys />
      <WinNavigationKeys />
    </div>
    <div class="third_column_key">
      <WinGithubButton />
      <WinNumericKeypad />
    </div>
  </section>
</template>

<script setup>
import WinFunctionKeys from "../components/WinComponents/WinFunctionKeys.vue";
import WinBasicInputKeys from "../components/WinComponents/WinBasicInputKeys.vue";
import WinCursorKeys from "../components/WinComponents/WinCursorKeys.vue";
import WinNavigationKeys from "../components/WinComponents/WinNavigationKeys.vue";
import WinGithubButton from "../components/WinComponents/WinGithubButton.vue";
import WinNumericKeypad from "../components/WinComponents/WinNumericKeypad.vue";

const { color } = defineProps(["color"]);
</script>

<style lang="scss">
@import "../styles/variables.scss";

.win_keyboard_container {
  width: 1299px;
  height: 383px;

  margin-top: 17vh;
  background: #eeeff1;
  border-radius: 13px;
  padding: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
}

.first_column_key,
.second_column_key,
.third_column_key {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
}

.second_column_key {
  gap: 64px;
}
</style>

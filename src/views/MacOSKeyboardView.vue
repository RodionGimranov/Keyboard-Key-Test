<template>
  <section class="mac_keyboard_container" :style="{ background: color }">
    <MacFunctionKeys />
    <div class="mac_key_container">
      <MacBasicInputKeys />
      <MacCursorKeys />
      <MacNumericKeypad />
    </div>
  </section>
</template>

<script setup>
import MacFunctionKeys from "../components/MacComponents/MacFunctionKeys.vue";
import MacBasicInputKeys from "../components/MacComponents/MacBasicInputKeys.vue";
import MacCursorKeys from "../components/MacComponents/MacCursorKeys.vue";
import MacNumericKeypad from "../components/MacComponents/MacNumericKeypad.vue";

const { color } = defineProps(["color"]);
</script>

<style lang="scss">
@import "../styles/variables.scss";

.mac_keyboard_container {
  width: 1299px;
  height: 382px;

  margin-top: 17vh;
  background: #eeeff1;
  border-radius: 38px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.mac_key_container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
}
</style>

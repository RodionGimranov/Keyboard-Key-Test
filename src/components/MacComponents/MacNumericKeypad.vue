<template>
  <section class="mac_num_pad_container">
    <div class="mac_num_pad_column">
      <div class="mac_num_pud_block1">
        <div class="mac_num_pad_under_block">
          <div class="mac_num_pad_col">
            <span class="MacClear MacKey">clear</span>
            <span class="MacNumpad7 MacKey">7</span>
            <span class="MacNumpad4 MacKey">4</span>
            <span class="MacNumpad1 MacKey">1</span>
          </div>
          <div class="mac_num_pad_col">
            <span class="MacEqual MacKey">=</span>
            <span class="MacNumpad8 MacKey">8</span>
            <span class="MacNumpad5 MacKey">5</span>
            <span class="MacNumpad2 MacKey">2</span>
          </div>
        </div>
        <span class="MacNumpad0 MacKey">0</span>
      </div>
    </div>
    <div class="mac_num_pad_column">
      <div class="mac_num_pad_col">
        <span class="MacNumpadDivide MacKey">/</span>
        <span class="MacNumpad9 MacKey">9</span>
        <span class="MacNumpad6 MacKey">6</span>
        <span class="MacNumpad3 MacKey">3</span>
        <span class="MacNumpadDecimal MacKey">.</span>
      </div>
      <div class="mac_num_pad_col">
        <span class="MacNumpadMultiply MacKey">*</span>
        <span class="MacNumpadSubtract MacKey">-</span>
        <span class="MacNumpadAdd MacKey">+</span>
        <span class="MacNumpadEnter MacKey">enter</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useKeyWrapper } from "../../composables/useKeyWrapper";

useKeyWrapper();
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.mac_num_pad_container,
.mac_num_pad_column,
.mac_num_pad_under_block {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.mac_num_pud_block1,
.mac_num_pad_col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.MacNumpad0 {
  width: 110px;
}

.MacClear,
.MacNumpadEnter {
  font-size: 14px;
}

.MacNumpad0,
.MacNumpad1,
.MacNumpad2,
.MacNumpad3 .MacNumpad4,
.MacNumpad5,
.MacNumpad6,
.MacNumpad7,
.MacNumpad8,
.MacNumpad9 .MacEqual,
.MacNumpadAdd,
.MacNumpadSubtract,
.MacNumpadMultiply,
.MacNumpadMultiply,
.MacNumpadDivide {
  padding: 0px;
}

.MacNumpadEnter {
  height: 114px;
  padding: 0px 10px 6px 0px;
  border-bottom-right-radius: 24px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>

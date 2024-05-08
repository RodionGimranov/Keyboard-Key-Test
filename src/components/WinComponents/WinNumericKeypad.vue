<template>
  <section class="num_pad_container">
    <div class="part_one">
      <div class="column_keys">
        <span class="WinNumLock Winkey">Num<br />Lock</span>
        <span class="WinNumpad7 Winkey">7</span>
        <span class="WinNumpad4 Winkey">4</span>
      </div>
      <div class="column_keys">
        <span class="WinNumpadDivide Winkey">/</span>
        <span class="WinNumpad8 Winkey">8</span>
        <span class="WinNumpad5 Winkey">5</span>
      </div>
      <div class="column_keys">
        <span class="WinNumpadMultiply Winkey">*</span>
        <span class="WinNumpad9 Winkey">9</span>
        <span class="WinNumpad6 Winkey">6</span>
      </div>
      <div class="column_keys">
        <span class="WinNumpadSubtract Winkey">-</span>
        <span class="WinNumpadAdd Winkey">+</span>
      </div>
    </div>
    <div class="part_two">
      <div class="block_one">
        <div class="row_pt2">
          <span class="WinNumpad1 Winkey">1</span>
          <span class="WinNumpad2 Winkey">2</span>
        </div>
        <div class="row_pt2">
          <span class="WinNumpad0 Winkey">0</span>
        </div>
      </div>
      <div class="block_two">
        <div class="column_pt2">
          <span class="WinNumpad3 Winkey">3</span>
          <span class="WinNumpadDecimal Winkey">.</span>
        </div>
        <div class="column_pt2">
          <span class="WinNumpadEnter Winkey">Enter</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useKeyWrapper } from "../../composables/useKeyWrapper.js";

useKeyWrapper();
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.num_pad_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.part_one,
.part_two,
.block_two,
.row_pt2 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.column_keys,
.block_one,
.column_pt2 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.WinNumpadSubtract {
  height: 115px;
}

.WinNumpad0 {
  width: 110px;
}

.WinNumpadEnter {
  height: 115px;
}
</style>

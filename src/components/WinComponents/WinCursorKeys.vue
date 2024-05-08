<template>
  <section class="cursor_keys_container">
    <div class="cursor_row row_of_keys">
      <span class="WinPrintScreen Winkey">Prt Sc</span>
      <span class="WinScrollLock Winkey">Scr Lk</span>
      <span class="WinPause Winkey">Pause<br />Break</span>
    </div>
    <div class="row_of_keys">
      <span class="WinInsert Winkey">Ins</span>
      <span class="WinHome Winkey">Home</span>
      <span class="WinPageUp Winkey">PgUp</span>
    </div>
    <div class="row_of_keys">
      <span class="WinDelete Winkey">Del</span>
      <span class="WinEnd Winkey">End</span>
      <span class="WinPageDown Winkey">PgDn</span>
    </div>
  </section>
</template>

<script setup>
import { useKeyWrapper } from "../../composables/useKeyWrapper.js";

useKeyWrapper();
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.cursor_keys_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.row_of_keys {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
}

.cursor_row {
  margin-bottom: 6px;
}
</style>

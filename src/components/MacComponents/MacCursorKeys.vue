<template>
  <section class="mac_cursor_key_container">
    <div class="mac_key_block">
      <div class="mac_cursor_row_key">
        <span class="MacFn MacKey"
          ><img
            class="mac_key_icon"
            src="../../assets/svg/MacOS-icons/language-change-key.svg"
            alt="Icon image"
          />
          <p class="mac_fn_key">fn</p></span
        >
        <span class="MacHome MacKey">home</span>
        <span class="MacPageUp MacKey">page<br />up</span>
      </div>
      <div class="mac_cursor_row_key">
        <span class="MacBackSpace MacKey"
          ><img
            class="mac_key_icon"
            src="../../assets/svg/MacOS-icons/delete-key.svg"
            alt="Icon image"
        /></span>
        <span class="MacEnd MacKey">end</span>
        <span class="MacPageDown MacKey">page<br />down</span>
      </div>
    </div>
    <div class="mac_navigation_arrow_container">
      <div class="mac_navigation_arrow_row">
        <span class="MacArrowUp MacKey"
          ><img
            class="mac_arrow_up"
            src="../../assets/svg/MacOS-icons/macOS-arrow.svg"
            alt="Icon image"
        /></span>
      </div>
      <div class="mac_navigation_arrow_row">
        <span class="MacArrowLeft MacKey"
          ><img
            class="mac_arrow_left"
            src="../../assets/svg/MacOS-icons/macOS-arrow.svg"
            alt="Icon image"
        /></span>
        <span class="MacArrowDown MacKey"
          ><img
            class="mac_arrow_down"
            src="../../assets/svg/MacOS-icons/macOS-arrow.svg"
            alt="Icon image"
        /></span>
        <span class="MacArrowRight MacKey"
          ><img
            class="mac_arrow_right"
            src="../../assets/svg/MacOS-icons/macOS-arrow.svg"
            alt="Icon image"
        /></span>
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

.mac_cursor_key_container,
.mac_key_block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.mac_key_block,
.mac_navigation_arrow_container {
  gap: 4px;
}

.mac_navigation_arrow_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
}

.mac_arrow_key_block {
  margin-top: 64px;
}

.mac_cursor_row_key,
.mac_navigation_arrow_row {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.MacHome,
.MacPageUp,
.MacEnd,
.MacPageDown {
  font-size: 14px;
  padding: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.MacBackSpace {
  padding: 0px;
}

.MacFn {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  padding: 10px 6px 6px 6px;
}

.mac_fn_key {
  width: 100%;
  font-size: 12px;

  display: flex;
  justify-content: flex-end;
}

.MacArrowUp,
.MacArrowLeft,
.MacArrowDown,
.MacArrowRight {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mac_arrow_left {
  transform: rotate(-90deg);
}

.mac_arrow_down {
  transform: rotate(180deg);
}

.mac_arrow_right {
  transform: rotate(90deg);
}
</style>

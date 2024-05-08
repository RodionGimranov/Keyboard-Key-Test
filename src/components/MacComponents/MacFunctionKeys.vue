<template>
  <section class="mac_function_keys_container">
    <span class="MacEscape MacKey">esc</span>
    <span class="MacF1 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/decrease-brightness-key.svg"
        alt="Icon image"
      />F1</span
    >
    <span class="MacF2 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/brightness-increase-key.svg"
        alt="Icon image"
      />F2</span
    >
    <span class="MacF3 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/mission-control-key.svg"
        alt="Icon image"
      />F3</span
    >
    <span class="MacF4 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/search-key.svg"
        alt="Icon image"
      />F4</span
    >
    <span class="MacF5 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/microphone-key.svg"
        alt="Icon image"
      />F5</span
    >
    <span class="MacF6 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/do-not-disturb-key.svg"
        alt="Icon image"
      />F6</span
    >
    <span class="MacF7 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/back-key.svg"
        alt="Icon image"
      />F7</span
    >
    <span class="MacF8 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/stop-key.svg"
        alt="Icon image"
      />F8</span
    >
    <span class="MacF9 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/forward-key.svg"
        alt="Icon image"
      />F9</span
    >
    <span class="MacF10 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/key-without-sound.svg"
        alt="Icon image"
      />F10</span
    >
    <span class="MacF11 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/key-sound-is-quieter.svg"
        alt="Icon image"
      />F11</span
    >
    <span class="MacF12 mac_func_key MacKey"
      ><img
        class="mac_key_icon"
        src="../../assets/svg/MacOS-icons/the-key-is-louder.svg"
        alt="Icon image"
      />F12
    </span>
    <a href="https://github.com/RodionGimranov" class="mac_gh_key MacKey" target="_blank"
      ><img class="mac_gh_btn" src="../../assets/svg/GitHub-icon.svg" alt="Github icon"
    /></a>
    <span class="MacF13 mac_func_key MacKey">F13</span>
    <span class="MacF14 mac_func_key MacKey">F14</span>
    <span class="MacF15 mac_func_key MacKey">F15</span>
    <span class="MacF16 mac_func_key MacKey">F16</span>
    <span class="MacF17 mac_func_key MacKey">F17</span>
    <span class="MacF18 mac_func_key MacKey">F18</span>
    <span class="MacF19 mac_func_key MacKey">F19</span>
  </section>
</template>

<script setup>
import { useKeyWrapper } from "../../composables/useKeyWrapper.js";

useKeyWrapper();
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.mac_function_keys_container {
  margin-bottom: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.MacKey {
  width: 53px;
  height: 56px;

  border-radius: 3px;
  padding: 10px 0px 6px 0px;
  background: $primary_white_color;
  border: 1px solid $fourth_gray_color;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  color: $primary_black_color;
  text-align: center;

  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
}

.MacEscape {
  width: 107px;

  border-top-left-radius: 24px;
  padding: 0px 0px 6px 12px;

  font-size: 14px;
  font-weight: 300;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.mac_func_key {
  font-size: 12px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.mac_gh_key {
  margin-right: 16px;
  transition: 0.2s;
  cursor: pointer;
  padding: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    box-shadow: none;
  }
}

.MacF15 {
  margin-right: 16px;
}

.MacF19 {
  border-top-right-radius: 24px;
}

.MacF13,
.MacF14,
.MacF15,
.MacF16,
.MacF17,
.MacF18,
.MacF19 {
  justify-content: flex-end;
}
</style>

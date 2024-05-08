<template>
  <nav class="operating_system_switch">
    <router-link to="/" class="win_os_keyboard" @click="handleWinOSClick">WinOS</router-link>
    <router-link to="/MacOS" class="mac_os_keyboard" @click="handleMacOSClick">MacOS</router-link>
    <span class="background_text" ref="backgroundText"></span>
  </nav>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";

const backgroundText = ref(null);
const isWindows = ref(true);

const handleWinOSClick = () => {
  isWindows.value = true;
  backgroundText.value.classList.remove("move-right");
};

const handleMacOSClick = () => {
  isWindows.value = false;
  backgroundText.value.classList.add("move-right");
};

const transitionName = computed(() => {
  return isWindows.value ? "switch-keyboard-windows" : "switch-keyboard-macos";
});
</script>

<style lang="scss">
@import "../styles/variables.scss";

.operating_system_switch {
  position: relative;

  background: $basic_gray_color;
  border-radius: 8px;
  padding: 4px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.win_os_keyboard,
.mac_os_keyboard {
  width: 94px;
  height: 32px;

  border-radius: 8px;
  transition: 0.2s;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  color: $primary_black_color;
}

.background_text {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 94px;
  height: 32px;

  background: $primary_white_color;
  border-radius: 8px;
  transition: 0.2s;

  &.move-left {
    transform: translateX(0);
  }

  &.move-right {
    transform: translateX(94px);
  }
}

.switch-keyboard-windows-enter-active,
.switch-keyboard-windows-leave-active {
  transition: all 0.6s;
}

.switch-keyboard-windows-enter-from {
  transform: translateX(100%) scale(0.8);
}

.switch-keyboard-windows-leave-to {
  transform: translateX(-100%) scale(0.8);
}

.switch-keyboard-macos-enter-active,
.switch-keyboard-macos-leave-active {
  transition: all 0.6s;
}

.switch-keyboard-macos-enter-from {
  transform: translateX(-100%) scale(0.8);
}

.switch-keyboard-macos-leave-to {
  transform: translateX(100%) scale(0.8);
}
</style>

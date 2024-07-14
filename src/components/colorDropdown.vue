<template>
  <div class="drop_down_container">
    <div class="toggleButton" @click="toggleDropdown" :class="{ __active: isActive }">
      <span class="point" v-for="p in 3" :key="p"></span>
    </div>
    <div class="list_of_color" v-if="isActive">
      <div
        class="color_item"
        v-for="(color, index) in colors"
        :key="index"
        @click="changeColor(color.color)"
        :class="{ selected: index === selectedIndex }"
        @mouseover="highlightColor(index)"
      >
        {{ color.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isActive = ref(false);
const selectedIndex = ref(0);

const colors = [
  { color: "#EEEFF1", label: "Silver" },
  { color: "#B9CBDC", label: "Blue" },
  { color: "#CBDED3", label: "Green" },
  { color: "#C2C2E8", label: "Purple" },
  { color: "#FBE9BA", label: "Yellow" },
  { color: "#E9BFB4", label: "Orange" },
];

const toggleDropdown = () => {
  isActive.value = !isActive.value;
};

const changeColor = (color) => {
  isActive.value = false;
  const routeName = router.currentRoute.value.name;
  if (routeName === "WinOS" || routeName === "MacOS") {
    router.push({ name: routeName, query: { color } });
  }
};

const highlightColor = (index) => {
  selectedIndex.value = index;
};

const hideDropdown = () => {
  isActive.value = false;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const handleClickOutside = (event) => {
  const dropdown = document.querySelector(".toggleButton");
  if (dropdown && !dropdown.contains(event.target)) {
    hideDropdown();
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

.drop_down_container {
  position: absolute;
  top: 0;
  left: 98.5;
  width: 1299px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.toggleButton {
  width: 40px;
  height: 40px;

  background: $basic_gray_color;
  border-radius: 8px;
  transition: 0.1s;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &:hover {
    background: $second_gray_color;
  }

  &.__active {
    background: $third_gray_color;
  }

  .point {
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: $primary_black_color;
  }
}

.list_of_color {
  width: 135px;

  padding: 10px;
  border-radius: 12px;
  background: $primary_white_color;
  box-shadow: 0px 3px 15px rgba(76.5, 76.5, 76.5, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .color_item {
    width: 100%;
    padding: 5px 10px;
    border-radius: 8px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    font-size: 16px;
    font-weight: 500;
    color: $primary_black_color;

    &.selected {
      background: $basic_gray_color;
    }
  }
}
</style>

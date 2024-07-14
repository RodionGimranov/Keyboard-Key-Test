<template>
    <section class="gh_btn_cotainer">
        <a href="https://github.com/RodionGimranov" class="gh_btn" target="_blank">
            <img class="gh_icon" src="../../assets/svg/GitHub-icon.svg" alt="Github icon"></a>
        </img>
    </section>
</template>

<script setup>
</script>

<style lang="scss">
@import '../../styles/variables.scss';

.gh_btn_cotainer {
    width: 224px;
    display: flex;
    justify-content: flex-end;
}

.gh_btn {
    width: 53px;
    height: 56px;

    border-radius: 3px;
    background: $primary_white_color;
    border: 1px solid $fourth_gray_color;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
    cursor: pointer;
    transition: 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
        box-shadow: none;
    }
}
</style>
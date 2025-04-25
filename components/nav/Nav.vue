<script lang='js' setup>
    import {ref} from 'vue'
    const isActive = ref(false)
    import BurderMenuBurgerMenu from '../burderMenu/BurgerMenu.vue';
    import MainMenu from '../mainMenu/MainMenu.vue';
    function burgerMenuClick() {
        isActive.value = !isActive.value
    }
</script>

<template>
    <nav
        class="mainHeaderInner__nav"
        role="navigation"
        aria-label="Основное меню"
    >
        <MainMenu :value='isActive' />
        <RegisterBlock />
        <BurderMenuBurgerMenu :value='isActive' @click="burgerMenuClick" />
    </nav>
</template>

<style lang='scss'>
    @import './_Nav.scss';
</style>
<script lang='js' setup>
    import {ref} from 'vue'
    const isActive = ref(false)
    import BurderMenuBurgerMenu from '../burderMenu/BurgerMenu.vue';
    import MainMenu from '../mainMenu/MainMenu.vue';
    function changeStateMenu() {
        isActive.value = !isActive.value
    }
</script>

<template>
    <nav
        role="navigation"
        aria-label="Основное меню"
    >
        <MainMenu :isActive='isActive' />
        <RegisterBlock class="nav__registerBlock" />
        <BurderMenuBurgerMenu :isActive='isActive'  @dropMenu='changeStateMenu' />
    </nav>
</template>

<style lang='scss'>
    @import './_Nav.scss';
</style>
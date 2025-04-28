<script lang='js' setup>
    const props = defineProps({isActive: Boolean});
    const emit = defineEmits(['dropMenu']);
    function sendSignal() {
        emit('dropMenu')
    }
</script>

<template>
    <article 
        class="burgerMenu" 
        :class='{active: isActive}' 
        role='dropMenu' 
        aria-label='Кнопка для выпадающего меню'
        @click='sendSignal'
    >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </article>
</template>

<style lang='scss'>
    @import './_BurgerMenu.scss';
</style>
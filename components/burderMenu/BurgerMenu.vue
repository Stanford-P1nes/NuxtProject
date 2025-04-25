<script lang='js' setup>
    const props = defineProps({value: Boolean});
</script>

<template>
    <article 
        class="burgerMenu" 
        :class='{active: props.value}' 
        role='dropMenu' 
        aria-label='Кнопка для выпадающего меню'
        @click='updateValue'
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
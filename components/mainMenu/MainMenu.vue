<script lang='js' setup>
    const props = defineProps({value: Boolean});
</script>

<template>
    <menu 
        class="mainMenu" 
        :class='{show: props.value}'
        role="mainMenu"
    >
        <ul>
            <li><NuxtLink class="link" to="/">Landing pages</NuxtLink></li>
            <li><NuxtLink class="link" to="/">Other pages</NuxtLink></li>
            <li><NuxtLink class="link" to="/">Callback</NuxtLink></li>
        </ul>
    </menu>
</template>

<style lang='scss'>
    @import './_MainMenu.scss';
</style>
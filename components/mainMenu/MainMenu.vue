<script lang='js' setup>
    const props = defineProps({isActive: Boolean});
    import Email from '~/components/Email/Email.vue'
</script>

<template>
    <menu 
        class="mainMenu" 
        :class='{show: isActive}'
        role="mainMenu"
    >
        <ul>
            <li><NuxtLink class="link" to="#Testimonial">Testimonial</NuxtLink></li>
            <li><NuxtLink class="link" to="#Landing-pages">Landing pages</NuxtLink></li>
            <li><NuxtLink class="link" to="#Feetback">Callback</NuxtLink></li>
        </ul>
        <Email class="mainManu__email" />
    </menu>
</template>

<style lang='scss'>
    @import './_MainMenu.scss';
</style>
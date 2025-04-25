<template>
    <article class="feature">
        <div class="featureAvatar">
            <img :src='data.avatar' alt="Аватарка">
        </div>
        <div class="featureInfoBlock">
            <strong>{{ data.title }}</strong>
            <p>
                {{ data.body }}
            </p>
        </div>
    </article>
</template>

<script setup>
    defineProps({
        data: {
            type: Object,
            required: true
        }
    });
</script>

<style lang='scss'>
    @import './_Feature.scss';
</style>
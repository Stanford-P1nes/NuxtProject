<template>
    <section class="features">
        <div class="container">
            <div class="featuresInner">
                <Feature v-for='feature in features' :key='feature.id' :data='feature' />
            </div>
        </div>
    </section>
</template>

<script lang='js' setup>
    import { ref } from 'vue';
    const features = ref([
        {
            id: 1,
            title: 'Speed',
            body: 'Open a commercial-grade current account from anywhere',
            avatar: '/avatar/ava-1.svg',
        },
        {
            id: 2,
            title: 'Design',
            body: 'Open a commercial-grade current account from anywhere',
            avatar: '/avatar/ava-2.svg',
        },
        {
            id: 3,
            title: 'Modularity',
            body: 'Open a commercial-grade current account from anywhere',
            avatar: '/avatar/ava-3.svg',
        },
    ]);
</script>

<style lang='scss'>
    @import './_Features.scss';
</style>
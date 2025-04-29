<template>
    <div class="productsContainer">
        <Product 
            class="product" 
            v-for='product in productsData'
            :key='product.id' 
            :product='product'
        >
        </Product>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const productsData = ref([
        {
            id: 1,
            name: 'Landing one',
            image: '/products/product1.png',
            isBest: true
        },
        {
            id: 2,
            name: 'Landing two',
            image: '/products/product2.png',
            isBest: true
        },
        {
            id: 3,
            name: 'Landing three',
            image: '/products/product3.png',
            isBest: true
        },
        {
            id: 4,
            name: 'Landing four',
            image: '/products/product4.png',
            isBest: true
        },
        {
            id: 5,
            name: 'Sign up two',
            image: '/products/product5.png',
            isBest: false
        },
        {
            id: 6,
            name: 'Sign up three',
            image: '/products/product6.png',
            isBest: false
        },
        {
            id: 7,
            name: 'Contact one',
            image: '/products/product7.png',
            isBest: false
        },
        {
            id: 8,
            name: 'Contact two',
            image: '/products/product8.png',
            isBest: false
        },
        {
            id: 9,
            name: 'About us',
            image: '/products/product9.png',
            isBest: false
        },
        {
            id: 10,
            name: 'Blog',
            image: '/products/product10.png',
            isBest: false
        },
        {
            id: 11,
            name: 'Careers',
            image: '/products/product11.png',
            isBest: false
        },
    ]);
</script>

<style lang="scss">
    @import './_ProductsContainer.scss';
</style>
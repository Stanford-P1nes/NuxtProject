<template>
    <article class="product" aria-label='Это карточка товара'>
        <div class="productImage">
            <img :src="product.image" alt="Картинка карточки товара">
        </div>
        <div class="productInfo">
            <strong class="productName">{{ product.name }}</strong>
        </div>
    </article>
</template>

<script setup>
    defineProps({
        product: {
            type: Object,
            required: true
        }
    });
</script>

<style lang="scss" scoped>
    @import './_Product.scss';
</style>
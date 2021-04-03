<template>
    <div class="header__bottom" :class="[$style.mb]">
        <div class="promo__catalog center">
            <p class="promo__catalog-heading">{{ msg }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        msg: String
    }
}
</script>

<style module>
    .mb {
        margin-bottom: 50px;
    }
</style>
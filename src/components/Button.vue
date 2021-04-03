<template>
    <div class="products_bottom">
        <button
            class="items_button"
            @click="click">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        click () {
            this.$emit('clicked')
        }
    },
}
</script>

<style>

</style>
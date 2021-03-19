<template>
    <div>
        <header :class="[$style.myheader]">
            hello
        </header>
        <main>
            <h3>Content</h3>
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style module>
    .myheader {
        color: red;
    }
</style>
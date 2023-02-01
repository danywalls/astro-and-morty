<script lang="ts">
export default {
    props: {
        message: String,
    },
}
</script>

<template>
    <footer>{{ message }}</footer>
</template>
<style>
footer {
    text-align: center;
}
</style>
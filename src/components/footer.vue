<script lang="ts">
export default {
    props: {
        message: String,
    },
}
</script>

<template>
    <footer>{{ message }} on Vue</footer>
</template>
<style>
footer {
    justify-content: center;
    display: flex;
    gap: 1rem;
    background: black;
    align-content: center;
    align-items: center;
    height: 2rem;
    color: white;
}
</style>
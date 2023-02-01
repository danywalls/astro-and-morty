<script lang="ts">
export default {
    props: {
        name: String,
        image: String,
        id: String
    },
}
</script>
<template>
    <div class="character">
        <img :src=image alt=name width="300px" height="300px" />
        <a :href="`/character/${id}`">{{ name }}</a>
    </div>
</template>
<style>
.character {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

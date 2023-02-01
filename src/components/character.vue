<script lang="ts">
export default {
    props: {
        name: String,
        image: String
    },
}
</script>

<template>
    <div>
        <img :src=image alt=name width="300px" height="300px" />
    </div>
</template>

<template>
    <div>
        <p> Soy ButtonAutoCount </p>
        <button @click='count++'> Pulsado {{ count }} veces.</button>
    </div>



</template>

<script setup lang='ts'>
import {ref} from 'vue'

    let count = ref<number>(0)

</script>

<style scoped>
</style>
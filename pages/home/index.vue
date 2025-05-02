<template>
    <div>
        Home Page
    </div>
</template>
<script setup lang="ts">

const exCallApi = async () => {
    try {
        let body = {}
        const res = await useAPI().get('/objects')
        console.log(res)
    } catch (error: any) {
        console.log(error)
    }
}
exCallApi()
</script>
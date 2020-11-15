<template>
  <div :style="{backgroundImage: `url(${itemImage})`}"></div>
</template>

<script>
export default {
    name: "CarouselItem",
    props: ["itemImage", "id"]    
}
</script>

<style>

</style>
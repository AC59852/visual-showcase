<template>
  <div :class="project.class" :style="{backgroundImage: `url(${project.image})`}">
    <div class="text">
      <h2>{{ project.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
    props: ["project", "id"]
}
</script>

<style>
.project:hover .text{
  opacity: 1;
  top: 0;
  background-color: rgba(0, 0, 0, 0.589);
}

.text {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -3%;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 0;
  color: white;
}

.text h2 {
  font-size: 1.6vw;
  text-transform: capitalize;
}
</style>
<template>
  <div>
      <div class="navTop">
        <h1>Web Visual Showcase</h1>
        <div @click="hideNav()">hide nav</div>
        <div class="socialsCon">
          <div class="socialItem">S1</div>
          <div class="socialItem">S2</div>
          <div class="socialItem">S3</div>
        </div>
      </div>
      <div class="navContent">
        <h2>What is This?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta aut ad voluptas iste pariatur minima, itaque dolorem exercitationem dolor dolores quaerat, blanditiis labore in maiores non harum libero omnis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium veniam commodi voluptas dolorem ratione vero doloribus natus atque, eos mollitia nulla. Cupiditate quos facere fuga? Corporis eligendi consequatur aliquam.</p>
      </div>
  </div>
</template>

<script>

export default {
    props: ["project", "id"],

    methods: {
      hideNav() {
      let nav = document.querySelector(".navigation"),
          home = document.querySelector(".contentCon"),
          projects = document.querySelectorAll(".project");

          nav.classList.add("hideNav");
          home.classList.add("homeStretch");
          
          projects.forEach(project => {
            project.classList.add("shrinkProject")
          })
          
    }
    }
}
</script>

<style>

</style>
<template>
  <div class="home">
      <div class="lbCon">
        <div class="lbWrapper">
          <div class="lbText">
            <h2>{{ currentProject.name }}</h2>
            <p class="lbPara1">{{ currentProject.desc1 }}</p>
            <p class="lbPara2">{{ currentProject.desc2 }}</p>
            <div class="lbBtn">
              <router-link :to="currentProject.link">View Project</router-link>
            </div>
          </div>
          <div class="lbImg" :style="{backgroundImage: `url(${currentProject.image})`}">
            <span @click="closeLb()">X</span>
          </div>
        </div>
      </div>
      <Navigation class="navigation"/>
        <div class="homeContent">
            <div class="contentCon">
              <MainContent v-on:click.native="lbContent(project); revealLb()" v-for="project in projects" :project="project" :key="project.id"/>
            </div>
        </div>
      </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import MainContent from '@/components/HomeContent.vue'

export default {
  name: 'Home',

  mounted() {
  },

  data() {
    return {
      projects: [
        {id: 1, name: 'project1', desc1: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,", desc2: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", image: "./images/canada.jpg", link: "project1", class: "project project1"},
        {id: 2, name: 'project2', desc1: "this is a description for project 1", desc2: "this is a description for project 1", image: "./images/ireland.jpg", link: "project1", class: "project project2"},
        {id: 3, name: 'project3', desc1: "this is a description for project 1", desc2: "this is a description for project 1", image: "./images/japan.jpg", link: "project1", class: "project project3"},
        {id: 4, name: 'project4', desc1: "this is a description for project 1", desc2: "this is a description for project 1", image: "./images/france.jpg", link: "project1", class: "project project4"},
        {id: 5, name: 'project5', desc1: "this is a description for project 1", desc2: "this is a description for project 1", image: "./images/ireland.jpg", link: "project1", class: "project project5"},
        {id: 6, name: 'project6', desc1: "this is a description for project 1", desc2: "this is a description for project 1", image: "./images/japan.jpg", link: "project1", class: "project project6"},
        {id: 7, name: 'project7', desc1: "this is a description for project 1", desc2: "this is a description for project 1", image: "./images/canada.jpg", link: "project1", class: "project project7"},
      ],

      currentProject: {}
    }
  },

  methods: {
    lbContent(info) {
      this.currentProject = info
    },
    revealLb() {
      let lb = document.querySelector(".lbCon"),
          lbTitle = document.querySelector(".lbCon h2"),
          lbPara1 = document.querySelector(".lbPara1"),
          lbPara2 = document.querySelector(".lbPara2"),
          lbClose = document.querySelector(".lbImg span"),
          lbBtn = document.querySelector(".lbBtn");

      if (lb.classList.contains("lbScale")) {
        return
      } else {
        lb.classList.add("scale-in-center");

      setTimeout(() => {
        lb.classList.remove("scale-in-center");
        lb.classList.add("lbScale");

        lbTitle.classList.add("revealTitle");
        lbClose.classList.add("revealClose");

        lbPara1.classList.add("revealPara1");
        lbBtn.classList.add("revealBtn");
      }, 600);

      setTimeout(() => {
          lbPara2.classList.add("revealPara2");
        }, 800);
      }
    },

    closeLb() {
      let lb = document.querySelector(".lbCon"),
          lbTitle = document.querySelector(".lbCon h2"),
          lbPara1 = document.querySelector(".lbPara1"),
          lbPara2 = document.querySelector(".lbPara2"),
          lbClose = document.querySelector(".lbImg span"),
          lbBtn = document.querySelector(".lbBtn");


          lbTitle.classList.remove("revealTitle");

          lbPara1.classList.remove("revealPara1");
          lbBtn.classList.remove("revealBtn");


      setTimeout(() => {
          lbPara2.classList.remove("revealPara2");
          lbClose.classList.remove("revealClose");
        }, 300);

      setTimeout(() => {
        lb.classList.add("scale-out-center");
      }, 1500);

      lb.addEventListener("animationend", () => {
        lb.classList.remove("scale-out-center")
        lb.classList.remove("lbScale");
        
      })
    }
  },
  
  components: {
    Navigation,
    MainContent
  }
}
</script>
<style>

.shrinkProject {
  width: 19.8% !important;
  padding-top: 19.8% !important;
}

.project:hover {
  cursor: pointer;
}

.project {
  width: 24.8%;
  transition: all 0.5s ease;
  padding-top: 24.8%;
  margin-right: 0.2%;
  margin-bottom: 0.2%;
  position: relative;
  background-size: 190%;
}

.homeStretch {
  width: 100% !important;
}

.hideNav {
  left: -20% !important;
}

.contentCon {
  width: 80%;
  margin-left: auto;
  transition: all 0.5s ease;
  display: flex;
  flex-wrap: wrap;
}

.navigation {
  width: 20%;
  position: fixed;
  left: 0;
  transition: all 0.5s ease;
}

.scale-in-center {
	-webkit-animation: scale-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: scale-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.scale-out-center {
	-webkit-animation: scale-out-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: scale-out-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.lbScale {
  transform: scale(1) !important;
}

.lbCon {
  width: 60%;
  height: 70vh;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.979);
  transform: scale(0);
  z-index: 99999;
  box-shadow: 0 0 15px 0 black;
}

.lbWrapper {
  display: flex;
  overflow: hidden;
  height: 100%;
}

.lbText {
  width: 40%;
}

.revealTitle {
  margin-top: 20% !important;
  opacity: 1 !important;
}

.revealClose {
  opacity: 1 !important;
  margin-right: 2% !important;
}

.revealTitle::after {
  width: 200px !important;
}

.revealPara2 {
  margin-left: 6% !important;
  opacity: 1 !important;
}

.revealPara1 {
  margin-left: 6% !important;
  opacity: 1 !important;
}

.lbText h2 {
  font-family: 'Quattrocento';
  font-size: 32px;
  text-transform: capitalize;
  position: relative;
  margin-bottom: 10%;
  margin-left: 6%;
  margin-top: 18%;
  opacity: 0;
  transition: all 0.9s ease;
  transition-delay: 0.1s;
}

.lbText h2::after {
  content: "";
  position: absolute;
  width: 0;
  top: 120%;
  left: 0;
  height: 2px;
  background-color: black;
  transition: all 0.9s ease;
}

.lbText p, .lbBtn {
  font-family: 'Quattrocento Sans';
  font-size: 14px;
}

.revealBtn {
  margin-top: 23% !important;
  opacity: 1 !important;
}

.lbBtn {
  margin-left: 60%;
  margin-top: 25%;
  opacity: 0;
  transition: all 0.9s ease;
  transition-delay: 0.8s;
}

.lbBtn a {
  text-decoration: none;
  color: black;
  border: solid transparent 2px;
  transition: all 0.4s ease;
  position: relative;
}

.lbBtn a::after {
  content: "";
  position: absolute;
  top: 130%;
  left: 2%;
  background-color: black;
  height: 2px;
  width: 0;
  transition: all 0.4s ease;
}

.lbBtn a:hover::after {
  width: 100%;
}

.lbText p {
  margin-left: 4%;
  width: 80%;
  line-height: 17px;
  letter-spacing: 0.4px;
  opacity: 0;
  transition: all 0.9s ease;
  transition-delay: 0.3s;
}

.lbText p:nth-child(3) {
  margin-top: 5%;
  margin-bottom: 20%;
}

.lbImg {
  width: 60%;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
}

.lbImg span {
  margin-right: 0;
  margin-top: 2%;
  font-size: 20px;
  color: red;
  height: 4%;
  cursor: pointer;
  opacity: 0;
  transition: all 0.9s ease;
  transition-delay: 0.4s;
}

@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 0;
  }
}
@keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
}
</style>

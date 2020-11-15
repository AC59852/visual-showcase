<template>
  <div class="project1">
    <h1>This is Project 1</h1>

    <div class="currentItemTest" :style="{backgroundImage: `url(${currentItem.image})`}">
        <div class="contentWrapper">
            <div class="imgContent">
                <span class="closeBtn" @click="returnContent()">X</span>
            </div>

            <div class="contentContainer">
                <div class="contentTrigger">
                    <h2 class="subtitle">{{ currentItem.subtitle }}</h2>
                    <h1>{{ currentItem.title }}</h1>
                    <p>{{ currentItem.para1 }}</p>
                    <p class="para2">{{ currentItem.para2 }}</p>
                    <button @click="showPicture()" class="currentItemBtn">Show Picture</button>
                </div>
            </div>
            <div class="blackFilter"></div>
        </div>
    </div>

    <div class="iconWrapper">
        <div class="iconCon">
        <CarouselItem v-for="item in Items" :itemImage="item.image" :key="item.id" v-on:click.native="newItem(item); testFunction2()"/>
        </div>
    </div>
  </div>
</template>

<script>
import CarouselItem from '@/components/CarouselItem.vue'

export default {
    components: {
        CarouselItem
    },

    data() {
        return {
            Items: [
                {
                    id: 1, 
                    subtitle: "Canada", 
                    title: "Fast But Relaxed", 
                    para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
                    para2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel.", 
                    image: "./images/canada.jpg"
                
                },

                {
                    id: 2, 
                    subtitle: "Ireland", 
                    title: "Quaint and Quiet", 
                    para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
                    para2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel.", 
                    image: "./images/ireland.jpg"
                
                },

                {
                    id: 3, 
                    subtitle: "France", 
                    title: "Arts and Crafts", 
                    para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
                    para2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel.", 
                    image: "./images/france.jpg"
                
                },
                
                {
                    id: 4, 
                    subtitle: "Japan", 
                    title: "Traditionally Modern", 
                    para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
                    para2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel.", 
                    image: "./images/japan.jpg"
                    
                },
            ],

            currentItem: {}
        }
    },

    methods: {

        newItem(info) {
            setTimeout(() => {
               this.currentItem = info 
            }, 1300);

            let container = document.querySelector(".contentContainer"),
                trigger = document.querySelector(".contentTrigger")

            container.classList.add("animationTest");

            trigger.classList.add("textUp")

            document.querySelector(".iconWrapper").classList.add("testHide");

            container.onanimationend = () => {
                container.classList.remove("animationTest")

                trigger.classList.remove("textUp")

                document.querySelector(".iconWrapper").classList.remove("testHide");
            }

        },

        testFunction2() {
            console.log(this.currentItem.title)
        },

        showPicture() {
            document.querySelector(".iconWrapper").classList.add("testHide");
            document.querySelector(".contentContainer").classList.add("testLeft");
            document.querySelector(".blackFilter").classList.add("hideFilter");

            setTimeout(() => {
                document.querySelector(".imgContent").classList.add("imgContentShow")
            }, 700);
        },

        returnContent() {
            document.querySelector(".imgContent").classList.remove("imgContentShow")

            setTimeout(() => {
                document.querySelector(".iconWrapper").classList.remove("testHide");
                document.querySelector(".contentContainer").classList.remove("testLeft");
                document.querySelector(".blackFilter").classList.remove("hideFilter");
            }, 700);
        }

    },

    mounted() {
        this.currentItem = this.Items[0];
    }
}
</script>

<style>

    .imgContentShow {
        margin-top: 2% !important;
        opacity: 1 !important;
        transition: all 0.4s ease;
    }

    .imgContent {
        display: flex;
        width: 95%;
        align-items: center;
        justify-content: space-between;
        color: white;
        opacity: 0;
        transition: all 0.6s ease;
        position: absolute;
        bottom: 3%;
        left: 3%;
    }

    .imgContent span {
       position: fixed;
       cursor: pointer;
       font-size: 20px;
       background-color: #000000b2;
       padding: 0.5% 0.65% 0.4% 0.6%;
       border-radius: 50000px;
       top: 2%;
       right: 2%;
    }

    .para2 {
        margin-top: 4%;
    }

    .textUp {
        margin-top: -10% !important;
        opacity: 0 !important;
    }

    .contentTrigger {
        opacity: 1;
        margin-top: 0;
        transition: all 0.4s ease;
    }

    .animationTest {
        animation: fullScreen 1.4s ease;
        animation-delay: 0.5s;
    }

    @keyframes fullScreen {
        0% {width: 25%;}
        50% {width: 100%;}
        60% {width: 100%;}
        100% {width: 25%;}
    }

    .currentItemTest {
        width: 100%;
        color: black;
        background-size: cover;
        height: 100vh;
        position: fixed;
        top: 0;
    }

    .testHide {
        bottom: -10% !important;
        opacity: 0 !important;
    }

    .testLeft {
        left: -25% !important;
        opacity: 0 !important;
    }

    .hideFilter {
        opacity: 0 !important;
    }

    .contentWrapper {
        height: 100%;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        text-align: left;
        position: relative;
    }

    .contentWrapper h1 {
        font-size: 40px;
        text-transform: capitalize;
        margin-bottom: 4%;
        width: 100% !important;
        transition: all 0.3s ease;
        transition-delay: 0.1s !important;
    }

    .subtitle {
        font-size: 20px;
        color: rgb(85, 85, 85);
        margin-top: 12%;
        margin-bottom: 2%;
    }

    .contentWrapper h1, .subtitle, p, button {
        margin-left: 12%;
        opacity: 1;
    }

    .contentWrapper button {
        margin-top: 5%;
        background:transparent;
        color: black;
        border: solid 2px black;
        cursor: pointer;
        font-size: 16px;
        padding: 2% 3%;
        transition: all 0.5s ease;
        border-radius: 4px;
        width: auto;
        position: relative;
    }

    .contentWrapper button::after {
        content: "🡺";
        font-weight: 400;
        position: absolute;
        left: 65%;
        top: 20%;
        right: 5%;
        font-size: 18px;
        bottom: 0;
        opacity: 0;
        transition: all 0.5s ease;
        color: white;
    }

    .contentWrapper button:hover {
        background: black;
        transition: all 0.5s ease;
        border-radius: 10px;
        box-shadow: 0px 6px 10px black;
        padding: 3% 8% 3% 3%;
        color: white;
        border: solid 2px transparent;
    }

    .contentWrapper button:hover::after {
        opacity: 1;
        transition: all 0.5s ease;
        padding-left: 12%;
    }

    .contentWrapper p {
        width: 75%;
        font-size: 16px;
        line-height: 20px;
    }

    .blackFilter {
        background-color: black;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
        opacity: 0.5;
        transition: all 1s ease;
    }

    .contentContainer {
        width: 25%;
        background-color: white;
        height: 100%;
        opacity: 1;
        transition: all 0.8s ease;
        position: absolute;
        left: 0;
        opacity: 1;
    }

    .iconWrapper {
        position: fixed;
        width: 100%;
        right: 1%;
        bottom: 1%;
        transition: all 0.6s ease;
        opacity: 1;
    }

    .iconCon {
        display: flex;
        justify-content: flex-end;
        width: 22%;
        padding: 0.3% 0.2%;
        background-color: white;
        margin-left: auto;
    }

    .iconCon div {
        width: 100px;
        margin: 0 0.6%;
        cursor: pointer;
        height: 80px;
        background-size: cover;
    }
</style>

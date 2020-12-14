<template>
  <div class="productCardCon">
      <div class="cardOne">
          <div class="cardOneLeft">
              <img src="images/productCard1.png" alt="Product Card One Image">
              <div class="cardOneTxt">TEXT</div>
              <div class="circle">&#x25EF;</div>
          </div>
          <div class="cardOneRight">
              <div class="cardOneTop">
                    <span class="stars">★★★★★</span>
                    <span class="cardOnePrice">$199.99</span>
              </div>
              <div class="cardOneName">
                  <h1>Card One Name</h1>
                  <h2>Card One Subtitle</h2>
              </div>
              <div class="cardOneColCon">
                  <h2>Colours:</h2>
                  <div class="cardOneColours">
                    <span class="cardOneColour cardCol1 cardOneActiveCol"></span>
                    <span class="cardOneColour cardCol2"></span>
                    <span class="cardOneColour cardCol3"></span>
                    <span class="cardOneColour cardCol4"></span>
                  </div>
              </div>
              <div class="cardOneInfo">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem in eius sequi tempora atque? Laudantium dolore, officia aliquid, explicabo praesentium deserunt at libero, cumque eos placeat odio impedit minima.</p>
              </div>
              <button class="cardOneBtn">Add to Cart</button>
          </div>
      </div>
      <div class="cardTwo">
          <div class="cardTwoLeft"></div>
          <div class="cardTwoRight">
              <div class="cardTwoContent">
                  <h1>Card Two Name</h1>
                  <h2>Card Two Subtitle</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum quod amet illum, explicabo quis, est itaque eveniet quam distinctio, omnis cum! Culpa, facilis blanditiis ducimus quidem veritatis iusto doloribus?</p>
                  <div class="cardTwoBuy">
                      <span class="cardTwoPrice">$75</span>
                      <button class="cardTwoBtn">Buy Now</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .productCardCon {
        width: 100%;
        padding-top: 10%;
        padding-bottom: 10%;
    }

    .cardOne {
        margin: 0 auto;
        width: 90%;
        max-width: 750px;
        height: 425px;
        background-size: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 12.5px 20px 1px rgba(0, 0, 0, 0.3), inset 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
	    border-radius: 4px;
	    color: #fff;
	    background-image: linear-gradient(-180deg, #fb947d, #FC3E65, #f23236);
    }

    .cardOneLeft {
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        position: relative;
    }

    .cardOneLeft img {
        height: 65%;
        max-height: 100%;
        z-index: 99999;
        filter: drop-shadow(-1px 22px 15px rgba(0, 0, 0, 0.35));
        transform: scale(1.7) rotate(35deg) translate(0, -55px);
    }

    .cardOneTxt {
        position: absolute;
        left: 0;
        font-size: 13.3em;
        font-family: sans-serif;
        font-weight: bold;
        opacity: 0.1;
        bottom: 10px;
        z-index: 1;
    }
    
    .circle {
        position: absolute;
        right: 25px;
        font-size: 3.2em;
        font-weight: bold;
        top: 25px;
        line-height: .95;
        filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));
        transform: rotate(28deg);
        opacity: .9;
    }

    .cardOneRight {
        height: 110%;
        z-index: 9999;
        background-color: white;
        width: 55%;
        color: black;
        padding: 4%;
        box-shadow: 0 10px 20px 3px rgba(0, 0, 0, 0.3), inset 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
    }

    .cardOneTop {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6%;
        align-items: center;
    }

    .stars {
        color: gold;
        font-size: 1.5em;
    }

    .cardOnePrice {
        font-size: 1.5em;
    }

    .cardOneName h1 {
        font-size: 1.8em;
        font-weight: 600;
        margin-bottom: 4%;
    }

    .cardOneName h2 {
        font-size: 1.2em;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.5);
    }

    .cardOneColCon {
        margin: 15% 0;
    }

    .cardOneColCon h2 {
        font-size: 1.4em;
        color: rgb(61, 61, 61);
        font-weight: 600;
    }

    .cardOneColours {
        display: flex;
        justify-content: space-evenly;
        width: 80%;
        margin: 10% auto 0;
    }

    .cardOneColour {
        display: block;
        width: 25px;
        height: 25px;
        border-radius: 50vw;
        background-color: black;
    }

    .cardCol1 {
        background-color: red;
    }

    .cardCol2 {
        background-color: blue;
    }

    .cardCol3 {
        background-color: green;
    }

    .cardCol4 {
        background-color: purple;
    }

    .cardOneInfo {
        font-family: 'Quattrocento Sans';
        font-size: 0.95em;
    }

    .cardOneBtn {
        display: flex;
        justify-content: center;
        width: 75%;
        margin: 25% auto 0;
        padding: 5% 0;
        color: white;
        font-size: 1.1em;
        background-image: linear-gradient(-180deg, #FD886E 0%, #FC3E65 100%);
        border: none;
        border-radius: 25px;
        transition: box-shadow 0.5s ease;
        box-shadow: 0 0 0 transparent;
        cursor: pointer;
    }

    .cardOneBtn:hover {
        box-shadow: 1px 1px 10px red;
    }

    .cardTwo {
        width: 90%;
        margin: 20% auto 0;
        display: flex;
        height: 400px;
        border-radius: 10px;
        -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
        box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.45);
    }

    .cardTwoLeft {
        order: 1;
        width: 50%;
        background-image: url('/images/productCard2.jpg');
        background-size: cover;
        border-radius: 10px;
    }

    .cardTwoRight {
        width: 50%;
        background-color: #fcfcf5;
        border-radius: 10px 0 0 10px;
    }

    .cardTwoContent {
        width: 80%;
        margin: 16% auto 0;
    }

    .cardTwoContent h1 {
        font-size: 1.7em;
        font-family: 'Quattrocento';
        font-weight: 600;
        margin-bottom: 5%;
    }

    .cardTwoContent h2 {
        font-family: 'Quattrocento Sans';
        font-size: 1.2em;
        letter-spacing: 1px;
        margin-bottom: 15%;
        color: #af83bba9;
    }

    .cardTwoContent p {
        font-family: 'Quattrocento Sans';
        font-size: 0.91em;
        margin-bottom: 12%;
        line-height: 22px;
    }

    .cardTwoBuy {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .cardTwoBuy span {
        font-size: 1.7em;
        font-family: 'Quattrocento';
        letter-spacing: 1px;
    }

    .cardTwoBuy button {
        width: 65%;
        padding: 6% 0;
        background-color: #af83bb;
        border: 2px solid transparent;
        color: white;
        font-weight: normal;
        font-size: 1.1em;
        border-radius: 50vw;
        letter-spacing: 1px;
        font-family: 'Quattrocento Sans';
        cursor: pointer;
        transition: all 0.4s ease;
    }

    .cardTwoBuy button:hover {
        border: solid 2px #af83bb;
        background-color: transparent;
        color: #af83bb;
        font-weight: bold;
    }

</style>
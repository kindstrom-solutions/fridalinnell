<template>
    <div class="container">
      <!-- <h1 class="page-header">Scen</h1> -->
  
      <div class="y2b-grid" style="margin-top: 8rem; background-color: #faf1dd;">
    
        <div class="text-box" style="padding-left: 1.5vw;">
             
           
            <div class="image" style="background-color: #fff;">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/spelman1.jpg">
        
      </div>
      <h4 style="background-color: #fff;">
                Spelman på Taket<br>
                Västerbottensteatern <br>
                2024/2025
            </h4>
        </div>
        <div class="video">
          <div class="video-frame">
            <iframe
              src="https://www.youtube.com/embed/w_cSfMdBvfc?wmode=opaque&amp;enablejsapi=1"
              height="480"
              width="854"
              scrolling="no"
              frameborder="0"
              allowfullscreen="">
            </iframe>
          </div>
          
        </div>
      </div>


      <div class="y2b-grid" style="background-color: #faf1dd;">
        <div class="text-box" style="padding-left: 1.5vw;">
            <div class="image" style="background-color: #fff;">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/kära_anna_poster.jpg">
        
      </div>
      <h4 style="background-color: #fff;">
                Kära Anna<br>
                Ö2 Scenkonst <br>
                2024
            </h4>

        </div>
        <div class="video">
          <div class="video-frame"> 
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkaraannamusikalen%2Fvideos%2F1469752090339852%2F&show_text=false&width=560&t=0"
              height="480"
              width="854"
              scrolling="no"
              frameborder="0"
              allowfullscreen="">
            </iframe>
          </div>
          
        </div>
        
      </div>
    
      <div class="y2b-grid" style="background-color: #faf1dd;">
        <div class="text-box" style="padding-left: 1.5vw;">
            <div class="image" style="background-color: #fff;">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/alv_logga.jpg">
        
      </div>
      <h4 style="background-color: #fff;">
                Bröderna Lejonhjärta<br>
                Astrid Lindgrens Värld<br>
                2023
            </h4>

        </div>
        <div class="video">
          <div class="video-frame"> 
            <iframe
              src="https://www.youtube.com/embed/eoS5lVSCdbY?wmode=opaque&amp;enablejsapi=1"
              height="480"
              width="854"
              scrolling="no"
              frameborder="0"
              allowfullscreen="">
            </iframe>
          </div>
          
        </div>
        
      </div>
      <div class="y2b-grid" style="background-color: #faf1dd;">
        <div class="text-box" style="padding-left: 1.5vw;">
            <div class="image" style="background-color: #fff;">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/puntila_press.jpg">
        
      </div>
      <h4 style="background-color: #fff;">
                Herr Puntila och hans dräng Matti<br>
                Göteborgs Stadsteater<br>
                2019/2020
            </h4>

        </div>
        <div class="video">
          <div class="video-frame"> 
            <iframe
              src="https://player.vimeo.com/video/368207146?title=0&amp;byline=0&amp;portrait=0&dnt=1"
              height="480"
              width="854"
              scrolling="no"
              frameborder="0"
              allowfullscreen="">
            </iframe>
          </div>
          
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    head() {
      return {
        title: 'Frida Linnell | Aktuellt'
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .page-header {
    padding: 100px 6vw 0 6vw;
    font-size: calc(4vw + 2rem);
  
    @media screen and (min-width: 800px) {
      padding: 140px 4vw 0 4vw;
    }
  }
  
  .y2b-grid {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2vw;
    row-gap: 6vw;
    padding: 3.3vmax 6vw;
  
    @media screen and (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
      padding: 3.3vmax 4vw;
    }
  
    .video {
      .video-frame {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
  
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
      .text-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        row-gap: 6vw;
        padding: 3vmax 3vw;
        //padding-right: 0px;
        position: relative;


        
        h4 {
        //font-family: 'Source Sans Pro', sans-serif;
        padding-top: 6vw;
        text-align: center;
        align-self: center;
        //padding: auto;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      .image {
    img {
        min-height: 300px;
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media screen and (min-width: 800px) {
        height: 100%;
        width: 100%;
      }


    }
}
      }
  }
  </style>
  
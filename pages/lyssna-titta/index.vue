<template>
  <div class="container">
    <h1 style="display: none;">Lyssna och titta</h1>
    <!-- <div class="videos-bg">
      <video autoplay muted loop class="left">
      <source src="/Frida_Final.mp4" type="video/mp4">
    </video>
    <video autoplay muted loop class="right">
      <source src="/Frida_Final.mp4" type="video/mp4">
    </video>
    </div> -->
    <video autoplay muted loop class="split left">
      <source src="/Frida_Final.mp4" type="video/mp4">
    </video>
    <video autoplay muted loop class="split right">
      <source src="/Frida_Final.mp4" type="video/mp4">
    </video>

    <nuxt-link to="/lyssna-titta/scen" class="page-header" style="left: 21vw;">Scen</nuxt-link>
    <nuxt-link to="/lyssna-titta/film" class="page-header" style="right: 21vw;">Film</nuxt-link>
    <!-- <div class="page-header" style="left: 21vw;">
      Scen
    </div>
    <div class="page-header" style="right: 21vw;">
      Film
    </div> -->

    <div class="spacer"></div>

    <div class="quote-section">
      <h2>“Frida Linnell river ner applåder långt innan hon har sjungit klart, och är glimrande i minirollen fru Gyllenstjärna”</h2>
      <p>— Aftonbladet</p>
    </div>

    <div class="image-gallery">
      <VueSlickCarousel v-bind="carouselSettings">
        <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/Hjärterdam.jpg">
          <div class="caption"> Alice i Underlandet / Foto Håkan Röjder</div> 
        </div>
        <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/Arken_säng.JPG">
          <div class="caption">Arken</div> 
        </div>
        <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/Fridanej.JPG">
          <div class="caption"> Signes val (Historien får liv) / Foto Tomas Polvall</div> 
        </div>
        <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/Fridayey.jpg">
          <div class="caption"> Alice i Underlandet / Foto Håkan Röjder</div> 
        </div>
         <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/Arken_Hall.JPG">
          <div class="caption"> Arken</div> 
        </div>
        <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/FamiljenAddams.jpg">
          <div class="caption">Familjen Addams / Foto Glenn Rindhoff</div>
        </div>
        <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/Smile_the_musical.jpg">
          <div class="caption">Smile the musical / Foto Johan Schildt</div>
        </div>
        <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/Company.jpg">
          <div class="caption">Company / Foto Rikard Björk</div>
        </div>
        <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/Puntilla.jpg">
          <div class="caption">Herr Puntila och hans dräng Matti / Foto Ola Kjelbye</div>
        </div>
        <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/Sisselsjul.jpg">
          <div class="caption">Sissels jul 2018</div>
        </div>
        <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/Pojkarna.jpg">
          <div class="caption">Pojkarna / Foto Staffan Berg</div>
        </div>
        <div class="image">
          <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/NarmareKanten.jpg">
          <div class="caption">Närmare Kanten / Foto Annica Engström</div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      carouselSettings: {
        arrows: true,
        dots: true,
        lasyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      },
    }
  },
  head() {
    return {
      title: 'Frida Linnell | Lyssna och titta'
    }
  }
}
</script>

<style lang="scss" scoped>
// .videos-bg {
//   display: flex;
//   height: 100%;
// }
.split {
  height: 100%;
  width: 50%;
  position: absolute;
  // z-index: 1;
  top: 0;
  overflow-x: hidden;
}

.left {
  left: 0;
  object-fit: cover;
}

.right {
  right: 0;
  object-fit: cover;
}

.page-header {
  position: absolute;
  bottom: 45vh;
  font-size: 54px;
  color: #fff;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  // @media screen and (min-width: 400px) { left: 17vw; }
  // @media screen and (min-width: 600px) { left: 24vw; }
  // @media screen and (min-width: 800px) { left: 35vw; }
  // @media screen and (min-width: 1200px) { left: 38vw; }
  // @media screen and (min-width: 1500px) { left: 41vw; }
  // @media screen and (min-width: 2000px) { left: 44vw; }
}

.spacer {
  margin-top: 100vh;
}

.y2b-grid {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2vw;
  row-gap: 6vw;
  padding: 3.3vmax 6vw;

  @media screen and (min-width: 800px) {
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

    p {
      font-family: 'Source Sans Pro', sans-serif;
      padding: 16px 0 20px 0;
    }
  }
}

.quote-section {
  display: flex;
  flex-direction: column;
  padding: 5vmax calc(20vw + 1rem);
  align-items: center;
  justify-content: center;
  min-height: 33vh;
  background-color: #fff;
  text-align: center;

  p {
    margin: 1rem 0;
  }
}

.spotify-grid {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2vw;
  row-gap: 6vw;
  padding: 3.3vmax 6vw;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 3.3vmax 4vw;
  }
}

.image-gallery {
  padding: 5vmax 8vw 60px 8vw;

  @media screen and (min-width: 800px) {
    padding: 3.3vmax 6vw;
  }

  .image {
    padding: 0 20px;
    
    img {
      width: 100%;
      margin: auto;
      height: 50vw;
      object-fit: cover;
      margin-bottom: 10px;

      @media screen and (min-width: 1200px) {
        height: 25vw;
      }

      @media screen and (min-width: 1600px) {
        height: 17vw;
      }
    }
    .caption {
      // font-family: adelle-sans;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 300;
      font-style: normal;
      letter-spacing: 0em;
      text-transform: none;
      line-height: 1.8em;
      font-size: 15px;
      text-align: center;
      margin-bottom: 6px;
    }
  }
}
</style>

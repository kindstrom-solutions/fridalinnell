<template>
  <div class="container">
    <div class="y2b-grid">
      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/dlOERc7jasI?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Frida Linnell / Showreel 2020
        </p>
      </div>
      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/brXmiCnJu6k?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Musikalen Kära Anna / delar ur läsningen på Musikalsymposiet 2020
        </p>
      </div>
    </div>
    <div class="quote-section">
      <h2>“Frida Linnell river ner applåder långt innan hon har sjungit klart, och är glimrande i minirollen fru Gyllenstjärna”</h2>
      <p>— Aftonbladet</p>
    </div>
    <div class="y2b-grid">
      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/GJht0KTzaZE?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Va Fan / ett urklipp ur musikalen Tänk/Om
        </p>
      </div>
      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/P1Er7f9wca4?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Another Life / musikalen Bridges of Madison County
        </p>
      </div>
    </div>
    <div class="spotify-grid">
      <div class="info" style="padding-right: 80px;">
        <h4 style="margin-bottom: 32px;">Närmare Kanten / Original Cast Recording</h4>
        <p>
          <em>Närmare Kanten</em> är en unik scenisk berättelse skriven av Martin Schaub, Patrick Rydman och Mattias Palm,
          i samarbete med Stiftelsen Gyllenkroken och Högskolan för Scen och Musik.
          Hela musikalen är inspelad i Svenska Grammofonstudion av originalensemblen, där Frida gjorde rollen som Isabelle.
        </p>
      </div>
      <iframe
        scrolling="no"
        frameborder="0"
        id="player"
        src="https://open.spotify.com/embed/track/2NwtBu0p14IbTeUPSLNeAR?referrer=https%3A%2F%2Ffridalinnell.se%2Fphoto-gallery"
        allowfullscreen="true"
        style="width: 100%;">
      </iframe>
    </div>
    <div class="image-gallery">
      <VueSlickCarousel v-bind="carouselSettings">
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
.container {
  padding-top: calc(6vw + 40px);

  @media screen and (min-width: 800px) {
    padding-top: calc(3.5vw + 20px);
  }
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
  background-color: #fff;
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

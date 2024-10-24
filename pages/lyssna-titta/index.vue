<template>
  <div class="container">
    <h1 style="display: none;">Lyssna och titta</h1>

    <div class="desktop-banner">
      <video 
        autoplay 
        muted 
        loop 
        class="split left" 
        @mouseover="scenHovered = true" 
        @mouseleave="scenHovered = false"
        @click="gotoScen()">
        <source src="/shortiescen.mp4" type="video/mp4">
      </video>
      <video 
        autoplay 
        muted 
        loop 
        class="split right" 
        @mouseover="filmHovered = true" 
        @mouseleave="filmHovered = false"
        @click="gotoFilm()">
        <source src="/Shortiefilm23.mp4" type="video/mp4">
      </video>

      <nuxt-link
        to="/lyssna-titta/scen"
        class="page-header hover-underline-animation"
        style="left: 21vw; position: absolute; bottom: 50vh;"
        :class="{ 'hover-underline-animation-anim': scenHovered }">
        Scen
      </nuxt-link>
      <nuxt-link
        to="/lyssna-titta/film"
        class="page-header hover-underline-animation"
        style="right: 21vw; position: absolute; bottom: 50vh;"
        :class="{ 'hover-underline-animation-anim': filmHovered }">
        Film
      </nuxt-link>
    </div>
    <div class="mobile-banner">
      <video 
        autoplay 
        muted 
        loop
        playsinline
        @mouseover="scenHovered = true" 
        @mouseleave="scenHovered = false"
        @click="gotoScen()"
        class="split">
        <source src="/shortiescen.mp4" type="video/mp4">
      </video>
      <video 
        autoplay 
        muted 
        loop
        playsinline
        @mouseover="filmHovered = true" 
        @mouseleave="filmHovered = false"
        @click="gotoFilm()"
        class="split">
        <source src="/Shortiefilm23.mp4" type="video/mp4">
      </video>

      <nuxt-link
        to="/lyssna-titta/scen"
        class="page-header hover-underline-animation"
        :class="{ 'hover-underline-animation-anim': scenHovered }"
        style="position: absolute; left: 36vw; top: 20vh; text-align: center;">
        Scen
        <div style="font-size: 16px; margin-top: -8px;">Klicka här</div>
      </nuxt-link>
      <nuxt-link
        to="/lyssna-titta/film"
        class="page-header hover-underline-animation"
        :class="{ 'hover-underline-animation-anim': filmHovered }"
        style="position: absolute; left: 36vw; bottom: 20vh; text-align: center;">
        Film
        <div style="font-size: 16px; margin-top: -8px;">Klicka här</div>
      </nuxt-link>
    </div>

    <div class="spacer"></div>
    <div class="quote-section">
      <h2>“Frida Linnell, som dotter Hodel, är ett riktigt fynd. Hon glittrar, dansar och sjunger på en nivå som vi inte alltid är vana
        att se på Västerbottensteaterns scen”</h2>
      <p>— Norrbottens-Kuriren</p>
  </div>

    <div class="image-gallery">
      <div class="image">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/DSC00119.jpeg">
        <div class="caption"> Godspell / Foto Izabella Tancredi</div>
      </div>
      <div class="image">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/hodel_and_perc.jpg">
        <div class="caption">Spelman på taket / Foto Patrick Degerman</div>
      </div>
      <div class="image">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/IMG_3587.JPG">
        <div class="caption">Botten</div>
      </div>
      <div class="image">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/IMG_2401.jpeg">
        <div class="caption">Bröderna Lejonhjärta / Foto Filippa Persson</div>
      </div>
      <div class="image">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/hodel_and_sistahs.jpg">
        <div class="caption">Spelman på taket / Foto Patrick Degerman</div>
      </div>
      <div class="image">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/IMG_3598.jpeg">
        <div class="caption">Bröderna Lejonhjärta / Foto Filippa Persson</div>
      </div>    
      <div class="image">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/IMG_2349.jpeg">
        <div class="caption">Bröderna Lejonhjärta / Foto Filippa Persson</div>
      </div>
      <div class="image">
        <img alt="Familjen Addams / Foto Glenn Rindhoff" src="/IMG_3613.jpeg">
        <div class="caption">Bröderna Lejonhjärta / Foto Filippa Persson </div>
      </div>
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
    </div>
    
  <div class="quote-section">
  <h2>“Frida Linnell river ner applåder långt innan hon har sjungit klart, och är glimrande i minirollen fru Gyllenstjärna”</h2>
  <p>— Aftonbladet</p>
</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      scenHovered: false,
      filmHovered: false
    }
  },
  head() {
    return {
      title: 'Frida Linnell | Lyssna och titta'
    }
  },
  methods: {
    gotoFilm() {
      this.$router.push('/lyssna-titta/film')
    },
    gotoScen() {
      this.$router.push('/lyssna-titta/scen')
    }
  }
}
</script>

<style lang="scss" scoped>
.desktop-banner {
  @media screen and (max-width: 799px) {
    display: none;
  }

  .split {
    height: 100%;
    width: 50%;
    position: absolute;
    top: 0;
    overflow-x: hidden;
    cursor: pointer;
  }

  .left {
    left: 0;
    object-fit: cover;
  }

  .right {
    right: 0;
    object-fit: cover;
  }
}
.mobile-banner {
  display: grid;

  @media screen and (min-width: 800px) {
    display: none;
  }
  
  .split {
    position: relative;
    height: 50vh;
    width: 100%;
    z-index: 0;
    overflow-x: hidden;
    cursor: pointer;
    object-fit: cover;
    margin: 0;
    padding: 0;
  }
}

.hover-underline-animation {
  position: relative;
  color: #FFFFFF;
  text-decoration: none;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #faf1dd;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation-anim::after {
  transform: scaleX(1);
  transform-origin: bottom left;
} 

.page-header {
  font-size: 72px;
  color: #fff;
  text-decoration: none;
  z-index: 1;
}

.spacer {
  margin-top: 100vh;

  @media screen and (max-width: 799px) {
    display: none;
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

.image-gallery {
  background-color: #faf1dd;
  padding: 5vmax 6vw 60px 6vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;

  @media screen and (min-width: 700px) {
    padding: 3.3vmax 5vw;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1600px) {
    padding: 3.3vmax 5vw;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .image {
    img {
      width: 100%;
      margin: auto;
      height: 50vw;
      object-fit: cover;
      margin-bottom: 4px;

      @media screen and (min-width: 1200px) {
        height: 25vw;
      }

      @media screen and (min-width: 1600px) {
        height: 17vw;
      }
    }
    .caption {
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

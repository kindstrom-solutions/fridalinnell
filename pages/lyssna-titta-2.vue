<template>
  <div class="container" style="height: 100vh;">
    
    <!-- <div class="video-buttons">
      <h1>Film</h1>
      <h1>Scen</h1>
    </div> -->

    <div class="video-buttons">
      <h1 style="position: absolute; left: 5vw; top: 150px; color: #fff;">Scen</h1>
      <h1 style="position: absolute; right: 5vw; top: 150px; color: #fff;">Film</h1>
      <video autoplay muted loop class="video-button" @click="navigateToFilm()">
        <source src="/Frida_Final.mp4" type="video/mp4">
      </video>
      <video autoplay muted loop class="video-button" @click="navigateToScene()">
        <source src="/Frida_Final.mp4" type="video/mp4">
      </video>
    </div>
<!-- 
    <div class="page-header">
      Lyssna och titta
    </div> -->
  </div>
</template>

<script>
export default {
  components: {},
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
  },
  methods: {
    navigateToFilm() {
      console.log('Go to film')
    },
    navigateToScene() {
      console.log('Go to scene')
    }
  }
}
</script>

<style lang="scss" scoped>
.video-button {
  height: 60vh;
  width: 100%;
  object-fit: cover;
  margin: 1rem;
  cursor: pointer;
}
// .bg-video-1 {
//   height: 100vh;
//   width: 50%;
//   object-fit: cover;
//   position: relative;
// }

// .bg-video-2 {
//   height: 100vh;
//   width: 50%;
//   object-fit: cover;
//   position: relative;
// }

.video-buttons {
  background-color: red;
  padding: 140px 3vw 40px 3vw;
  display: flex;
  height: 100%;
}

.page-header {
  position: absolute;
  left: 8vw;
  bottom: 45vh;
  font-size: 54px;
  color: #fff;

  @media screen and (min-width: 400px) { left: 17vw; }
  @media screen and (min-width: 600px) { left: 24vw; }
  @media screen and (min-width: 800px) { left: 35vw; }
  @media screen and (min-width: 1200px) { left: 38vw; }
  @media screen and (min-width: 1500px) { left: 41vw; }
  @media screen and (min-width: 2000px) { left: 44vw; }
}
</style>

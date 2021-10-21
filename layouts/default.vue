<template>
  <div>
    <div class="mobile-menu" :class="{ visible: overlayVisible }">
      <a class="closebtn" @click="hideOverlay()">&times;</a>
      <div class="overlay-content">
        <nuxt-link to="/om-mig">Om mig</nuxt-link>
        <nuxt-link to="/cv">CV</nuxt-link>
        <nuxt-link to="/lyssna-titta">Lyssna och titta</nuxt-link>
        <nuxt-link to="/kontakt">Kontakt</nuxt-link>
      </div>
    </div>
    <header :class="textColor" :style="{ width: overlayVisible ? '50%' : '100%' }">
      <nuxt-link to="/" class="site-title">Frida Linnell</nuxt-link>
      <div v-if="!overlayVisible" class="links">
        <nuxt-link to="/om-mig" :class="{ active: $route.name === 'om-mig' }">Om mig</nuxt-link>
        <nuxt-link to="/cv" :class="{ active: $route.name === 'cv' }">CV</nuxt-link>
        <nuxt-link to="/lyssna-titta" :class="{ active: $route.name === 'lyssna-titta' }">Lyssna och titta</nuxt-link>
        <nuxt-link to="/kontakt" :class="{ active: $route.name === 'kontakt' }">Kontakt</nuxt-link>
      </div>
      <div class="hamburger" @click="showOverlay()" :style="{ display: overlayVisible ? 'none' : '' }">
        &#9776;
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlayVisible: false
    }
  },
  methods: {
    showOverlay() {
      this.overlayVisible = true
    },
    hideOverlay() {
      this.overlayVisible = false
    }
  },
  computed: {
    textColor() {
      if (this.overlayVisible) {
        return 'black-text'
      }
      const route = this.$route.name
      if (route === 'cv' || route === 'kontakt') {
        return 'black-text'
      } else {
        return ''
      }
    }
  },
  watch:{
    $route (to, from){
      const vue = this
      setTimeout(() => {
        vue.overlayVisible = false
      }, 100)
    }
  }
}
</script>

<style lang="scss">
html {
  font-family:
    'Cormorant Garamond',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #faf1dd;
  color: #000;

  a {
    color: #be9e63;
  }
}

header {
  display: flex;
  align-items: center;
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  line-height: 1;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  pointer-events: none;
  box-sizing: border-box;
  padding: 6vw;
  pointer-events: auto;
  color: #fff;

  @media screen and (min-width: 800px) {
    padding: 2vw 4vw;
  }

  .site-title {
    font-size: calc(1.3vw + 1.3rem);
    font-weight: 500;
    letter-spacing: 0em;
    text-transform: none;
    line-height: 1.4em;
    text-decoration: none;
    backface-visibility: hidden;
    color: #fff;
  }

  .links {
    margin-left: auto;
    font-family: 'Source Sans Pro', sans-serif;
    display: none;

    @media screen and (min-width: 800px) {
      display: block;
    }
    
    a {
      font-size: 18px;
      font-style: normal;
      letter-spacing: 0em;
      text-transform: none;
      line-height: 1.8em;
      color: #fff;
      text-decoration: none;
      backface-visibility: hidden;
      padding-bottom: 6px;

      &:not(:first-child) {
        margin-left: 1.3vw;
      }
    }
  }

  .hamburger {
    margin-left: auto;
    font-size: 36px;
    cursor: pointer;

    @media screen and (min-width: 800px) {
      display: none;
    }
  }
}

.active {
  background-repeat: repeat-x;
  background-image: linear-gradient(to right,currentColor 100%, currentColor 0);
  background-size: 1px 1px;
  background-position: 0 100%;
  white-space: initial;
}

.black-text {
  * {
    color: #000 !important;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.mobile-menu {
  opacity: 0;
  display: none;
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: #faf1dd;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
  font-family: 'Source Sans Pro', sans-serif;

  &.visible {
    opacity: 1;
    display: block;
  }

  a {
    padding: 8px;
    text-decoration: none;
    font-size: 6.6vmin;
    color: #000;
    display: block;
    transition: 0.3s;

    &:hover, &:focus {
      color: #be9e63;
    }

    &.current {
      color: #fff;
    }
  }

  .closebtn {
    position: absolute;
    top: 0;
    right: 20px;
    font-size: 60px;
    cursor: pointer;
    z-index: 9000;
  }

  .overlay-content {
    position: relative;
    top: 25%; /* 25% from the top */
    width: 100%; /* 100% width */
    text-align: center; /* Centered text/links */
    margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
  }
}

h1, h2, h3, h4 {
  font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
  line-height: 1.2em;
  font-family: Cormorant Garamond;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.4em;
  font-size: 2rem
}

h1 {
  line-height: 1.232
}
@media screen and (min-width: 0) and (max-width:calc(1944px - 1px)) and (orientation:landscape) {
  h1 {
    font-size:calc(3.6vw + 1rem)
  }
}
@media screen and (min-width: 0) and (max-width:calc(1944px - 1px)) and (orientation:portrait) {
  h1 {
    font-size:calc(3.6vh + 1rem)
  }
}
@media screen and (min-width: 1944px) {
  h1 {
    font-size:4rem
  }
}

h2 {
  line-height: 1.2992
}
@media screen and (min-width: 0) and (max-width:calc(1944px - 1px)) and (orientation:landscape) {
  h2 {
    font-size:calc(2.16vw + 1rem)
  }
}
@media screen and (min-width: 0) and (max-width:calc(1944px - 1px)) and (orientation:portrait) {
  h2 {
    font-size:calc(2.16vh + 1rem)
  }
}
@media screen and (min-width: 1944px) {
  h2 {
    font-size:2.8rem
  }
}

h3 {
  line-height: 1.3328
}
@media screen and (min-width: 0) and (max-width:calc(1944px - 1px)) and (orientation:landscape) {
  h3 {
    font-size:calc(1.44vw + 1rem)
  }
}
@media screen and (min-width: 0) and (max-width:calc(1944px - 1px)) and (orientation:portrait) {
  h3 {
    font-size:calc(1.44vh + 1rem)
  }
}
@media screen and (min-width: 1944px) {
  h3 {
    font-size:2.2rem
  }
}

h4 {
  line-height: 1.3664
}
@media screen and (min-width: 0) and (max-width:calc(1944px - 1px)) and (orientation:landscape) {
  h4 {
    font-size:calc(.72vw + 1rem)
  }
}
@media screen and (min-width: 0) and (max-width:calc(1944px - 1px)) and (orientation:portrait) {
  h4 {
    font-size:calc(.72vh + 1rem)
  }
}
@media screen and (min-width: 1944px) {
  h4 {
    font-size:1.6rem
  }
}

p {
  // font-family: adelle-sans;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  font-size: 16px;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.8em;
  line-height: 1.8;
}

.slick-prev:before, .slick-next:before {
  color: #000 !important;
}
</style>

<template>
  <div>
    <div class="mobile-menu" :class="{ visible: overlayVisible }">
      <a class="closebtn" @click="hideOverlay()" style="cursor: pointer;">&times;</a>
      <div class="overlay-content">
        <nuxt-link to="/om-mig">Om mig</nuxt-link>
        <nuxt-link to="/cv">CV</nuxt-link>
        <nuxt-link to="/lyssna-titta">Lyssna och titta</nuxt-link>
        <nuxt-link to="/kontakt">Kontakt</nuxt-link>
      </div>
    </div>
    <header :class="textColor">
      <nuxt-link to="/" class="site-title">Frida Linnell</nuxt-link>
      <div class="links">
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
      const route = this.$route.name
      if (route === 'cv' || route === 'lyssna-titta' || route === 'kontakt') {
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
  background-color: #fdf0e6;
  color: #000;

  a {
    color: #f08e80;
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
    font-size: calc(1.4vw + 1rem);
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
      font-size: 16px;
      font-style: normal;
      letter-spacing: 0em;
      text-transform: none;
      line-height: 1.8em;
      color: #fff;
      text-decoration: none;
      backface-visibility: hidden;

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
  background-color: #fdf0e6;
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
      color: #f08e80;
    }

    &.current {
      color: #fff;
    }
  }

  .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
  }

  .overlay-content {
    position: relative;
    top: 25%; /* 25% from the top */
    width: 100%; /* 100% width */
    text-align: center; /* Centered text/links */
    margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
  }
}
</style>

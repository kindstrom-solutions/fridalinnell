<template>
  <div>
    <header :class="textColor">
      <nuxt-link to="/" class="site-title">Frida Linnell</nuxt-link>
      <div class="links">
        <nuxt-link to="/om-mig" :class="{ active: $route.name === 'om-mig' }">Om mig</nuxt-link>
        <nuxt-link to="/cv" :class="{ active: $route.name === 'cv' }">CV</nuxt-link>
        <nuxt-link to="/lyssna-titta" :class="{ active: $route.name === 'lyssna-titta' }">Lyssna och titta</nuxt-link>
        <nuxt-link to="/kontakt" :class="{ active: $route.name === 'kontakt' }">Kontakt</nuxt-link>
      </div>
      <div class="hamburger">
        &#9776;
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.textColor)
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
  padding-top: 2vw;
  padding-bottom: 2vw;
  padding-left: 4vw;
  padding-right: 4vw;
  pointer-events: auto;
  color: #fff;

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
</style>

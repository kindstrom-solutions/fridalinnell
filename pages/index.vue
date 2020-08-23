<template>
  <div class="container">
    <h1 style="display: none;">skådespelerska / sångerska / musikalartist</h1>
    <div class="big-image">
      <img
        alt=""
        style="display: block; width: 100%; height: 100%; object-position: 69.9098% 0%; object-fit: cover;"
        src="/DSC_4894.jpg">
    </div>
    <div class="text-section">
      <h3>skådespelerska / sångerska / musikalartist</h3>
    </div>
    <div class="big-image info-section expand" style="position: relative;">
      <div class="info-box">
        <div class="box-welcome">
          Välkommen
        </div>
        <div class="box-text">
          Frida Linnell är utbildad vid Högskolan för Scen och Musik i Göteborg och arbetar nu som frilansande skådespelerska och musikalartist.
          Frida sågs senast i läsningen av den nyskrivna musikalen Kära Anna i rollen som Alex, i samband med Musikalsymposiet på Smålands Musik och Teater i maj 2020.
        </div>
        <nuxt-link to="/om-mig" class="box-button">Om mig</nuxt-link>
      </div>
      <p style="position: absolute; bottom: 10px; right: 16px; color: #fff;">Foton Linda Brelin</p>
    </div>
    <div class="quote-section">
      <h2>“I Frida Linnell bor en framtida musikalstjärna helt klart”</h2>
      <p>— Kulturnytt</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.big-image {
  height: 100vh;

  &.expand {
    height: 200vh;

    @media screen and (min-width: 400px) {
      height: 150vh;
    }

    @media screen and (min-width: 800px) {
      height: 100vh;
    }
  }
}

.info-section {
  background-image: url('/DSC_5080.jpg');
  background-size: cover;
  background-position: center;
  padding: 8vw 6vw 4vw 6vw;

  @media screen and (min-width: 800px) {
    padding: 5vw 10vw 4vw 10vw;
  }

  @media screen and (min-width: 1400px) {
    padding: 5vw 6vw 4vw 71%;
  }

  .info-box {
    padding: 40px 40px 55px 40px;
    background-color: #fff;
    
    .box-welcome {
      font-size: 40px;
      color: #000;
      margin-bottom: 30px;

      @media screen and (min-width: 350px) {
        font-size: 48px;
      }
    }
    .box-text {
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 300;
      margin-bottom: 50px;
      font-size: 18px;
      color: #000;

      @media screen and (min-width: 350px) {
        font-size: 24px;
      }
    }
    .box-button {
      font-family: 'Source Sans Pro', sans-serif;
      padding: 16px;
      width: 104px;
      border-radius: 4px;
      font-size: 20px;
      color: #fff;
      background-color: #f08e80;
      border-color: #f08e80;
      text-decoration: none;
    }
  }
}

.text-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 33vh;
  background-color: #fff;
  font-size: calc(1.44vw + 1rem);
  text-align: center;
}

.quote-section {
  display: flex;
  flex-direction: column;
  padding: 5vmax calc(20vw + 1rem);
  align-items: center;
  justify-content: center;
  min-height: 33vh;
  text-align: center;

  p {
    margin: 1rem 0;
  }
}
</style>
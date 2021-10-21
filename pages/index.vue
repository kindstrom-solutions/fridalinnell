<template>
  <div class="container">
    <h1 style="display: none;">skådespelerska / sångerska / musikalartist</h1>
    <div class="big-image">
      <img
        alt=""
        style="display: block; width: 100%; height: 100%; object-position: 69.9098% 0%; object-fit: cover;"
        src="/23.jpg">
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
          Frida Linnell är utbildad vid Högskolan för Scen och Musik i Göteborg och arbetar nu som
          frilansande skådespelerska inom flera konstnärliga områden. Frida sågs senast i läsningen av
          den nyskrivna musikalen <em>Kära Anna</em> i rollen som Alex, i samband med Musikalsymposiet på
          Smålands Musik och Teater i maj 2020. Under sommaren 2021 medverkar hon i den historiska
          föreställningen <em>Signes val</em> i Historien får liv på Fredriksdal i Helsingborg.
          Följande höst är Frida aktuell i <em>Alice i Underlandet</em> på Kristianstad Teater i rollen som bl.a. Hjärter
          Dam.
        </div>
        <nuxt-link to="/om-mig" class="box-button">Om mig</nuxt-link>
      </div>
      <p style="position: absolute; bottom: 10px; right: 16px; color: #fff;">Foto POINT OF YOU</p>
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
  background-image: url('/20(1).jpg');
  background-size: cover;
  background-position: center;
  padding: 8vw 6vw 4vw 6vw;

  @media screen and (min-width: 800px) {
    padding: 5vw 10vw 4vw 10vw;
  }

  @media screen and (min-width: 1400px) {
    padding: 5vw 60% 4vw 6vw;
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
        font-size: 20px;
      }
    }
    .box-button {
      font-family: 'Source Sans Pro', sans-serif;
      padding: 16px;
      width: 104px;
      border-radius: 4px;
      font-size: 20px;
      color: #fff;
      background-color: #be9e63;
      border-color: #be9e63;
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
<template>
  <div class="container">
    <div class="big-image">
      <img
        alt=""
        style="display: block; width: 100%; height: 100%; object-position: 69.9098% 0%; object-fit: cover;"
        src="/DSC_4894.jpg">
    </div>
    <div class="text-section">
      <h3>skådespelerska / sångerska / musikalartist</h3>
    </div>
    <div class="big-image info-section">
      <div class="image-welcome">
        Välkommen
      </div>
      <div class="image-text">
        Frida Linnell är utbildad vid Högskolan för Scen och Musik i Göteborg och arbetar nu som frilansande skådespelerska och musikalartist.
        Frida sågs senast i läsningen av den nyskrivna musikalen Kära Anna i rollen som Alex, i samband med Musikalsymposiet på Smålands Musik och Teater i maj 2020.
      </div>
      <nuxt-link to="/om-mig" class="image-button">Om mig</nuxt-link>
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
}

.info-section {
  background-image: url('/DSC_5080.jpg');
  background-size: cover;
  background-position: center;
  padding: 8vw 4vw 4vw 4vw;

  @media screen and (min-width: 800px) {
    padding: 5vw 10vw 4vw 10vw;
  }

  .image-welcome {
    padding: 0 40px;
    font-size: 48px;
    color: #fff;
    margin-bottom: 30px;
  }
  .image-text {
    padding: 0 40px;
    margin-bottom: 60px;
    font-size: 24px;
    color: #fff;
  }
  .image-button {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0 40px;
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
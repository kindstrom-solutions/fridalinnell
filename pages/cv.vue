<template>
  <div class="container">
    <div class="top-images">
      <div class="image-gallery">
        <div class="image">
          <img
            alt="Foton Linda Brelin"
            style="width: 100%; height: 100%; object-position: 49% 0%; object-fit: cover;"
            src="/DSC_5121.jpg">
        </div>
        <div class="image">
          <img
            alt="DSC_4836 kopiera.jpg"
            style="width: 100%; height: 100%; object-position: 46% 19.9565%; object-fit: cover;"
            src="/DSC_4836.jpg">
        </div>
      </div>
      <p>
        Foton: Linda Brelin
      </p>
      <div class="page-header">
        CV
      </div>
    </div>
    <div class="cv-section">
      <h4>Utbildning</h4>
      <p>2017 - 2020 / Konstnärlig kandidatutbildning i musikal / Högskolan för Scen och Musik, Göteborg</p>
      <p>2015 - 2017 / Musikalartistutbildning / Kulturama, Stockholm</p>
      <p>2014 / 1 Year Full-time Intensive Diploma in Musical Theatre / Associated Studios, London</p>
    </div>
    <div class="scene-section">
      <h4>Scenisk erfarenhet</h4>
      <p>2020 / <a href="https://www.facebook.com/karaannamusikalen/">Kära Anna</a> (Reading) / Alex / Smålands Musik och Teater</p>
      <p>2019/2020 / <a href="https://stadsteatern.goteborg.se/pa-scen/2019-2020/herr-puntila-och-hans-drang-matti/">Herr Puntila och hans dräng Matti</a> / Husan Fina, Lagårdspigan, Fru Gyllenstjärna / Göteborgs Stadsteater</p>
      <p>2018 / Sissel Kyrkjebö’s Jul 2018 / Gästsolist / Lisebergshallen</p>
      <p>2017 / Familjen Addams / Gammelmor / Kolhusteatern</p>
      <p>2016 / Stand-in-Artist Eurovision Song Contest / 1944 av Jamala / Globen (SVT)</p>
      <h4 style="margin-top: 60px;">Scenisk erfarenhet under utbildning</h4>
      <p>2019 / <a href="https://www.facebook.com/pojkarnamusikalen/">Pojkarna</a> (Reading) / Momo / GöteborgsOperan</p>
      <p>2019 / <a href="https://musicalbridges.se/">Närmare Kanten</a> / Isabelle / Högskolan för Scen och Musik</p>
      <p>2018 / K+M+R+L / Linda / Högskolan för Scen och Musik</p>
      <p>2018 / Musikal från början (Devising) / Ensemble / Högskolan för Scen och Musik</p>
      <p>2018 / <a href="https://www.facebook.com/raoulwallenbergmusical/">Raoul</a> (Reading) / Ensemble / Smålands Musik och Teater</p>
      <p>2018 / Company / Laura (Harry omskriven till kvinna) / Högskolan för Scen och Musik</p>
      <p>2017 / Smile the musical / Doria Hudson / Kulturama</p>
      <p>2016 / Heathers / Ensemble / Kulturama</p>
      <p>2014 / A Little Night Music / Anne Egerman / Associated Studios</p>
    </div>
    <div class="other-section">
      <p>Röst / Sopran</p>
      <p>Födelseår / 1994</p>
      <p>Längd / 168 cm</p>
      <p>Språk / Svenska, engelska, enklare spanska</p>
      <p>Dialekt / Östgötska, scensvenska</p>
      <p>Dans / God dansare och behärskar jazz och balett mycket väl. Behärskar även enklare modern, stepp och street</p>
      <p>Övrigt / Gymnastik, notläsning, självlärd på gitarr, B-körkort</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.top-images {
  padding: 140px 6vw 40px 6vw;
  background-color: #fff;

  @media screen and (min-width: 800px) {
    padding: 140px 4vw 40px 4vw;
  }
  
  .image-gallery {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2vw;
    row-gap: 2vw;

    @media screen and (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }

    .image {
      padding-bottom: 100%;
      overflow: hidden;
      position: relative;

      img {
        position: absolute;
      }
    }
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    margin-bottom: 20px;
    padding: 10px 0 20px 0;
    font-weight: 300;
  }
}

.page-header {
  font-size: 52px;
}

.cv-section, .scene-section, .other-section {
  padding: 70px 6vw;

  @media screen and (min-width: 800px) {
    padding: 70px 4vw;
  }

  h4 {
    font-size: 24px;
    margin-bottom: 32px;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    margin-bottom: 20px;
    font-weight: 300;
  }
}

.scene-section {
  background-color: #fff;
}
</style>

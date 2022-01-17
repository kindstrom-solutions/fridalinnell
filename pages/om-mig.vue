<template>
  <div class="container">
    <h1 style="display: none;">Om mig</h1>
    <div class="big-image">
      <div class="overlay"></div>
      <div class="page-header">
        Om mig
      </div>
      <img
        alt=""
        style="width: 100%; height: 100%; object-position: 52.9963% 23.4543%; object-fit: cover;"
        src="/15.jpg">
    </div>
    <div class="about-section">
      <div class="photo">
        <img src="/6.jpg">
        <p>Foto POINT OF YOU</p>
      </div>
      <div class="about-text">
        <p>
          Jag är Frida. Uppvuxen på schlätten utanför Linköping och har numera min bas i Stockholm.
          Jag är utbildad vid Högskolan för Scen och Musik i Göteborg, och även från förberedande
          utbildningar både på Kulturama i Stockholm och vid Associated Studios i London.</p>
        <p>
          På pappret musikalartist, javisst men, sjungande skådespelerska – så brukar jag hellre uttrycka det,
          eftersom min konstnärliga passion ligger i skådespeleriet. Det var även där mitt intresse för
          scenkonst startade för snart sisådär tjugo år sedan, då jag varje fredagseftermiddag lekte
          rövare i en av Linköpings amatörteatergrupper.
        </p>
        <p>
          Under hela min kärlekshistoria med scenkonsten har jag provat på både det ena och det andra, och mitt fokus har således blivit att hålla blicken bred utan att tumma på mina konstnärliga värderingar. Förutom en hel rad varierande musikaluppsättningar, hade
          jag exempelvis den annorlunda förmånen att som musikalstudent göra praktik i Bertolt Brechts <em>Herr Puntila och hans dräng Matti </em>på Göteborgs Stadsteater under 2019/2020. Jag har också flitig engagerat mig i
          <em>Musikalplattforms</em> vision om att lyfta fram nyskriven svensk musikal - där jag under Musikalsymposiet 2020 på Smålands Musik och Teater, gjorde den mycket
          uppskattade insatsen som Alex i musikalen <em>Kära Anna </em>skriven av Oscar Collin och Pia Ternström. Nuförtiden arbetar jag dessutom i studion med röstjobb i form av dubbning och
          röstskådespeleri. I framtiden hoppas jag kunna ta min gestaltning till nya miljöer där jag kan
          få chansen att filma.
        </p>
        <p>
          Jag är hopplöst kär i gestaltning och det sceniska uttrycket. Det bara är så. Jag är ett funny
          bone, en drama queen och ett känslospröt förkroppsligat i en och samma lyxförpackning,
          med varsam hänsyn till textens myriader av möjligheter, som finns för den lycklige som får
          hålla på med skådespeleri.    
        </p>
        <p>
          Hösten 2021 medverkade jag i <em>Alice i Underlandet</em> i rollen som bl.a. Hjärter Dam. Läs mer <a href="https://www.underhallningspatrullen.se/forestallning/Alice-i-Underlandet">här</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Frida Linnell | Om mig'
    }
  }
}
</script>

<style lang="scss" scoped>
.big-image {
  height: 100vh;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #0b0d63;
    opacity: 0.15;
  }

  .page-header {
    position: absolute;
    left: 6vw;
    bottom: 50px;
    font-size: 52px;
    color: #fff;

    @media screen and (min-width: 800px) {
      left: 4vw;
    }
  }
}

.about-section {
  padding: 70px 6vw;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 70px 4vw;
  }

  img {
    width: 100%;
  }

  p {
    margin-top: 10px;
  }

  .about-text {
    p {
      padding-top: 20px;
      margin-bottom: 20px;

      @media screen and (min-width: 800px) {
        padding-top: 0;
        padding-left: 20px;
      }
    }
  }
}
</style>

<template>
  <div class="container">
    <div class="big-image">
      <div class="overlay"></div>
      <div class="page-header">
        Om mig
      </div>
        <img alt="" data-src="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f196bcda9f2de3330792c2a/1595501574960/DSC_4978+kopiera.jpg" data-image="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f196bcda9f2de3330792c2a/1595501574960/DSC_4978+kopiera.jpg" data-image-dimensions="2000x2996" data-image-focal-point="0.5299625468164794,0.3750586029067041" data-load="false" data-parent-ratio="1.3" style="width: 100%; height: 100%; object-position: 52.9963% 23.4543%; object-fit: cover;" class="" data-image-resolution="2500w" src="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f196bcda9f2de3330792c2a/1595501574960/DSC_4978+kopiera.jpg?format=2500w">
    </div>
    <div class="about-section">
      <div class="photo">
        <img src="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f196da814b8344cfd66f406/1595508669611/DSC_4891+kopiera.jpg?format=1000w">
        <p>Foton Linda Brelin</p>
      </div>
      <div class="about-text">
        <p>
          Jag är Frida. Uppvuxen på schlätten utanför Linköping och har numera min bas i Stockholm. Jag är utbildad musikalartist vid Högskolan för Scen och Musik i Göteborg och även från musikalartistutbildningen på Kulturama i Stockholm. Min
          allra första professionella träning gjorde jag under ett år i London vid Associated Studios Full-time Intensive Diploma in Musical Theatre.
        </p>
        <p>
          Musikalartist, javisst men, sjungande skådespelerska - så brukar jag hellre uttrycka det, eftersom min konstnärliga passion ligger i skådespeleriet. Det var även så mitt intresse för scenkonst startade för snart sisådär tjugo år sedan,
          då jag lekte rövare i en av Linköpings amatörteatergrupper varje fredagseftermiddag. Mitt möte med musikal kom först senare i livet men sedan dess har vår kärleksrelation minst sagt spirat. Det har varit en lång och tuff väg, men jag är
          idag stolt över att kalla mig själv frilansande skådespelerska och musikalartist.
        </p>
        <p>
          Under mina utbildningsår har jag provat på både det ena och det andra, och mitt fokus har således blivit att hålla blicken bred utan att tumma på mina konstnärliga värderingar. Förutom en hel rad varierande musikaluppsättningar, hade
          jag exempelvis den annorlunda förmånen att som musikalstudent göra praktik i föreställningen av Bertolt Brechts <em>Herr Puntila och hans Dräng Matti </em>på Göteborgs Stadsteater under 2019/2020. Jag har också flitig engagerat mig i
          <em>Musikalplattforms</em> vision om att lyfta fram nyskriven svensk musikal - där jag senast gjorde mitt första jobb i form av insatsen som Alex i musikalen <em>Kära Anna </em>skriven av Oscar Collin och Pia Ternström. I framtiden
          hoppas jag kunna ta min gestaltning till nya miljöer så som inom röstskådespeleri och dubbning.
        </p>
        <p>
          Jag är hopplöst kär i det sceniska uttrycket. Det bara är så. Jag är ett funny bone, en dramaqueen och ett känslospröt förkroppsligat i en och samma lyxförpackning, med varsam hänsyn till textens myriader av möjligheter för den lycklige
          som får hålla på med skådespeleri.
        </p>
        <p>
          Hösten 2020 skulle jag synts som både Hjärter Dam och Påskharen på Kristianstad Teater i Underhållningspatrullens uppsättning av <em>Alice i Underlandet</em>, men pga. rådande samhällssituation blir föreställningen dessvärre inställd.
          Läs mer <a href="https://www.underhallningspatrullen.se/forestallning/Alice-i-Underlandet">här</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.big-image {
  height: 100vh;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0b0d63;
    opacity: 0.15;
  }

  .page-header {
    position: absolute;
    left: 40px;
    bottom: 50px;
    font-size: 52px;
    color: #fff;
  }
}

.about-section {
  padding: 70px 40px;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  img {
    width: 100%;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
  }

  .about-text {
    p {
      font-family: 'Source Sans Pro', sans-serif;
      padding-top: 20px;
      margin-bottom: 20px;
      font-weight: 300;

      @media screen and (min-width: 700px) {
        padding-top: 0;
        padding-left: 20px;
      }
    }
  }
}
</style>

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
        style="width: 100%; height: 100%; object-position: 47.996% 0; object-fit: cover;"
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
          På pappret musikalartist, javisst men, sjungande skådespelerska – det är ett bättre sätt att
          beskriva mig och det jag är bäst på. Min konstnärliga passion ligger i skådespeleriet. Det var
          nämligen teatern jag förälskade mig i för sisådär tjugo år sedan, då jag varje
          fredagseftermiddag tillsammans med min bästa vän lekte rövare i en av Linköpings
          amatörteatergrupper. Pladask, och på den vägen var det.
        </p>
        <p>
          Som yrkesperson har jag valt att hålla blicken bred utan att tumma på mina konstnärliga
          värderingar vilket gör att jag gladeligen arbetar med både talad och sjungen teater. På scen har
          jag exempelvis synts i rollen som Hodel i den klassiska musikalen <em>Spelman på taket</em>
          på Västerbottensteatern, i rollen som Hjärter Dam i <em>Alice i Underlandet</em> på
          Kristianstad Teater och i musikteaterföreställningen av Bertolt Brechts <em>Puntila och hans
          Dräng Matti</em> på Göteborgs Stadsteater. Jag har även arbetat mycket med 
          olika former av teaterberättande koncept på bl.a. Fredriksdal,
          Skansen och Astrid Lindgrens Värld där interaktiv teater och improvisation varit naturliga
          delar av uttrycket. Jag arbetar dessutom i studion (Iyuno &amp; Eurotroll) med dubbning och
          röstskådespeleri och framöver hoppas jag fortsätta utöka min erfarenhet av att jobba framför
          kameran.
        </p>
        <p>
          Jag har ett extra öga för nyskrivna svenska verk. Frågan har kommit att flytta sig närmast
          hjärtat efter att jag haft förmånen att delta i flertalet kreativa skapandeprocesser genom åren.
          Att förädla ett verk i sin tillverkningsfas med hjälp av skådespelarens blick är verkligen något
          som både utvecklar verket i sig men också skådespelarens sätt att se, förstå och hantera text.
          Mest uppmärksammad är jag för min tolkning av Alex i den nyskrivna musikalen <em>Kära Anna</em>,
          där jag medverkat under de senaste två läsningarna som gjorts av verket; både på Musikalsymposiet
          2020 på Smålands Musik och Teater och på Ö2 Scenkonst i Stockholm under våren 2024.    
        </p>
        <p>
          Jag är hopplöst kär i gestaltning och det sceniska uttrycket. Det bara är så. Jag är ett funny
          bone, en drama queen och ett känslospröt förkroppsligat i en och samma lyxförpackning, med
          varsam hänsyn till textens myriader av möjligheter, som finns för den lycklige som får hålla
          på med skådespeleri.
        </p>
        <p>
          Senare i år återvänder jag till Västerbottensteatern och rollen som
Hodel i <em>Spelman på Taket</em> regisserad av Ronny Danielsson.
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
  background-color: #faf1dd;
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

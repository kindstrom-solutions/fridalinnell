<template>
  <div class="container">
    <div class="y2b-grid" style="padding-top: 8vw;">
      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/dlOERc7jasI?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Frida Linnell / Showreel 2020
        </p>
      </div>
      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/brXmiCnJu6k?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Musikalen Kära Anna / delar ur läsningen på Musikalsymposiet 2020
        </p>
      </div>
    </div>
    <div class="quote-section">
      <h2>“Frida Linnell river ner applåder långt innan hon har sjungit klart, och är glimrande i minirollen fru Gyllenstjärna”</h2>
      <p>— Aftonbladet</p>
    </div>
    <div class="y2b-grid">
      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/GJht0KTzaZE?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Va Fan / ett urklipp ur musikalen Tänk/Om
        </p>
      </div>
      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/P1Er7f9wca4?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Another Life / musikalen Bridges of Madison County
        </p>
      </div>
    </div>
    <div class="spotify-grid">
      <div class="info" style="padding-right: 80px;">
        <h4>Närmare Kanten / Original Cast Recording</h4>
        <p>
          <em>Närmare Kanten</em> är en unik scenisk berättelse skriven av Martin Schaub, Patrick Rydman och Mattias Palm,
          i samarbete med Stiftelsen Gyllenkroken och Högskolan för Scen och Musik.
          Hela musikalen är inspelad i Svenska Grammofonstudion av originalensemblen, där Frida gjorde rollen som Isabelle.
        </p>
      </div>
      <iframe
        scrolling="no"
        frameborder="0"
        id="player"
        src="https://open.spotify.com/embed/track/2NwtBu0p14IbTeUPSLNeAR?referrer=https%3A%2F%2Ffridalinnell.se%2Fphoto-gallery"
        allowfullscreen="true"
        style="width: 100%; height: 100%;">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.y2b-grid {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 3.3vmax 4vw;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  .video {
    .video-frame {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      max-width: 100%;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    p {
      font-family: 'Source Sans Pro', sans-serif;
      padding: 16px 0 20px 0;
    }
  }
}

.quote-section {
  display: flex;
  flex-direction: column;
  padding: 0 calc(20vw + 1rem) 16px calc(20vw + 1rem);
  align-items: center;
  justify-content: center;
  min-height: 33vh;
  background-color: #fff;

  h2 {
    margin: 2rem 0;
    text-align: center;
    font-size: calc(2.16vw + 1rem);
    line-height: 1.2992;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;

    @media screen and (min-width: 1944px) {
      font-size: 2.8rem;
    }
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    margin: 1rem 0;
  }
}

.spotify-grid {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 3.3vmax 4vw;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  h4 {
    font-size: calc(.72vw +  1rem);
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    margin-bottom: 32px;

    @media screen and (min-width: 1944px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }
}
</style>

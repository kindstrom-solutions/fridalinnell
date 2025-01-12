<template>
  <div class="container">
    <!-- <h1 class="page-header">Scen</h1> -->

    <div class="y2b-grid" style="margin-top: 8rem; background-color: #fff;">
      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/gs4Asj6oPnM?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Stanna kvar / Kära Anna
        </p>
      </div>
      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/HEa8hNwzA5g?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Delar ur Kära Anna 
        </p>
      </div>
    </div>

    <div class="y2b-grid" style="background-color: #fff;">
      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/R27RoEEF_YQ?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Här hos mig / Godspell
        </p>
      </div>
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
    </div>
    <div class="y2b-grid" style="background-color: #fff;">
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
        <h4 style="margin-bottom: 32px;">Närmare Kanten / Original Cast Recording</h4>
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
        style="width: 100%;">
      </iframe>
    </div>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'Frida Linnell | Lyssna och titta'
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  padding: 100px 6vw 0 6vw;
  font-size: calc(4vw + 2rem);

  @media screen and (min-width: 800px) {
    padding: 140px 4vw 0 4vw;
  }
}

.y2b-grid {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2vw;
  row-gap: 6vw;
  padding: 3.3vmax 6vw;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 3.3vmax 4vw;
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

.spotify-grid {
  background-color: #faf1dd;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2vw;
  row-gap: 6vw;
  padding: 3.3vmax 6vw;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 3.3vmax 4vw;
  }
}
</style>

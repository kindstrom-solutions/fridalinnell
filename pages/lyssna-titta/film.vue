<template>
  <div class="container">
    <!-- <h1 class="page-header">Film</h1> -->

    <div class="video" style="margin-top: 8rem;">
      <div class="video-frame">
        <iframe
          src="https://www.youtube.com/embed/2-1q_Gb36tA?wmode=opaque&amp;enablejsapi=1"
          height="480"
          width="854"
          scrolling="no"
          frameborder="0"
          allowfullscreen="">
        </iframe>
      </div>
      <p>
        Frida Linnell / Reel film 
      </p>
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

.video {
  padding: 20px 10vw 0 10vw;
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
</style>

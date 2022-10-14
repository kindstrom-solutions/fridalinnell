<template>
  <div class="container">
    <h1 class="page-header">Film</h1>

      <div class="video">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/eO5PV1nhZJQ?wmode=opaque&amp;enablejsapi=1"
            height="480"
            width="854"
            scrolling="no"
            frameborder="0"
            allowfullscreen="">
          </iframe>
        </div>
        <p>
          Frida Linnell / Reel scen 
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
  padding: 100px 4vw 0 4vw;
  font-size: 72px;
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

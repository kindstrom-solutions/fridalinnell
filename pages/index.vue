<template>
  <div class="container">
    <div class="big-image">
      <img
        alt=""
        data-src="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f194bf4d94f933c543f936b/1595493429534/DSC_4894+kopiera.jpg"
        data-image="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f194bf4d94f933c543f936b/1595493429534/DSC_4894+kopiera.jpg"
        data-image-dimensions="2000x1335"
        data-image-focal-point="0.6188811188811189,0.471088574466345"
        data-load="false"
        data-parent-ratio="1.2"
        style="display: block; width: 100%; height: 100%; object-position: 100% 47.1089%; object-fit: cover;"
        class=""
        data-image-resolution="2500w"
        src="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f194bf4d94f933c543f936b/1595493429534/DSC_4894+kopiera.jpg?format=2500w">
    </div>
    <div class="text-section">
      <h3>skådespelerska / sångerska / musikalartist</h3>
    </div>
    <div class="big-image">
      <img
        alt=""
        data-src="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f19777ea9f2de33307a3860/1595504521427/DSC_5080+kopiera.jpg"
        data-image="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f19777ea9f2de33307a3860/1595504521427/DSC_5080+kopiera.jpg"
        data-image-dimensions="2000x1335"
        data-image-focal-point="0.5,0.5"
        data-load="false"
        data-parent-ratio="1.3"
        style="display: block; width: 100%; height: 100%; object-position: 50% 50%; object-fit: cover;"
        class=""
        data-image-resolution="2500w"
        src="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f19777ea9f2de33307a3860/1595504521427/DSC_5080+kopiera.jpg?format=2500w">
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

.text-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 33vh;
  background-color: #fff;
  font-size: calc(1.44vw + 1rem);

  h3 {
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    line-height: 1.3328;
  }
}

.quote-section {
  display: flex;
  flex-direction: column;
  padding: 0 calc(20vw + 1rem);
  align-items: center;
  justify-content: center;
  min-height: 33vh;

  h2 {
    margin: 2rem 0;
    text-align: center;
    font-size: calc(2.16vw + 1rem);
    line-height: 1.2992;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    margin: 1rem 0;
  }
}
</style>
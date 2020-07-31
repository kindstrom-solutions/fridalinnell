<template>
  <div class="container">
    <div class="contact-info">
      <div class="content">
        <h2>Kontakta mig</h2>
        <p>
          frida.linnell@gmail.com
          <br>
          +46761042646
        </p>
        <p>
          <a href="https://www.facebook.com/frida.linnell.3/" target="_blank">Facebook</a>
          <br>
          <a href="https://www.instagram.com/frida_linnell/" target="_blank">Instagram</a>
          <br>
        </p>
      </div>
      <img
        data-src="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f19721dbd11a42fef71f7a9/1595945751432/DSC_4970+kopiera.jpg"
        data-image="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f19721dbd11a42fef71f7a9/1595945751432/DSC_4970+kopiera.jpg"
        data-image-dimensions="2000x2936"
        data-image-focal-point="0.5,0.5"
        alt="DSC_4970 kopiera.jpg"
        style=""
        class="loaded"
        data-image-resolution="1000w"
        src="https://static1.squarespace.com/static/5f1949778b7bbc3e9fb0869c/t/5f19721dbd11a42fef71f7a9/1595945751432/DSC_4970+kopiera.jpg?format=1000w"/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact-info {
  padding: 80px 140px 70px 100px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .content {
    margin: auto;
  }

  img {
    width: 100%;
  }

  h2 {
    font-size: 38px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    margin-bottom: 40px;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    margin-bottom: 40px;
  }
}
</style>

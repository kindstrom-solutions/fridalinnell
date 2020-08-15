<template>
  <div class="container">
    <div class="contact-info">
      <div class="content">
        <h2 style="margin-bottom: 20px;">Kontakta mig</h2>
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
      <img src="/DSC_4970.jpg"/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact-info {
  padding: 120px 6vw 70px 6vw;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 120px 4vw 70px 4vw;
  }

  .content {
    margin: auto;
  }

  img {
    width: 100%;
  }

  p {
    margin-bottom: 60px;
  }

  a {
    color: #000;
  }
}
</style>

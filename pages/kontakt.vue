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
  padding: 120px 40px 70px 20px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 800px) {
    padding: 120px 140px 70px 100px;
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
}
</style>

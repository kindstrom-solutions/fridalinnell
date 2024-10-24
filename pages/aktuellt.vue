<template>
  <div class="container">
    <h1 style="display: none;">Kontakt</h1>
    <div class="contact-info">
      <div class="content">
        <h2 style="margin-bottom: 20px;">Kontakta mig</h2>
        <p>
          frida.linnell@gmail.com
          <br>
          +46761042646
        </p>
      </div>
      <img src="/31.jpg"/>
      <div class="content">
        <h2 style="margin-bottom: 20px">Något random här</h2>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Frida Linnell | Kontakt'
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-info {
  padding: 120px 6vw 70px 6vw;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 3fr;
    padding: 120px 4vw 70px 4vw;
  }

  .content {
    margin: auto;
  }

  img {
    width: 50%;
  }

  p {
    margin-bottom: 60px;
  }

  a {
    color: #000;
  }
}
</style>
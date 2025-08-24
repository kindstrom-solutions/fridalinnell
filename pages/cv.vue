<template>
  <div class="container">
    <h1 style="display: none">CV</h1>
    <div class="top-images">
      <div class="image-gallery">
        <div class="image">
          <img
            alt="Foto Linda Brelin"
            style="
              width: 100%;
              height: 100%;
              object-position: 49% 0%;
              object-fit: cover;
            "
            src="/16.jpg"
          />
        </div>
        <div class="image">
          <img
            alt="DSC_4836 kopiera.jpg"
            style="
              width: 100%;
              height: 100%;
              object-position: 46% 19.9565%;
              object-fit: cover;
            "
            src="/22.jpg"
          />
        </div>
      </div>
      <p>Foto POINT OF YOU</p>
      <h1 class="page-header">CV</h1>
    </div>

    <!-- Basic info block -->
    <div class="other-section">
      <p>
        Född 1994 <br />
        Längd 168 cm <br />
        Sopran (f-c<sup>3</sup>, belt till f<sup>2</sup>)<br />
        Dans (jazz, modern/lyrical, balett) <br />
        Svenska, engelska, enkel spanska <br />
        Östgötska, scensvenska <br />
        Notläsning, röstskådespeleri, stage combat, enkel gitarr, skidåkning,
        grunderna i ridning, enkel gymnastik<br />
        B-körkort
      </p>
    </div>

    <!-- Utbildning section (kept as text) -->
    <div class="other-section" style="background-color: #faf1dd">
      <h4>Utbildning</h4>
      <p>
        Konstnärlig kandidatutbildning i musikal Högskolan för Scen och Musik,
        Göteborg 2017 - 2020 <br />
        Musikalartistutbildning Kulturama, Stockholm 2015 - 2017 <br />
        1 Year Full-time Intensive Diploma in Musical Theatre Associated
        Studios, London 2014
      </p>
    </div>

    <!-- SCEN -->
    <h4 style="padding: 10px 4vw; padding-top: 50px">Scen</h4>
    <div class="section-grid scen-grid">
      <!-- Table headers -->
      <h5 class="table-header">Pjäs</h5>
      <h5 class="table-header">Roll</h5>
      <h5 class="table-header">Teater</h5>
      <h5 class="table-header">Regissör</h5>
      <h5 class="table-header">År</h5>

      <!-- Data rows -->
      <div v-for="(item, index) in scenData" :key="index" class="table-row">
        <!-- Title (with optional link) -->
        <p class="title">
          <span v-if="item.url">
            <a :href="item.url" target="_blank" rel="noopener">
              {{ item.title }}
            </a>
          </span>
          <span v-else>{{ item.title }}</span>
        </p>
        <template v-if="screenWidth > 800">
          <p class="role">{{ item.role }}</p>
          <p class="theater">{{ item.theater }}</p>
          <p class="director">{{ item.director }}</p>
          <p class="year">{{ item.year }}</p>
        </template>
        <template v-else>
          <p>
            {{ item.role }}, {{ item.theater }}, {{ item.director }},
            {{ item.year }}
          </p>
        </template>
      </div>
    </div>

    <!-- FILM -->
    <h4 style="padding: 10px 4vw; padding-top: 40px">Film</h4>
    <div class="section-grid film-grid">
      <h5 class="table-header">Titel</h5>
      <h5 class="table-header">Roll</h5>
      <h5 class="table-header">Produktion</h5>
      <h5 class="table-header">Regissör</h5>
      <h5 class="table-header">År</h5>

      <div v-for="(item, index) in filmData" :key="index" class="table-row">
        <p class="title">
          <span v-if="item.url">
            <a :href="item.url" target="_blank" rel="noopener">
              {{ item.title }}
            </a>
          </span>
          <span v-else>{{ item.title }}</span>
        </p>
        <template v-if="screenWidth > 800">
          <p class="role">{{ item.role }}</p>
          <p class="theater">{{ item.production }}</p>
          <p class="director">{{ item.director }}</p>
          <p class="year">{{ item.year }}</p>
        </template>
        <template v-else>
          <p>
            {{ item.role }}, {{ item.production }}, {{ item.director }},
            {{ item.year }}
          </p>
        </template>
      </div>
    </div>

    <!-- RÖST -->
    <h4 style="padding: 10px 4vw; padding-top: 40px">Röst</h4>
    <div class="section-grid voice-grid">
      <h5 class="table-header">Titel</h5>
      <h5 class="table-header">Roll</h5>
      <h5 class="table-header">Studio</h5>
      <h5 class="table-header">År</h5>
      <h5></h5>

      <div v-for="(item, index) in voiceData" :key="index" class="table-row">
        <p class="title">
          <span v-if="item.url">
            <a :href="item.url" target="_blank" rel="noopener">
              {{ item.title }}
            </a>
          </span>
          <span v-else>{{ item.title }}</span>
        </p>
        <template v-if="screenWidth > 800">
          <p class="role">{{ item.role }}</p>
          <p class="studio">{{ item.studio }}</p>
          <p class="year">{{ item.year }}</p>
          <p></p>
        </template>
        <template v-else>
          <p>{{ item.role }}, {{ item.studio }}, {{ item.year }}</p>
        </template>
      </div>
    </div>

    <!-- SCEN UNDER UTBILDNING -->
    <h4 style="padding: 10px 4vw; padding-top: 40px">Scen under utbildning</h4>
    <div class="section-grid edu-grid" style="padding-bottom: 2rem">
      <h5 class="table-header">Pjäs</h5>
      <h5 class="table-header">Roll</h5>
      <h5 class="table-header">Institution</h5>
      <h5 class="table-header">Regissör</h5>
      <h5 class="table-header">År</h5>

      <div
        v-for="(item, index) in educationData"
        :key="index"
        class="table-row"
      >
        <p class="title">
          <span v-if="item.url">
            <a :href="item.url" target="_blank" rel="noopener">
              {{ item.title }}
            </a>
          </span>
          <span v-else>{{ item.title }}</span>
        </p>
        <template v-if="screenWidth > 800">
          <p class="role">{{ item.role }}</p>
          <p class="institution">{{ item.institution }}</p>
          <p class="director">{{ item.director }}</p>
          <p class="year">{{ item.year }}</p>
        </template>
        <template v-else>
          <p>
            {{ item.role }}, {{ item.institution }}, {{ item.director }},
            {{ item.year }}
          </p>
        </template>
      </div>
    </div>

    <!-- FORTBILDNING (kept as text) -->
    <div class="other-section" style="background-color: #faf1dd">
      <h4>Fortbildning</h4>
      <p>
        Musikal - sångteknik och gestaltning, Helena Jonason, Kungliga Musikhögskolan <br />
        Expanderat utrymme för skådespelarens gestalning med Anna Pettersson,
        TeaterAlliansen <br />
        Jazzlinjen JAM Studio, Södertörns Folkhögskola
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth,
      // ===== SCEN data =====
      scenData: [
        {
          title: "Spelman på taket",
          role: "Hodel, Fromma Sarah",
          theater: "Västerbottensteatern",
          director: "Ronny Danielsson, Roger Lybeck",
          year: "2024/2025",
          url: "https://vasterbottensteatern.se/forestallning/spelman-pa-taket/",
        },
        {
          title: "Godspell",
          role: "Frida",
          theater: "Engelbrektskyrkan",
          director: "Robin Karlsson",
          year: "2024",
        },
        {
          title: "Kära Anna (reading)",
          role: "Alex",
          theater: "Ö2 Scenkonst",
          director: "AnnaKarin Hirdwall",
          year: "2024",
          url: "https://www.facebook.com/karaannamusikalen/",
        },
        {
          title: "Sagan om Bröderna Lejonhjärta",
          role: "Sofia m.fl.",
          theater: "Astrid Lindgrens Värld",
          director: "Stina Samson",
          year: "2023",
        },
        {
          title: "Handbok för Superhjältar (workshop)",
          role: "Flera roller",
          theater: "Mys Artisteri",
          director: "My Blomqvist Olsberg",
          year: "2022",
        },
        {
          title: "Inte Ensam (scenisk reading)",
          role: "Celine",
          theater: "Pik Presens Improkällare",
          director: "Elin Uvia Salas",
          year: "2022",
        },
        {
          title: "Kapten Reko på Lill-Skansen",
          role: "Flera roller",
          theater: "Lill-Skansen/Teater Pegasus",
          director: "Johan Briggert",
          year: "2022",
        },
        {
          title: "Alice i Underlandet",
          role: "Hjärter Dam, Påskharen",
          theater: "Kristianstad Teater",
          director: "Ola Hörling",
          year: "2021",
          url: "https://www.underhallningspatrullen.se/forestallning/Alice-i-Underlandet",
        },
        {
          title: "Signes val (Historien får liv)",
          role: "Flera roller",
          theater: "Fredriksdal i Helsingborg",
          director: "Sara Ekman",
          year: "2021",
        },
        {
          title: "Kära Anna (reading)",
          role: "Alex",
          theater: "Smålands Musik och Teater",
          director: "AnnaKarin Hirdwall",
          year: "2020",
          url: "https://www.facebook.com/karaannamusikalen/",
        },
        {
          title: "Herr Puntila och hans dräng Matti",
          role: "Husan Fina, Lagårdspigan, Fru Gyllenstjärna",
          theater: "Göteborgs Stadsteater",
          director: "Pontus Stenshäll",
          year: "2019/2020",
          url: "https://stadsteatern.goteborg.se/pa-scen/2019-2020/herr-puntila-och-hans-drang-matti/",
        },
        {
          title: "Sissel Kyrkjebö’s Jul",
          role: "Gästsolist",
          theater: "Lisebergshallen",
          director: "Sissel Kyrkjebö",
          year: "2018",
        },
        {
          title: "Familjen Addams",
          role: "Gammelmor",
          theater: "Kolhusteatern",
          director: "Jesper Bengtsson",
          year: "2017",
        },
        {
          title: "Stand-in-Artist Eurovision Song Contest",
          role: "1944 av Jamala",
          theater: "Globen (SVT)",
          director: "Martin Kagemark",
          year: "2016",
        },
      ],

      // ===== FILM data =====
      filmData: [
        {
          url: null,
          title: "Elkjop More",
          role: "Main Productivity",
          production: "Bleck Film",
          director: "Mackan Svanberg",
          year: "2025",
        },
        {
          url: null,
          title: "Botten",
          role: "Mika",
          production: "Runda Bordet Film",
          director: "Alma Johansson",
          year: "2022",
        },
        {
          url: null,
          title: "Arken",
          role: "Marion",
          production: "Skurups Folkhögskola",
          director: "Agnes Kullberg Liljegren",
          year: "2022",
        },
        {
          url: null,
          title: "Hjärta av glas",
          role: "Linda",
          production: "Stockholms Filmskola",
          director: "Moa Hjort",
          year: "2022",
        },
      ],

      // ===== RÖST data =====
      voiceData: [
        {
          title: "Gabbys Farm",
          role: "Mamman",
          studio: "Eurotroll",
          year: "2023",
        },
        {
          title: "Kristianias magiska tivoliteater",
          role: "Tora",
          studio: "Eurotroll",
          year: "2022",
        },
        {
          title: "Barbie TV-Movie",
          role: "Emmie",
          studio: "Iyuno/SDI Media",
          year: "2021-2023",
        },
        {
          title: "Batwheels",
          role: "Sång",
          studio: "Iyuno/SDI Media",
          year: "2022",
        },
        {
          title: "Eureka",
          role: "Sång",
          studio: "Iyuno",
          year: "2022",
        },
        {
          title: "Kjell & Co.",
          role: "VO",
          studio: "TMP",
          year: "2021",
          url: "https://www.youtube.com/watch?v=Zp1vHa00KF0&ab_channel=Kjell%26CompanySverige",
        },
        {
          title: "The Witcher",
          role: "Danica, m.fl.",
          studio: "SDI Media",
          year: "2021",
        },
        {
          title: "Centaurworld",
          role: "Valtaur, kattaur",
          studio: "SDI Media",
          year: "2021",
        },
        {
          title: "Tom & Jerry",
          role: "Lola",
          studio: "SDI Media",
          year: "2021",
        },
        {
          title: "The Wishmas Tree",
          role: "Petra",
          studio: "SDI Media",
          year: "2020",
        },
      ],

      // ===== SCEN UNDER UTBILDNING =====
      educationData: [
        {
          title: "Delar ur Tänk/Om",
          role: "Betty",
          institution: "Högskolan för Scen och Musik",
          director: "AnnaKarin Hirdwall",
          year: "2020",
          url: "https://www.scenfilm.se/2020/06/15/sorg-och-besvikelse-blev-till-kreativitet-vid-musikalutbildningen/",
        },
        {
          title: "Pojkarna (reading)",
          role: "Momo",
          institution: "GöteborgsOperan",
          director: "Mattias Palm",
          year: "2019",
          url: "https://www.facebook.com/pojkarnamusikalen/",
        },
        {
          title: "Närmare Kanten",
          role: "Isabelle",
          institution: "Högskolan för Scen och Musik",
          director: "Mattias Palm",
          year: "2019",
          url: "https://www.facebook.com/narmarekanten/",
        },
        {
          title: "K+M+R+L",
          role: "Linda",
          institution: "Högskolan för Scen och Musik",
          director: "Victoria Brattström",
          year: "2018",
        },
        {
          title: "Musikal från början (devising)",
          role: "Ensemble",
          institution: "Högskolan för Scen och Musik",
          director: "Michael Howell",
          year: "2018",
        },
        {
          title: "Raoul (reading)",
          role: "Ensemble",
          institution: "Smålands Musik och Teater",
          director: "Markus Virta",
          year: "2018",
          url: "https://www.facebook.com/raoulwallenbergmusical/",
        },
        {
          title: "Company",
          role: "Laura (Harry omskriven till kvinna)",
          institution: "Högskolan för Scen och Musik",
          director: "Ola Hörling",
          year: "2018",
        },
        {
          title: "Smile the musical",
          role: "Doria Hudson",
          institution: "Kulturama",
          director: "Johan Schildt",
          year: "2017",
        },
        {
          title: "Heathers",
          role: "Ensemble",
          institution: "Kulturama",
          director: "Patrik Bergner",
          year: "2016",
        },
        {
          title: "A Little Night Music",
          role: "Anne Egerman",
          institution: "Associated Studios",
          director: "Ian Good",
          year: "2014",
        },
      ],
    };
  },
  computed: {
    isWideScreen() {
      return this.screenWidth > 800; // Check if screen width is above 800px
    },
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth; // Update screen width on resize
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateScreenWidth); // Listen to resize
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenWidth); // Cleanup
  },
  head() {
    return {
      title: "Frida Linnell | CV",
    };
  },
};
</script>

<style lang="scss" scoped>
.top-images {
  padding: 140px 6vw 40px 6vw;
  background-color: #fff;

  @media screen and (min-width: 800px) {
    padding: 140px 4vw 40px 4vw;
  }

  .image-gallery {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2vw;
    row-gap: 6vw;

    @media screen and (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }

    .image {
      padding-bottom: 120%;
      overflow: hidden;
      position: relative;

      img {
        position: absolute;
      }
    }
  }

  p {
    margin-bottom: 20px;
    padding: 10px 0 20px 0;
  }
}

.page-header {
  font-size: 52px;
}

.other-section {
  background-color: #fff;
  padding: 20px 6vw 70px 6vw;

  @media screen and (min-width: 800px) {
    padding: 20px 4vw 70px 4vw;
  }

  h4 {
    margin-bottom: 10px;
    padding-top: 40px;
  }
}

/* Base grid for table-like layout on desktop */
.section-grid {
  background-color: #fff;
  padding: 10px 4vw;

  /* On desktop: make a multi-column "table" */
  display: grid;
  // gap: 10px;

  .table-header {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .table-row {
    /* This trick lines up each <p> under the correct header in a single row */
    display: contents;
  }

  p {
    // margin: 0 0 10px;
  }
}

/* SCEN: 5 columns */
.scen-grid {
  grid-template-columns: repeat(5, 1fr);
}

/* FILM: also 5 columns */
.film-grid {
  grid-template-columns: repeat(5, 1fr);
}

/* RÖST: 4 columns */
.voice-grid {
  grid-template-columns: repeat(5, 1fr);
}

/* EDU: 5 columns */
.edu-grid {
  grid-template-columns: repeat(5, 1fr);
}

/* MOBILE layout: switch to "cards" */
@media (max-width: 800px) {
  .section-grid {
    display: block; /* kill the grid and show stacked cards */
  }

  .section-grid .table-header {
    display: none; /* hide the table headers on mobile */
  }

  .section-grid .table-row {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 16px;
    // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px rgb(250, 241, 221) solid;
  }
}
</style>

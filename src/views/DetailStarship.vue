<template>
  <div class="detail-page">
    <a-row :gutter="16">
      <a-col :span="16" class="gutter-row">
        <a-card class="starship-card">
          <div class="header">
            <h1 class="starshipName">{{ starship.name }}</h1>
          </div>
          <div>
            <img
              :src="link"
              alt="rocket-random"
              title="rocket-random"
              width="500"
              height="500"
              :style="{ borderRadius: '50%', margin: '0 auto', display: 'block' }"
            />
          </div>
          <h1>Spesifikasi</h1>
          <div
            :style="{
              display: 'flex',
              gap: '15px',
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: '20px 0'
            }"
          >
            <span class="badge yellow"> ◉ {{ starship.model }} </span>
            <span class="badge lilac"> ◉ {{ starship.MGLT }} MGLT </span>
            <span class="badge green"> ◉ {{ starship.manufacturer }} </span>
            <span class="badge blue"> ◉ {{ starship.starship_class }} </span>
            <span class="badge red"> ◉ {{ starship.consumables }} </span>
          </div>
        </a-card>
      </a-col>
      <a-col :span="8" class="gutter-row">
        <a-card class="starship-card">
          <div class="pilots" v-if="pilots.name">
            <div class="icon-3d"><img src="../assets/icon/asto.png" alt="astronout" /></div>
            Pilot
            <h3>{{ pilots.name }}</h3>
          </div>
        </a-card>

        <a-card class="starship-card">
          <div class="films" v-if="films.title">
            <div class="icon-3d"><img src="../assets/icon/film.png" alt="film-icon" /></div>
            <div>
              Film
              <h2>{{ films.title }}</h2>
            </div>
            <div>
              Sutradara
              <h3>{{ films.director }}</h3>
            </div>
          </div>
        </a-card>

        <a-card class="starship-card">
          Rating
          <div>
            <div class="icon-3d mini">
              <img src="../assets/icon/roket.png" alt="rocket-icon" />
            </div>
            <a-rate :value="starship.hyperdrive_rating" disabled />
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

interface Starship {
  name: string
  model: string
  manufacturer: string
  starship_class: string
  MGLT: string
  pilots: string[]
  films: string[]
  hyperdrive_rating: string
  consumables: string
}

interface Pilots {
  name: string
}

interface Films {
  title: string
  director: string
}

export default defineComponent({
  data() {
    return {
      starship: {} as Starship,
      pilots: {} as Pilots,
      films: {} as Films,
      link: '',
      rating: ''
    }
  },

  created() {
    const starshipId = this.$route.params.id

    // Generate a random index to select a link from the options
    const randomIndex = Math.floor(Math.random() * 3)

    // Assign the randomly selected link to the `link` property
    this.link = [
      'https://i.pinimg.com/564x/c9/1b/64/c91b64bf9f986e3b06b9b01a0622e0bd.jpg',
      'https://i.pinimg.com/564x/c9/50/8e/c9508e5563daf23e04b396d11748ac04.jpg',
      'https://i.pinimg.com/564x/2f/c9/3b/2fc93b5c814d9582569bb40555e66a57.jpg'
    ][randomIndex]

    axios
      .get(`https://swapi.dev/api/starships/${starshipId}`)
      .then((response: any) => {
        this.starship = response.data as Starship

        const pilotapi = this.starship?.pilots[0]

        axios
          .get(pilotapi)
          .then((response: any) => {
            this.pilots = response.data as Pilots
          })
          .catch((error: any) => {
            console.error(error)
          })

        const filmapi = this.starship?.films[0]
        axios
          .get(filmapi)
          .then((response: any) => {
            this.films = response.data as Films
          })
          .catch((error: any) => {
            console.error(error)
          })
      })
      .catch((error: any) => {
        console.error(error)
      })
  }
})
</script>

<style scoped>
.starship-card {
  background: #fff;
  border-radius: 20px;
  margin: 20px 0;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);
}

.icon-3d {
  position: absolute;
  right: 10px;
  top: 0;
}
.icon-3d img {
  width: 150px;
  opacity: 0.3;
}
.mini img {
  width: 80px !important;
  margin: 10px 0;
}
.films {
  line-height: 1.5em;
}
.badge {
  box-sizing: border-box;
  border: 0px solid #fff;
  border-radius: 20px;
  padding: 2px 10px;
}

.green {
  color: #089d70;
  background-color: #dafff0;
}

.blue {
  color: #2b61b9;
  background-color: #d4e4ff;
}

.lilac {
  color: #6c11a1;
  background-color: #efd4ff;
}

.yellow {
  color: #c2b826;
  background-color: #fffdde;
}

.red {
  color: #b61769;
  background-color: #ffe2f1;
}

.starshipName {
  font-size: 2.5rem;
  text-align: center;
  font-family: 'Fira Mono', cursive;
}
</style>

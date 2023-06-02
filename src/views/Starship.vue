<template>
  <div>
    <h1>Starship</h1>
    <CustomTable :api="api" :columns="columns" :data="starships" v-if="starships.length > 0" />
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'
import CustomTable from '../components/tableNew.vue'
import { useAppStore } from '../state'
import axios from 'axios'

export default defineComponent({
  name: 'Starship',
  components: {
    CustomTable
  },
  setup() {
    const appStore = useAppStore()
    const columns = appStore.columns

    const starships = ref([])

    const fetchStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships')
        starships.value = response.data.results
      } catch (error) {
        console.error(error)
      }
    }

    const api = 'https://swapi.dev/api/starships' // Set the API URL

    onBeforeMount(() => {
      fetchStarships()
    })

    return {
      api,
      starships,
      columns
    }
  }
})
</script>

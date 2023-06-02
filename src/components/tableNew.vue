<template>
  <div>
    <div :style="{ maxWidth: '300px' }">
      <a-input-search
        v-model:value="searchQuery"
        placeholder="Cari berdasarkan nama / model"
        enter-button="Cari"
        size="sm"
        @search="searchStarships"
      />
    </div>
    <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 14">
          <a-button type="primary" ghost @click="redirectToStarship(record)">Detail</a-button>
        </template>
        <template v-else-if="column.key === 12 || column.key === 13">
          {{ formatDate(record[column.dataIndex]) }}
        </template>
        <template v-else-if="column.key === 3">
          <span v-if="record[column.dataIndex] !== 'unknown'"
            >${{ formatNumber(record[column.dataIndex]) }}</span
          >
          <span v-else>Tidak diketahui</span>
        </template>
        <template v-else>
          {{ record[column.dataIndex] }}
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import dateMixin from '../mixin/dateMixin'
import axios from 'axios'
import { useAppStore } from '../state'

export default defineComponent({
  name: 'CustomTable',
  mixins: [dateMixin],
  props: {
    api: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const appStore = useAppStore()
    const data = ref([])
    const searchQuery = ref('')

    const columns = appStore.columns

    const redirectToStarship = (record: any) => {
      const url = record.url
      const arrLastCharacter = url.match(/\d+/g)
      const id = arrLastCharacter[0]
      const starshipUrl = `/starship/${id}`
      window.location.href = starshipUrl
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(props.api)
        data.value = response.data.results || []
      } catch (error) {
        console.error(error)
      }
    }

    const searchStarships = async () => {
      try {
        const searchUrl = `https://swapi.dev/api/starships/?search=${searchQuery.value}`
        const response = await axios.get(searchUrl)
        data.value = response.data.results || []
      } catch (error) {
        console.error(error)
      }
    }

    watch(
      () => props.api,
      () => {
        fetchData()
      }
    )

    fetchData()

    return {
      columns,
      data,
      redirectToStarship,
      searchQuery,
      searchStarships
    }
  }
})
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border: 1px solid #ccc;
}
</style>

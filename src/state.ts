import { defineStore } from 'pinia'
import router from '@/router' // Import router dari Vue Router

interface Column {
  title: any
  width: number
  dataIndex: any
  key: number
}

export const useAppStore = defineStore('app', {
  state: () => ({
    columns: [
      { title: 'Nama', dataIndex: 'name', key: 0, width: 150 },
      { title: 'Model', dataIndex: 'model', key: 1, width: 150 },
      { title: 'Pabrikan', dataIndex: 'manufacturer', key: 2, width: 150 },
      { title: 'Biaya Kredit', dataIndex: 'cost_in_credits', key: 3, width: 150 },
      { title: 'Panjang', dataIndex: 'length', key: 4, width: 150 },
      { title: 'Kecepatan Maksimum', dataIndex: 'max_atmosphering_speed', key: 5, width: 150 },
      { title: 'Kru', dataIndex: 'crew', key: 6, width: 150 },
      { title: 'Penumpang', dataIndex: 'passengers', key: 7, width: 150 },
      { title: 'Kapasitas Kargo', dataIndex: 'cargo_capacity', key: 8, width: 150 },
      { title: 'Waktu Konsumsi', dataIndex: 'consumables', key: 9, width: 150 },
      { title: 'Rating', dataIndex: 'hyperdrive_rating', key: 10, width: 150 },
      { title: 'Megalight', dataIndex: 'MGLT', key: 11, width: 150 },
      { title: 'Tanggal Dibuat', dataIndex: 'created', key: 12, width: 150 },
      { title: 'Terakhir Dimodifikasi', dataIndex: 'edited', key: 13, width: 200 },
      { title: 'Aksi', fixed: 'right', dataIndex: 'url', key: 14, width: 100 }
    ] as Column[]
  }),
  getters: {
    getStarshipColumns(): Column[] {
      return this.columns
    }
  }
})

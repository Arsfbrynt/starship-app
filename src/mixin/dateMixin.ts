import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    formatDate(date: string): string {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return new Date(date).toLocaleDateString(undefined, options)
    },

    formatNumber(number: number): string {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
})

<template>
  <div>
    <h2>Dashboard</h2>
    <a-button type="primary" @click="showModal">Click Me</a-button>
    <a-modal v-model:visible="visible" title="Pengakuan" @ok="handleOk">
      <ol :style="{ lineHeight: '30px' }">
        <li>Nama saya M. Aris Febriyanto</li>
        <li>
          Ada beberapa hambatan yang saya alami sebenarnya, keterbatasan material, data api dan
          peralatan
        </li>
        <li>
          <img src="../assets/ss.JPG" alt="ss" width="400" />
          bahkan saya sempat ganti-ganti library
        </li>
        <li>
          Hasil ini bisa dikatakan bukan kemampuan 100% tapi saya merasa cukup jika melihat
          spesification harus ada apa saja. Jadi, ini hasil saya
        </li>
        <li>
          jika memang Qodarullah belum berjodoh dengan ordivopun, saya mengucapkan terimakasih untuk
          kesempatannya. semoga bisa menjadi evaluasi saya kedepannya
        </li>
        Terimakasih :)
      </ol>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false)

    const showModal = () => {
      visible.value = true
    }

    const handleOk = (e: MouseEvent) => {
      console.log(e)
      visible.value = false
    }
    return {
      visible,
      showModal,
      handleOk
    }
  }
})
</script>

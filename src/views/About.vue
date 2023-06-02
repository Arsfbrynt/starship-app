<!-- src/views/About.vue -->
<template>
  <div v-for="social in socialMedia" :key="social.name" :style="{ lineHeight: '80px' }">
    <a-button :class="social.name" :title="social.name" @click="openLink(social.link)">
      <component :is="social.icon" />{{ social.text }}
    </a-button>
  </div>
</template>

<script lang="ts">
import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons-vue'
export default {
  name: 'About',
  components: {
    GithubOutlined,
    MailOutlined,
    LinkedinOutlined
  },
  data() {
    return {
      socialMedia: [
        {
          name: 'Github',
          icon: 'GithubOutlined',
          link: 'https://github.com/Arsfbrynt',
          text: 'Silakan mampir github saya untuk cek project'
        },
        {
          name: 'Email',
          icon: 'MailOutlined',
          link: 'https://mailto:arsfbrynt@gmail.com',
          text: 'Kabari saya tentang hasilnya om'
        },
        {
          name: 'LinkedIn',
          icon: 'LinkedinOutlined',
          link: 'https://linkedin.com/in/arsfbrynt',
          text: 'linkedIn ga ada yg spesial si'
        }
      ]
    }
  },
  methods: {
    openLink(link: string) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped>
button {
  margin-right: 10px;
}
button {
  background-color: #fbeee0;
  border: 2px solid;
  border-radius: 30px;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.Github {
  color: #007a80;
  border-color: #1c464d;
  box-shadow: #1c464d 4px 4px 0 0;
  background-color: #dbfbff;
}

.Email {
  color: #176517;
  border-color: #1f4242;
  box-shadow: #1f421f 4px 4px 0 0;
  background-color: #daffda;
}

.LinkedIn {
  color: #cc0e73;
  border-color: #53293f;
  box-shadow: #53293f 4px 4px 0 0;
  background-color: #ffcae6;
}
@media (min-width: 768px) {
  button {
    width: 500px;
    height: 50px;
    padding: 0 25px;
    display: block;
    margin: 20px auto;
  }
}
</style>

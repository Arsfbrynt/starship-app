<!-- src/App.vue -->
<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      theme="light"
      @breakpoint="onBreakpoint"
    >
      <div class="logo"><img src="./assets/logo-starship.png" alt="logo" /></div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
        <a-menu-item key="1">
          <dashboard-outlined />
          <span class="nav-text"> <router-link to="/">Dashboard</router-link></span>
        </a-menu-item>
        <a-menu-item key="2">
          <rocket-outlined />
          <span class="nav-text"> <router-link to="/starship">Starship</router-link></span>
        </a-menu-item>
        <a-menu-item key="3">
          <user-outlined />
          <span class="nav-text"> <router-link to="/about">About</router-link></span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ padding: '0 24px 24px', backgroundColor: '#e6f7ff' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item @click="navigateToHome">Home</a-breadcrumb-item>
        <a-breadcrumb-item>{{ getPageTitle() }}</a-breadcrumb-item>
        <a-breadcrumb-item v-if="$route.params.id">{{ $route.params.id }}</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ background: '#fff', margin: 0, minHeight: '280px' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '39em' }">
          <router-view />
        </div>

        <a-layout-footer :style="{ textAlign: 'center', backgroundColor: '#e6f7ff' }">
          Ars_fbrynt @2023 by Vue
        </a-layout-footer>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { UserOutlined, RocketOutlined, DashboardOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'

export default defineComponent({
  components: {
    UserOutlined,
    RocketOutlined,
    DashboardOutlined
  },
  methods: {
    getPageTitle(): string {
      const currentPath: string = (this.$route as RouteLocationNormalized).path

      const currentPath2 = currentPath.substring(0, 9)

      if (currentPath === '/') {
        return 'Dashboard'
      } else if (currentPath === '/about') {
        return 'About'
      } else if (currentPath2 === '/starship') {
        return 'Starship'
      } else {
        return 'Tidak Ditemukan'
      }
    }
  },
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type)
    }

    const onBreakpoint = (broken: boolean) => {
      console.log(broken)
    }

    const navigateToHome = () => {
      window.location.href = '/'
    }
    return {
      selectedKeys: ref<string[]>(['4']),
      onCollapse,
      onBreakpoint,
      navigateToHome
    }
  }
})
</script>

<style>
#components-layout-demo-responsive {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.logo img {
  margin: 0 auto;
  display: block;
  width: 150px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}
.ant-layout-sider-zero-width-trigger {
  top: 0 !important;
}
.ant-layout-sider-children {
  margin: -1px;
}
[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
.ant-menu-item-selected a,
.ant-menu-item-selected a:hover {
  color: #141414 !important;
}
.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #9a1171 !important;
}
</style>

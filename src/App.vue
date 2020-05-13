<template>
  <div id="app" v-cloak>
    <div id="nav" class>
      <DemoRouterNav></DemoRouterNav>
    </div>
    <router-view />
  </div>
</template>

<script>
import DemoRouterNav from '@/components/__demo/DemoRouterNav.vue';

export default {
  components: {
    DemoRouterNav,
  },
};
</script>

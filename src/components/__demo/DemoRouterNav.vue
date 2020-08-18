<template>
  <div class="hb-debug-nav-bar">
    <div class="text-center padding-xxs">
      <span v-for="(r) in ROUTER" :key="r.name">
        &sung;
        <router-link :to="r.path">
          <span>{{ r.name }}</span>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { ROUTER } from '../../constants';

export default {
  data() {
    return {
      ROUTER,
    };
  },
};
</script>

<style lang="scss">
.hb-debug-nav-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  background: white;
  padding: 5px 15px;
}
</style>

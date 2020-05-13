<template>
  <div class="hb-debug-nav-bar">
    <div class="text-center padding-xxs">
      <span v-for="(r) in ROUTER" :key="r.name">
        &sung;
        <router-link :to="r.path">
          <el-button size="small">{{ r.name }}</el-button>
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
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
</style>

<template>
  <nav class="hb-debug-nav-bar">
    <div class="text-center padding-xxs">
      <span v-for="(r) in ROUTER" :key="r.name">
        &sung;
        <router-link :to="r.path">
          <span>{{ r.name }}</span>
        </router-link>
      </span>
    </div>
  </nav>
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
  right: 0;
  width: 100%;
  z-index: 99999;
  background: white;
  text-align: right;
  padding: 10px;
  font-size: 14px;
  color: black;
  a {
    color: #f44336;
    font-weight: bold;
    &:hover {
      color: #ff7961;
    }
  }
}
</style>

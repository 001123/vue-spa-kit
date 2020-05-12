<template>
  <div id="app" v-cloak>
    <div id="nav" class="">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

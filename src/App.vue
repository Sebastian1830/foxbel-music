<template>
  <div id="app" class="app">
    <div class="app-container">
      <Sidebar />
      <section class="app-full-content margin-auto">
        <!--<div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>-->
        <router-view class="content-view"/>
      </section>
    </div>
    <MusicPlayer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import MusicPlayer from '@/components/layouts/MusicPlayer.vue';

@Component({ components: { Sidebar, MusicPlayer } })
export default class App extends Vue {
}
</script>

<style lang="scss">
@import './styles/global';
</style>

<style lang="scss" scoped>
.content-view {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.margin-auto {
  margin: auto;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

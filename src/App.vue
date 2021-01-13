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
  async created() {
    await this.userAuthDeezer();
  }

  async userAuthDeezer() {
    const queryRouter = this.$route.query;
    if (queryRouter.code) {
      const access_token = await this.$axios.get(`https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/access_token.php?app_id=456682&secret=741897f37de1734fb1d2ffc6468094be&code=${queryRouter.code}`);
      console.log(access_token.data);
      const data_user = await this.$axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/me/?access_token=${access_token.data}`);
      console.log(data_user);
    }
  }
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

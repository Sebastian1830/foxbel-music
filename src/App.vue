<template>
  <div id="app" class="app">
    <div class="app-container">
      <Sidebar v-if="$store.state.isAuthenticated" />
      <section class="app-full-content margin-auto">
        <router-view class="content-view"/>
      </section>
    </div>
    <MusicPlayer v-if="$store.state.isAuthenticated" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import MusicPlayer from '@/components/layouts/MusicPlayer.vue';

@Component({ components: { Sidebar, MusicPlayer } })
export default class App extends Vue {
  async created() {
    await this.userAuthDeezer();
  }

  beforeUpdate() {
    if (this.$router.currentRoute.name === 'Login' && this.$store.state.isAuthenticated) this.$router.push({ name: 'home' });
  }

  async userAuthDeezer() {
    const queryRouter = this.$route.query;
    if (queryRouter.code) {
      const access_token = await this.$axios.get(`https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/access_token.php?app_id=456682&secret=741897f37de1734fb1d2ffc6468094be&code=${queryRouter.code}&perms=basic_access,email,listening_history`);
      localStorage.setItem('access_token', access_token.data)
      this.$store.commit('successAuth');
      this.$router.push({ name: 'home' });
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
  width: 85%;
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

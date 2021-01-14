<template>
  <div id="app" class="app">
    <div class="app-container">
      <Sidebar v-if="$store.state.isAuthenticated" />
      <section class="app-full-content margin-auto">
        <router-view class="content-view"/>
      </section>
    </div>
    <AudioPlayer v-if="$store.state.isAuthenticated" url="https://vue-audioplayer-demo.s3.amazonaws.com/Kalimba.mp3" playerid="audio-player" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import AudioPlayer from '@/components/layouts/AudioPlayer.vue';

@Component({ components: { Sidebar, AudioPlayer } })
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
      const access_token = await this.$axios.get(`https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/access_token.php?app_id=456682&secret=741897f37de1734fb1d2ffc6468094be&code=${queryRouter.code}&output=json&output=json`);
      const access_token_format = `access_token=${access_token.data.access_token}&expires=${access_token.data.expires}`;
      localStorage.setItem('access_token', access_token_format)
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

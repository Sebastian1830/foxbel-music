<template>
  <div class="py-6 px-6">
    <Header @data="getDataSearch" />
    <Home :data-playlist="playlist" :data-follows="follows" />
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import Home from '@/components/home/Home.vue';
import Header from '@/components/layouts/Header.vue';

@Component({ components: { Home, Header } })
export default class HomePage extends Vue {
  public playlist: any = {};

  public follows: any = {};

  public dataSearch: any[] = [];

  @Watch('$store.state.user', { deep: true })
  async defaultLoad() {
    const playlist = await this.$axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/${this.$store.state.user.id}/recommendations/playlists?${localStorage.getItem('access_token')}&output=json&output=json`);
    this.playlist = playlist.data.data.slice(0, 5);

    const follows = await this.$axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/${this.$store.state.user.id}/flow?${localStorage.getItem('access_token')}&output=json&output=json`);
    this.follows = follows.data.data.slice(0, 12);
  }

  getDataSearch(result: any) {
    this.dataSearch = result;
  }
}
</script>

<style lang="scss" scoped>

</style>

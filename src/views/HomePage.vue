<template>
  <div class="py-6 px-6">
    <Header @data="getDataSearch" />
    <Home :data="data" />
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import Home from '@/components/home/Home.vue';
import Header from '@/components/layouts/Header.vue';

@Component({ components: { Home, Header } })
export default class HomePage extends Vue {
  public data: any = {};

  @Watch('$store.state.user', { deep: true })
  async defaultLoad() {
    const result = await this.$axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/${this.$store.state.user.id}/recommendations/playlists`);
    console.log(result);
    this.data = result.data.data.slice(0, 9);
  }

  getDataSearch(result: any) {
    this.data = result;
    console.log(result);
  }
}
</script>

<style lang="scss" scoped>

</style>

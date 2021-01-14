<template>
  <div class="py-6 px-6">
    <Header @data="getData" />
    <Home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/components/home/Home.vue';
import Header from '@/components/layouts/Header.vue';

@Component({ components: { Home, Header } })
export default class HomePage extends Vue {
  public data: any = {};

  getData(result: any) {
    this.data = result;
    console.log(result);
  }
}
</script>

<style lang="scss" scoped>

</style>

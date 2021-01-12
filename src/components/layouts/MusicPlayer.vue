<template>
  <div class="music-player"></div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MusicPlayer extends Vue {
}
</script>

<style lang="scss" scoped>
  .music-player {
    height: 70px;
    background-color: #EB5757;
  }
</style>

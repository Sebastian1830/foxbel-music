<template>
  <div class="music-player display-flex">
    <img :src="track.artist.picture_medium" alt="medium" class="custom-picture">
    <div class="columns margin-auto">
      <div class="column is-12 center-audio">
        <audio class="custom-audio" controls>
          <source src="https://cdns-preview-5.dzcdn.net/stream/c-5ae1084fbc738f03e857cc118f3b2498-6.mp3" type="audio/mpeg">
        </audio>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue, Watch} from 'vue-property-decorator';

@Component
export default class AudioPlayer extends Vue {
  public track: any = {};

  @Watch('$store.state.reproduced', { deep: true })
  public playTrack() {
    this.track = this.$store.state.reproduced;
    console.log(this.track);
  }
}
</script>

<style lang="scss" scoped>
  .music-player {
    height: 87px;
    background-color: $secondary;
    .custom-audio {
      width: 800px;
    }
    .margin-auto {
      margin: auto;
    }
    .center-audio {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .custom-picture {
      width: 87px;
      height: 87px;
    }
  }
  .display-flex {
    display: flex;
  }
</style>

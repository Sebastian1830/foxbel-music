<template>
  <div class="custom-card">
    <div class="picture" :style="`background-image: url(${pictureUrl});`">
      <img src="../../assets/imagenes/play.png" alt="play" class="play-button is-clickable" @click="playTrack">
    </div>
    <div class="has-text-left">
      <p class="mt-2 is-size-7 has-text-weight-bold">{{ title }}</p>
      <p class="is-size-7 has-text-grey-light">{{ artist }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop({ default: '' }) public pictureUrl!: string;

  @Prop({ default: '' }) public track!: string;

  @Prop({ default: '' }) public title!: string;

  @Prop({ default: '' }) public artist!: string;

  playTrack() {
    this.$emit('play');
  }
}
</script>

<style lang="scss" scoped>
  .custom-card {
    width: 160px;
    height: 194px;
    .picture {
      position: relative;
      width: 100%;
      height: 160px;
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: red;
      .play-button {
        position: absolute;
        left: 50%;
        margin-left: -20px;
        top: 50%;
        margin-top: -20px;
        width: 40px;
      }
    }
  }
</style>

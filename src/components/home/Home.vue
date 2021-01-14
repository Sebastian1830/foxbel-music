<template>
  <div class="mt-4">
    <Section section-tile="Playlist">
      <template slot="content">
        <div class="columns is-multiline">
          <div class="column is-2" v-for="(item, index) in dataPlaylist" :key="index">
            <Card :picture-url="item.picture_medium" :title="item.title"/>
          </div>
        </div>
      </template>
    </Section>
    <Section section-tile="¡Escuchalas!" class="mt-4">
      <template slot="content">
        <div class="columns is-multiline">
          <div class="column is-2 mb-2" v-for="(item, index) in dataFollows" :key="index">
            <Card :picture-url="item.artist.picture_medium" :title="item.title_short" :artist="item.artist.name" @play="playTrack(item)"/>
          </div>
        </div>
      </template>
    </Section>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import Card from '@/components/layouts/Card.vue';
import Section from '@/components/layouts/Section.vue';

@Component({ components: { Card, Section } })
export default class Home extends Vue {
  @Prop({ default: [] }) public dataPlaylist!: any[];

  @Prop({ default: [] }) public dataFollows!: any[];

  playTrack(track: any) {
    this.$store.commit('addTrack', track);
  }
}
</script>

<style lang="scss" scoped>

</style>

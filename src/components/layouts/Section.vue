<template>
  <div>
    <p class="has-text-left is-size-4 has-text-weight-bold custom-text mb-2">{{ sectionTile }}</p>
    <slot name="content" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Section extends Vue {
  @Prop({ default: '' }) public sectionTile!: string;
}
</script>

<style lang="scss" scoped>
  .custom-text {
    color: #EB5757;
  }
</style>

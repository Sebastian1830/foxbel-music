<template>
  <div>
    <p class="has-text-weight-bold">{{ title }}</p>
    <div class="parent is-size-7 mb-1" v-for="(item, index) in items" :key="index">
      <div class="child" :class="{'is-selected': selected === index && clicked}" />
      <span class="is-clickable" @click="selected = index"
            :class="{'is-selected-text has-text-weight-bold': selected === index && clicked}">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {
  @Prop({ default: '' }) public title!: string;

  @Prop({ default: [] }) public items!: string[];

  @Prop({ default: false }) public clicked!: boolean;

  public selected = -1;

  public clear() {
    this.selected = -1;
  }
}
</script>

<style lang="scss" scoped>
  .parent {
    position: relative;
    .child {
      position: absolute;
      left: -55px;
      top: 5px;
      width: 10px;
      background-color: #E86060;
      height: 60%;
      display: none;
      &.is-selected {
        display: unset;
      }
    }
    .is-selected-text {
      color: #E86060 !important;
    }
  }
  .is-clickable {
    cursor: pointer;
  }
</style>

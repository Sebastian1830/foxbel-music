<template>
  <div>Estas en Home</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  @Prop({ default: {} }) public data!: any;
}
</script>

<style lang="scss" scoped>

</style>

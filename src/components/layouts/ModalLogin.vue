<template>
  <b-modal :active.sync="isActive"
           :full-screen="false"
           @close="$emit('close')"
           has-modal-card>
    <div v-html="html"></div>
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ModalLogin extends Vue {
  @Prop() public html = '';

  public isActive = false;

  open() {
    this.isActive = true;
  }
}
</script>

<style lang="scss" scoped>

</style>

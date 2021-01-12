<template>
  <div class="custom-sidebar">
    <div class="mx-6 my-6">
      <img src="/imagenes/foxbel-music.png" alt="logo" class="mb-4">
      <div class="parent">
        <p class="has-text-weight-bold">Mi Librería</p>
        <div class="is-size-7">
          <div class="child"></div>
          <span>Recientes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
}
</script>

<style lang="scss" scoped>
 .custom-sidebar {
   width: 15%;
   background-color: #662323;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   color: white;
   .parent {
     position: relative;
     .child {
       position: absolute;
       left: -55px;
       width: 10px;
       background-color: #E86060;
       height: 40%;
     }
   }
 }
</style>

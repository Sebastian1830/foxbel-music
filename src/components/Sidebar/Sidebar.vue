<template>
  <div class="custom-sidebar">
    <div class="mx-6 my-6">
      <img src="/imagenes/foxbel-music.png" alt="logo" class="mb-4">
      <div  @click="clear('menu1')">
        <MenuItem title="Mi Librería" :items="menu1" :clicked="clickMenu1" class="mb-6" />
      </div>
      <div  @click="clear('menu2')">
        <MenuItem title="Playlist" :items="menu2" :clicked="clickMenu2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuItem from '@/components/Sidebar/MenuItem.vue';

@Component({ components: { MenuItem } })
export default class Sidebar extends Vue {
  public menu1: string[] = ['Recientes', 'Artistas', 'Álbums', 'Canciones', 'Estaciones']

  public menu2: string[] = ['Metal', 'Para bailar', 'Rock 90s', 'Baladas']

  public clickMenu1 = false;

  public clickMenu2 = false;

  // todo: Se puede mejorar
  clear(name: string) {
    if (name === 'menu1') {
      this.clickMenu1 = true;
      this.clickMenu2 = false;
    }
    if (name === 'menu2') {
      this.clickMenu1 = false;
      this.clickMenu2 = true;
    }
  }
}
</script>

<style lang="scss" scoped>
 .custom-sidebar {
   width: 15%;
   background-color: #662323;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   color: white;
 }
</style>

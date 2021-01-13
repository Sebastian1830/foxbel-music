<template>
  <div class="home is-fullheight">
    <img alt="Vue logo" src="../assets/imagenes/foxbel-music-icon@3x.png">
    <ContentLogin />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentLogin from '@/components/Login/ContentLogin.vue'; // @ is an alias to /src

@Component({
  components: {
    ContentLogin,
  },
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
  .home {
  }
</style>

<template>
  <div class="hello">
    <a href="https://connect.deezer.com/oauth/auth.php?app_id=456682&redirect_uri=https://sscorp.site/" target="_blank">
      <b-button type="is-primary">Iniciar Sesion</b-button>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class ContentLogin extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  ::v-deep.button.is-primary {
    background-color: $primary;
    &:hover {
      background-color: #a24243;
    }
  }
</style>

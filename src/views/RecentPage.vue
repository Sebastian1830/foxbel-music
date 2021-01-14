<template>
  <div class="py-6 px-6">
    <Recent :data="dataRecent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Recent from '@/components/my_library/Recent.vue';

@Component({ components: { Recent } })
export default class RecentPage extends Vue {
  public dataRecent: any = {};
}
</script>

<style lang="scss" scoped>
</style>

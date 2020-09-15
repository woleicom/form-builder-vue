<template>
  <div class="app">
    <router-view :key="key"/>
  </div>
</template>
<style lang="less">
@import '../style/layout.less';
</style>
<script>
export default {
  name: 'DefaultLayout',
  computed: {
    key() {
      return this.$route.path
    },
  }
}
</script>
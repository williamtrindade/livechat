<template>
  <div class="video">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    text: String
  }
})
export default class Video extends Vue {
}
</script>

<style scoped>
</style>

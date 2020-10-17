<template>
  <div class="accept">
    <div class="button btn btn-primary">
      {{text}}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    text: String
  }
})
export default class Accept extends Vue {
  text!: string
}
</script>

<style scoped>
.button {
  border-style: none;
  border-radius: 5%;
}
</style>

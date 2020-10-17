<template>
  <div class="decline">
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
export default class Decline extends Vue {
  text!: string
}
</script>

<style scoped>
.button {
  border-radius: 5%;
  border-style: none;
  border-radius: 0;
  background-color: rgb(250, 24, 24);
  color: white;
}
.button:hover {
  background-color: rgb(255, 50, 50);
}
</style>

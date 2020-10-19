<template>
  <button class="button btn" :class="buttonClass">
    {{text}}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    buttonClass: String,
    text: String
  }
})
export default class Accept extends Vue {
  text!: string
  buttonClass!: string
}
</script>

<style scoped>
.button {
  padding: 2% 4% 2% 4%;
  display: inline;
  border-style: none;
  border-radius: 0%;
}
.primary {
  color: white;
  background-color: #000;
}
.primary:hover {
  color: white;
  background-color: rgb(27, 27, 27);
}

.secondary {
  color: rgb(0, 0, 0);
  background-color: rgb(226, 226, 226);
}
</style>

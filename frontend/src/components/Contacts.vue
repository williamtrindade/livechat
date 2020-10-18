<template>
  <div class="contacts">
    <div class="header">
      <i class="fas fa-users"></i> <span class="ml-2">Contacts</span>
    </div>
    <div class="body">
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
})
export default class Contacts extends Vue {}
</script>

<style scoped>
.contacts {
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  position: fixed;
  width: 17%;
  float: left;
  background-color:red;
  background-color:rgb(28, 0, 41);
  color: white;
}
</style>

<template>
  <div class="contacts">
    <div class="header">
      Contacts
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
  width: 16.7%;
  float: left;
  background-color:red;
  background-color:rgb(0, 0, 0);
  color: white;
}
</style>

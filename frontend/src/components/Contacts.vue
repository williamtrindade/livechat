<template>
  <div class="contacts">
    <div class="card">
      <div class="card-header">
        Contacts
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
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
.contacts, .card {
  float: left;
  width: 100%;
  height: 100%;
}
div.card .card-header {
  color: #fff;
  border-radius: 0;
  border: none;
  background-color: rgb(0, 190, 196);
}
div.card {
  border-radius: 0;
  border: none;
}
</style>

<template>
  <div class="home">

    <div class="row">
      <div class="col-md-3 p-0">
        <Contacts />
      </div>
      <div class="col-md-9 p-0">
        <Chat />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Chat from '@/components/Chat.vue'
import Contacts from '@/components/Contacts.vue'

@Options({
  components: {
    Chat,
    Contacts
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  position: absolute;
  background-color: rgb(235, 235, 235);
  width: 100%;
  height: 100%;
}
.row {
  height: 100%;
}
</style>

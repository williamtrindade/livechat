<template>
  <div class="home">
    <div class="row">
      <div class="col-md-2 m-0 p-0 left left">
        <Contacts />
      </div>
      <div class="col-md-10 m-0 p-0 right">
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
  float: left;
  width: 100%;
  height: 100%;
}
.row {
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>

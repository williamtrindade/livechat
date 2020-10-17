<template>
  <div class="chat">
    <div class="card">
      <div class="card-header">
        Livechat
      </div>
      <div class="card-body">
        <Video></Video>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Video from '@/components/Video/Video.vue'

@Options({
  components: {
    Video
  }
})
export default class Chat extends Vue {}
</script>

<style scoped>
.chat, .card {
  background-color: rgb(219, 219, 219);
  float: left;
  width: 100%;
  height: 100%;
}
div.card .card-header {
  color: #fff;
  border-radius: 0;
  border: none;
  background-color: rgb(0, 0, 0);
}
div.card {
  border-radius: 0;
  border: none;
}
</style>

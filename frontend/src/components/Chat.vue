<template>
  <div class="chat">
    <div class="header">
      Livechat
    </div>
    <div class="body">
      <Video></Video>
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
.chat {

  height: 100%;
  width: 100%;
  background-color: rgb(207, 207, 207);
}
.header {
  z-index: 30;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  height: 50px;
  position: fixed;
  background-color:rgb(28, 0, 41);
  color: white;
}
.body {
  padding-top: 5%;
  overflow: scroll;
  width: 100%;
  height: 100%;
  float: left;
}
</style>

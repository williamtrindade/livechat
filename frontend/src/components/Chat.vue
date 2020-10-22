<template>
  <div class="chat">
    <div class="header">
      Chat
    </div>
    <div class="body localVideo" v-if="localStream != null">
      <Video :stream={localStream}></Video>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Video from '@/components/Video/Video.vue'

@Options({
  components: {
    Video
  },
  data () {
    return {
      localStream: null
    }
  },
  mounted () {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((localStream) => {
      this.localStream = localStream
    })
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
  background-color:rgb(0, 0, 0);
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

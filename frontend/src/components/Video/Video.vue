<template>
  <video class="video" autoplay>
  </video>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  data () {
    return {
      stream: null
    }
  },

  async mounted () {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    this.stream = stream
    const video = document.querySelector('.video') as HTMLVideoElement
    console.log(this.stream)
    if (video) video.srcObject = this.stream
  }
})
export default class Video extends Vue {
}
</script>

<style scoped>
.video {
  position: relative;
  z-index: 20;
  float: left;
  margin: 2%;
  height: 60%;
  width: 100%;
  background-color: rgb(255, 255, 255);
}
</style>

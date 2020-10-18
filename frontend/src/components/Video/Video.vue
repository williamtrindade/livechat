<template>
  <video class="video shadow" autoplay muted>
  </video>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    stream: Object
  },
  mounted () {
    const video = document.querySelector('.video') as HTMLVideoElement
    console.log(this.stream)
    if (video) video.srcObject = this.stream.localStream
  }
})
export default class Video extends Vue {
  stream!: Record<string, unknown>
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

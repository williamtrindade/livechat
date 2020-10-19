<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app, body, html {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
.left {
  float: left;
}
.right {
  float: right;
}
.b-left {
  float: left;
}
.b-right {
  float: right;
}
input.form-control {
  border-radius: 0;
}
button.btn {
  border-radius: 0;
}
</style>

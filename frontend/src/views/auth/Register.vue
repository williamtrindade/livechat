<template>
  <div class="register">
    <div class="row p-0 m-0">
      <div class="col-md-4 p-0">
        <div class="left">
          <div class="login-main-text">
            <h2>iLive</h2><br>
            <p>Connecting people by livestreming.</p>
          </div>
        </div>
      </div>
      <div class="col-md-8 p-0">
        <div class="rigth">
          <div class="col-md-6 col-sm-12 p-0">
            <div class="login-form p-5">
              <form v-on:submit.prevent="register">
                 <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      id="mame"
                      type="text"
                      class="form-control"
                      placeholder="User name"
                      v-model="user.name"
                    >
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="User email"
                      v-model="user.email"
                    >
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      v-model="user.password"
                    >
                </div>
                 <div class="form-group">
                    <label for="password">Confirm your password</label>
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      v-model="user.password_confirmation"
                    >
                </div>
                <div class="buttons-box">
                  <Button text="Register" buttonClass="primary"></Button>
                  <router-link :to="{ name: 'Login' }">
                    <Button text="Login" buttonClass="secondary" class="ml-1"></Button>
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Button from '@/components/Buttons/Button.vue'
import AuthService from '@/services/AuthService'

@Options({
  components: {
    Button
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    register () {
      const service = new AuthService()
      service.register(this.user).then((response) => {
        console.log(response)
      })
    }
  }
})
export default class Register extends Vue {}
</script>

<style scoped>
.register, .row {
  height: 100%;
}
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  width: 100%;
  background-color: black;
}
.rigth {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
}
</style>

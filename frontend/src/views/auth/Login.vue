<template>
  <div class="login">
    <div class="row p-0 m-0">
      <div class="col-md-4 p-0">
        <div class="left">
          <div class="login-main-text">
            <h2>aLive</h2><br>
            <p>Connecting people by livestreming.</p>
          </div>
        </div>
      </div>
      <div class="col-md-8 p-0">
        <div class="rigth">
          <div class="col-md-6 col-sm-12 p-0">
            <div class="login-form p-5">
              <form v-on:submit.prevent="send">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input v-model="user.email" id="email" type="text" class="form-control" placeholder="User email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="user.password" id="password" type="password" class="form-control" placeholder="Password">
                </div>
                <div class="buttons-box">
                  <Button text="Login" buttonClass="primary"></Button>
                  <router-link :to="{ name: 'Register' }">
                    <Button text="Register" buttonClass="secondary" class="ml-1"></Button>
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
    send () {
      console.log(this.user)
      const service = new AuthService()
      service.login(this.user)
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
    }
  }
})
export default class Login extends Vue {}
</script>

<style scoped>
.login, .row {
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

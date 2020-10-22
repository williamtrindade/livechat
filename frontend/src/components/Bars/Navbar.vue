
<template>
  <div class="navbar-component">
    <div class="row">
      <div class="col-md-12">
         <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a class="navbar-brand" href="#">
                iChat
            </a>
            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">Sistema .Ponto</span>
            </button> -->
            <div class="collapse navbar-collapse" id="navbarNavDropdown" >
                <ul class="navbar-nav mr-auto">
                    <!-- <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li> -->
                </ul>
                <ul class="navbar-nav justify-content-end">
                    <!-- <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li> -->
                    <li class="nav-item dropdown dropleft justify-content-end" >
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{user.name}}
                        </a>
                        <div class="dropdown-menu mt-0">
                            <!-- <router-link
                                :to="{ name:'manager-settings' }"
                                class="btn dropdown-item">
                                <div class="btn link-drop">
                                    <i class="fas fa-user"></i>
                                    Configurações
                                </div>
                            </router-link> -->
                            <a class="dropdown-item" v-on:click="logout">
                                <div class="btn link-drop-logout">
                                    <i class="fas fa-sign-out-alt"></i> Logout
                                </div>
                            </a>

                            <!-- <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a> -->
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Options,
  Vue
} from 'vue-class-component'
import AuthService from '@/services/AuthService'

@Options({
  methods: {
    async logout () {
      const service = new AuthService()
      await service.logout()
      this.$router.push({ name: 'Login' })
    }
  },
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    this.user = JSON.parse(localStorage.getItem('user') ?? '')
  }
})
export default class Navbar extends Vue {}
</script>

<style scoped>
.navbar-component {
  z-index: 50;
  margin-bottom: 56px;
  position: relative;
  width: 100%;
}
.navbar {
  left: 0;
  right: 0;
  width: 100%;
  position: fixed;
}
.link-drop:hover {
  color: #00be73;
}
.dropdown-menu {
  margin: 0;
  border-radius: 0;
  border-style: none
}
</style>

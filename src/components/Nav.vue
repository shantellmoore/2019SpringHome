<template>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <router-link class="navbar-brand" to="/">
                <img alt="Vue logo" src="../assets/logo.png" height="30"></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/" active-class="active" exact>Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/aboutyou" active-class="active">About You</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Myfriends" active-class="active">My Friends</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/register" active-class="active">Register</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/login" active-class="active">Login</router-link>
                </li>
            

                <li class="nav-item">
                    <router-link class="nav-link disabled" to="#" href="#">Disabled</router-link>
                </li>
                </ul>
                <form class="form-inline mt-2 mt-md-0" v-if="!Globals.user">
                    <router-link to="/Login" class="nav-link" @click.prevent="login">Login</router-link>
                    <router-link to="/Register" class="nav-link">Sign up</router-link>

                </form>
                 </div>
        </nav>

</template>
<script>
import { Globals } from "@/models/api";
export default {
    data: () => ({
        Globals: Globals
    }),
    methods: {
        
      }
}
</script>

<style>

</style>

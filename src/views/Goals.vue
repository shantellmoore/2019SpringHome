<template>
    <div class="row">
    <nav class="col-12 col-md-3 col-xl-2 bg-light sidebar" id="sidebar-wrapper">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
            <br>
            <li class="nav-item">
            <router-link class="nav-link" to="/aboutyou" active-class="active" exact>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>              About You <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <br>
          <li class="nav-item">
            <a class="nav-link active" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>
              Tracked Meals <span class="sr-only">(current)</span>
            </a>
          </li>
          <br>
          <li class="nav-item">
            <router-link class="nav-link" to="/workouts" active-class="active" exact>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              Workouts
            </router-link>
          </li>
          <br>
          <li class="nav-item">
          <router-link class="nav-link" to="/goals" active-class="active" exact>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>              
              Goals
          </router-link>
          </li>
          <br>
          <li class="nav-item">
            <router-link class="nav-link" to="/sleep" active-class="active" exact>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline></svg>             
             Sleep
            </router-link>
          </li>
          <br>
          <li class="nav-item">
            <router-link class="nav-link" to="/myfriends" active-class="active" exact>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>             
              My Friends
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 v-if="Globals.user"> {{Globals.user.name}}'s Page </h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
          </div>
        </div>
      </div>
      
  <div class="row">
    <div class="col">
      <h1 style="text-align:center;">{{name}}'s Goals</h1>
      </div>
  </div>
  <br>
  <br>
  <div class="row">
    <div class="col">
      <h1>Running Goals: {{duration}} mins this week</h1>
      <input v-model="duration" type="text" class="form-control" placeholder="Duration"/>
      <div class="progress">
       <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: duration + '%'}"></div>
      </div>
    </div>
  </div>
  <br>
  <br>
  <div class="row">
    <div class="col">
      <h1>Weight Goals: {{pounds}}lbs gained/lost</h1>
      <input v-model="pounds" type="text" class="form-control" placeholder="Pounds"/>
      <div class="progress">
       <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: pounds + '%'}"></div>
      </div>
    </div>
  </div>
  <br>
  <br>
    <div class="row">
    <div class="col">
      <h1>Number of days worked out: {{number}}</h1>
      <input v-model="number" type="text" class="form-control" placeholder="Number of day"/>
      <div class="progress">
       <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="7" :style="{width: number + '%'}"></div>
      </div>
    </div>
  </div>

  
    </main>
  </div>

</template>
<script>

import {Globals} from "@/models/api";
import { GetFriends } from "@/models/users.js";

export default {
    data: () => ({
        Globals: Globals,
        friends: [],
        name: "Shantell",
        age: "23",
        duration:"",
        pounds:"",
        number:""


    }),
    async mounted(){
        this.friends = await GetFriends();
    }}

</script>

<style>
</style>


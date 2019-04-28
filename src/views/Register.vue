<template>
    <div class="col-lg-6">
        <div class="card">
        <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Login">Login</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h4 class="card-title">Register</h4>
        <p class="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="Firstname">First Name</label>
                  <input type="text" v-model="data.FirstName"  
                    class="form-control" name="FirstName" id="FirstName" aria-describedby="helpFirstName" placeholder="First Name">
                  <small id="helpFirstName" class="form-text text-muted">If you have a middle name enter aswell</small>
                </div>
                <div class="form-group">
                  <label for="LastName">Last Name</label>
                  <input type="text" v-model="data.LastName"
                    class="form-control" name="LastName" id="Last Name" aria-describedby="helpLastName" placeholder="Last Name">
                  <small id="helpLastName" class="form-text text-muted">sir name</small>
                </div>
                <div class="form-group">
                  <label for="Password">Password</label>
                  <input type="Password" v-model="data.Password"
                  class="form-control" name="Password" id="Password" placeholder="Password">
                </div>
                <div class="form-group">
                  <label for="Birthday">Birthday</label>
                  <input type="date" v-model="data.Birthday"
                    class="form-control" name="Birthday" id="Birthday" aria-describedby="Birthday" placeholder="YourBirthday">
                  <small id="Birthday" class="form-text text-muted">Please include the year</small>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newUser">
        <div class="card-body">
          <h4 class="card-title">Congrats! you've registered</h4>
          <p class="card-text">
            {{newUser.FirstName}}{{newUser.LastName}}
          </p>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { Register } from "@/models/users";
import { Globals } from "@/models/api";
import toastr from 'toastr';
export default {
    data: () => ({
        data: {},
        newUser: null
    }),
    methods: {
        async submit(){
            try{
              const m= await Register(this.data);
              this.newUser= m;
              toastr.success("You've registered successfully!")
            }catch(error){
              Globals.errors.push(error);
              toastr.error(error.message); 
            }
        }
    }
}
</script>

<style>
</style>
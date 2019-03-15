<template>
    <div>
        <h1> Login </h1>

        <input 
            type="Email" 
            name="Email" 
            v-model="email"
            placeholder="Email"/>
        <br>
        <input 
            type="Password" 
            name="Password"
            v-model="Password" 
            placeholder="Password"/>
        <br>
        <button
            @click="login"> Login </button>

    </div>
</template>
<script>
export default {
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods:{
register(){
   // console.log('register button was clicked', this.email, this.password)
}
    },
   
}
</script>


<style scoped>

</style>

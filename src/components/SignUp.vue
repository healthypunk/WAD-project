<template>
    <form>
        <label><b>Email</b></label>
        <input name="email" v-model="username" placeholder="username">

        <label><b>Password</b></label>
        <input name="password" v-model="password" placeholder="password" type="password">
        <button type="button" v-on:click="login()">Login</button>
        <div v-if="!has_minimum_length">
            <p>Password must be at least 8 chars long, but not longer than 15 chars</p>
        </div>
        <div v-if="!has_number">
            <p>Password must have at least 1 number</p>
        </div>
        <div v-if="!has_lowercase">
            <p>Password must have at least 2 lowercase chars</p>
        </div>
        <div v-if="!has_special">
            <p>Password must have a '_' char</p>
        </div>
        <div v-if="!begins_with_uppercase">
            <p>Password must begin with an uppercase letter</p>
        </div>
    </form>
</template>

<script>
const regexp = /^(?=.*\d)(?=.+[a-z][a-z])(?=.*[A-Z])(?=.+\_)[A-Z].{7,14}$/
export default {
    name:"SignUp",
    data() {
        return {
            password: '',
            has_minimum_length: false,
            has_number: false,
            has_lowercase: false,
            has_special: false,
            begins_with_uppercase : false
        }
    },
    methods: {
        login() {
            if (username != ""){
                console.log("valid username")
            }
        }
    },
    watch:{
        password(){
            this.has_minimum_length = (this.password.length > 8 && this.password.length < 15);
            this.has_number    = /\d/.test(this.password);
            this.has_lowercase = /[a-z][a-z]/.test(this.password);
            this.begins_with_uppercase = /^[A-Z]/.test(this.password);
            this.has_special   = /_/.test(this.password);
        }
    }
}
</script>
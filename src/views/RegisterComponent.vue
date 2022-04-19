<template>
    <div class="container">
        <div class="wrapper">
            <h1 class="logo">Indigo</h1>
            <input v-model="name" type="text" id="name" class="token" placeholder="put your name">
            <input v-model="email" type="text" id="email" class="token" placeholder="put your email">
            <input v-model="token" type="text" id="token" class="token" placeholder="put your unique token...">
            <input type="submit" id="submit" class="submit" placeholder="Register" @click="register">
            <div>
                    <router-link to="/login" class="login-link">Already have an account ?</router-link>
            </div>
        </div>

    </div> 
</template>

<script>

import {mapActions,mapGetters} from 'vuex'

export default({
    mounted(){
        window.onload = () => {
            this.$el.querySelector('.logo').classList.add("logo-end")
            this.$el.querySelector('.token').classList.add("token-end")
        };

    },
    name:'LoginComponent',
    data(){
        return {
            name: "",
            email: "",
            token: "",
        }
    },
    computed:{
        ...mapGetters('notes',{
            notes    : 'getNotes'
      }),
        ...mapGetters('user',{
            authenticated: 'getAuthenticated',
            token: 'getToken'
      })
    },
    methods:{
        ...mapActions('notes',{
              setNotes  : 'setNotes',
        }),
    
        ...mapActions('user',{
            setAuthenticated: 'setAuthenticated',
            setToken: 'setToken'
        }),

            register(){
                const data = {
                    "name":this.name,
                    "email":this.email,
                    "token":this.token
                }
                fetch('http://127.0.0.1:8080/register',{
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                        },
                    body: JSON.stringify(data)
                })
                .then((response) => response.json())
                .then((res) => {
                        const {data} = res
                        const {token} = res
                        this.setNotes(data.notes)
                        this.setAuthenticated(true)
                        this.setToken(token)
                        this.$router.push("/home")
                        return
                })
                
            },
            


        },
})
</script>

<style scoped>
    .submit{
        display: block;
        width: 70%;
            padding: 20px 20px;
            border-radius: 60px;
            margin:20px auto;
            font-size: 18px;
            transition: 1s;
            background-color: #BB6464;
            border:0;
    }
    .wrapper{
            text-align: center;
            transform: translateY(10%);
        }
    .token{
            width: 70%;
            padding: 20px 20px;
            border-radius: 60px;
            border: 1px solid #BB6464;
            margin:20px auto;
            font-size: 18px;
            transition: 1s;
        }

         .login-link{
            text-decoration: none;
            color: #008E89;
        }
</style>
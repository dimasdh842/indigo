<template>
    <div class="container">
        <div class="wrapper">
            <h1 class="logo">Indigo</h1>
            <input v-model="token" type="text" id="token" class="token" placeholder="put your unique token..." @keyup.enter="login()">
            <div>
                    <router-link to="/register" class="register-link">Register...</router-link>
            </div>
        </div>

    </div> 
</template>

<script>

import {mapActions,mapGetters} from 'vuex'

export default({
    mounted(){

    },
    name:'LoginComponent',
    data(){
        return {
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

            deleteBox(i) {
                this.boxes.splice(i,1);
            },
            addNewTask(){
                let index = this.boxes.length
                let random = this.getRandomInt(5)
                this.boxes.push( {
                        id:index,
                        content:this.newTask,
                        color:"box box-"+random
                    })
                this.newTask = ""
            },
            getRandomInt(max) {
                let rand = Math.floor(Math.random() * max);
                if (rand == 0) {
                    rand = 1
                }
                return rand
            },
            login(){
                const data = {
                    "token":this.token
                }
                fetch('http://127.0.0.1:8080/login',{
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
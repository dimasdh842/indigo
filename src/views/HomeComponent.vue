<template>
    <div class="container">
                    <input type="text" class="task" placeholder="enter to add new task.." v-model="content" @keyup.enter="createNote()">

                    <div class="container-inner">
                        <template v-for="note,i of this.notes" v-bind:key="i">
                            <div v-bind:id="note.id" v-bind:class="getRandomColor(6)" @click="deleteBox(note.id)"> <span>{{note.content}}</span></div>
                        </template>
                    </div>

                    <div class="jam"><span>{{this.now}}</span></div>
                </div> 
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

let vm = {
    name:'HomeComponent',
    computed:{
                now() {
                    let s = new Date(this.date).toLocaleTimeString("en-US")
                    return s
                },
                ...mapGetters('notes',{
                    notes    : 'getNotes',
                }),
                ...mapGetters('user',{
                    authenticated: 'getAuthenticated',
                    user: 'getUser',
                    token: 'getToken'
                }),

               
    },
    mounted() {
        console.log('mounted')
        this.getAllnotes()
    },
    data(){
                return {
                    date:'',
                    textContent: '',
                    content:"",
                    s:""
                }
            },
            beforeMount() {
                this.timer = setInterval(this.setDateTime, 1000);
            },
            beforeUnmount() {
                clearInterval(this.timer);
            },
            methods:{
                setDateTime() {
                    const date = Date.now();
                    this.date = date
                },
                ...mapActions('notes',{
                    setNotes  : 'setNotes',
                }),
                deleteBox(id) {
                    fetch("http://127.0.0.1:8080/note/"+id,{
                        method: 'DELETE',
                        mode:'cors',
                        headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+this.token
                        },
                    })
                    .then(() => {
                        this.getAllnotes()

                    })
                },
                createNote() {
                    const data = {
                        "content": this.content
                    }
                    fetch("http://127.0.0.1:8080/note/",{
                        method: 'POST',
                        mode:'cors',
                        headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+this.token
                        },
                        body: JSON.stringify(data)
                    })
                    .then(() => {
                        this.getAllnotes()
                        this.content = ""

                    })
                },
                getAllnotes() {
                    fetch("http://127.0.0.1:8080/note",{
                            method: 'GET',
                            mode: 'cors',
                            headers: {
                                'Authorization': 'Bearer ' + this.token,
                                'Content-Type': 'application/json'
                                },
                    })
                    .then((res) => res.json())
                    .then(response => {
                        const {data} = response
                        console.log(response)
                        this.setNotes(data.notes)
                    })
                },
                getRandomColor(max) {
                    let rand = Math.floor(Math.random() * max);
                    if (rand == 0) {
                        rand = 1
                    }

                    const className = "box box-" + rand
                    return className
                }
            },
            
}
    export default vm
</script>


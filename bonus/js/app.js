const { createApp, ref } = Vue

createApp({
    data() {
      return {
        message: 'Hello Vue!',
        emailList: [],
      }
      
    },

    methods: {
    getEmail() {
        for (let index = 0; index < 10; index++) {
            axios.get(' https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.emailList.push(res.data.response)
            })  
        }
    },

    },

    mounted(){
        this.getEmail()
        console.log(this.getEmail)
    }

  }).mount('#app')


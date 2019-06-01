<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

      <nav>
          <router-link to='/'>Home</router-link>
          <router-link to='/register'>Register</router-link>
          <router-link to='/login'>Login</router-link>
          <router-link to='/belajar-dasar'>Belajar Dasar</router-link>
      </nav>
      
      <router-view />

      <hr/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComponentOrtu from './components/ComponentOrtu.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ComponentOrtu
  },
  data() {
    return {
      pesanBindView: 'Halo ini mencoba data binding ke view',
      pesanBindAttribute1: 'Ini bind ke value input',
      pesanBindAttribute2: 'https://ayorange.files.wordpress.com/2012/09/orange_istock_000001331357x_540x405.jpg',
      pesanBindDuaArah: 'Inisiasi Dua Arah',
      pesanBindEvent1: 'event bind dengan click',
      pesanBindEvent2: 'event bind dengan change',
      pesanBindEvent3: 'event bind dengan keyboard',

      angkaPertama: 0,
      angkaKedua: 0,
      angkaHasil: 0,

      responseAPI: '',

      loading: false,
      fullnameForm: '',
      emailForm: '',
      passwordForm: ''
    }
  },
  computed: {
    hasilTambah() {
      this.angkaHasil = parseInt(this.angkaPertama) + parseInt(this.angkaKedua);
      return this.angkaHasil;
    },
    hasilKurang() {
      this.angkaHasil = parseInt(this.angkaPertama) - parseInt(this.angkaKedua);
      return this.angkaHasil;
    }
  },
  methods: {
    alertBindEvent(params) {
      alert(params)
    },
    submitSignUp(params) {
      this.loading = true;
      console.log('masuk method submitSignUp()')
      this.$http.post('http://proyekagendaapi.herokuapp.com/api/register', {
          name: this.fullnameForm,
          email: this.emailForm,
          password: this.passwordForm
        })
        .then(response => {
          this.responseAPI = response
          if(response.data.status == 200) {
            alert('form sukses')
          } else {
            alert('form gagal')
          }
        })
        .catch(error => {
          console.log(error)
          this.errored = error
        })
        .finally(() => {
          this.loading = false
          this.fullnameForm = '',
          this.passwordForm = '',
          this.emailForm = ''
          })
        params.preventDefault();
    },
    alertAxios(params) {
         this.$http.post('http://proyekagendaapi.herokuapp.com/api/register', {
          name: 'isi nama tes axios',
          email: 'email@axios.com',
          password: 'passwordaxios'
        })
        .then(response => {
          
          this.responseAPI = response
          if(response.data.status == 200) {
            alert('form sukses')
          } else {
            alert('form gagal')
          }
        })
        .catch(error => {
          console.log(error)
          this.errored = error
        })
        .finally(() => {
          this.loading = false
          this.fullnameForm = '',
          this.passwordForm = '',
          this.emailForm = ''
          })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="componentBelajarDasar">
   
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sign Up Form</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Let's join our web today.</h6>
                        <div v-if="loading == true">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                        <form v-else v-on:submit="submitSignUp" class="text-left">
                            <div class="form-group">
                                <label for="exampleInputFullname">Full name</label>
                                <input  type="text" class="form-control" id="exampleInputFullname" 
                                        v-model="fullnameForm" placeholder="Enter Full name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" 
                                      aria-describedby="emailHelp"
                                      v-model="emailForm" placeholder="Enter email">
                                <small id="emailHelp" class="form-text text-muted">
                                    We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input  type="password" class="form-control" 
                                        v-model="passwordForm" id="exampleInputPassword1"
                                        placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Submit</button>
                        </form>
                        </div>
                </div>
                </div>
        </div>
    </div>


    <hr/>
    <component-ortu> </component-ortu>
    <hr>
    <h1>
      {{ pesanBindView }}
    </h1>

    <br/>

    <input v-bind:value="pesanBindAttribute1"> <hr/>
    <img v-bind:src="pesanBindAttribute2" width="70" height="70">
    
    <hr/>

    <input v-model="pesanBindDuaArah"> <br/>
    <p>Hasil: {{ pesanBindDuaArah }} </p>

    <hr/>
    
    <button type="button" class="btn btn-success" v-on:click="alertBindEvent(pesanBindEvent1)"> event event bind klik aku </button> <br/>
    <input type="text" placeholder="input aku event change" v-on:change="alertBindEvent(pesanBindEvent2)" > <br/>
    <input type="text" placeholder="input aku event keyup" v-on:keyup.enter="alertBindEvent(pesanBindEvent3)" > 

    <hr/>
    penjumlahan: <br>
    masukkan angka pertama: <input v-model="angkaPertama" /> <br>
    masukkan angka kedua: <input v-model="angkaKedua"/> <br>
    hasilnya: {{ hasilTambah }}
    <hr/>
    pengurangan: <br>
    masukkan angka pertama: <input v-model="angkaPertama" /> <br>
    masukkan angka kedua: <input v-model="angkaKedua"/> <br>
    hasilnya: {{ hasilKurang }}

    <hr/>

    <button type="button" name="" id="" 
            v-on:click="alertAxios()"
            class="btn btn-primary btn-lg btn-block">Tes Klik Axios</button>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import ComponentOrtu from './ComponentOrtu.vue'

export default {
  name: 'ComponentBelajarDasar',
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

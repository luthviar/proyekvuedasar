<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="card text-center">
                        <div>

                        <div class="card-body">
                                <h2 class="card-title">
                                    Daftar Agenda Saya
                                </h2>
                            <p class="card-text">
                                Berikut ini merupakan daftar agenda atau aktivitas saya.
                            </p>
                        </div>

                        </div> <!-- end Header -->

                        <tambah-agenda @tambah-agenda="tambahAgendaArray" > </tambah-agenda>
                        <!-- end tambahAgenda -->
                        
                        <daftar-agenda 
                            @hapus-item-agenda="hapusAgenda"
                            :item-agenda-array-bind="itemAgendaArray"> 
                        </daftar-agenda>
                         <!-- end daftarAgenda -->

                    </div> <!-- end .card -->
                </div> <!-- end .col -->
            </div> <!-- end .row -->
        </div> <!-- end .container -->
    </div>
</template>
<script>
import TambahAgenda from './TambahAgenda'
import DaftarAgenda from './DaftarAgenda'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        TambahAgenda,
        DaftarAgenda
    },
    data() {
        return {
            itemAgendaArray: []
        }
    },
    mounted() {
        axios.get('https://api.myjson.com/bins/16l6i0')
            .then(response => {
                console.log(response);
                this.itemAgendaArray = response.data;
            }).catch(error => {
                console.log(error)
            })
    },
    methods: {
        tambahAgendaArray(agendaBaru) {
            console.log('masuk array baru');
            this.itemAgendaArray = [...this.itemAgendaArray, agendaBaru];
        },
        hapusAgenda(id) {
            this.itemAgendaArray =
                this.itemAgendaArray.filter(
                            itemAgendaArray => itemAgendaArray.id !== id
                        );
        }
    }
}
</script>
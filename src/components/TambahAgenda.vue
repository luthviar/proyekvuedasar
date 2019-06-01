<template>
    <div>
       
        <div class="card-body">
        <form @submit="tambahAgendaSubmit">
            <div class="input-group mb-3">
            <input
                type="text"
                class="form-control"
                v-model="judul"
                placeholder="Tambahkan agenda di sini.."
            >
            <div class="input-group-append">
                <button
                    class="btn btn-outline-info"
                    type="submit"
                >
                Tambah
                </button>
            </div>
            </div>
        </form>
        {{ judul }}
        </div>

    </div> 
</template>
<script>
export default {
    name: 'TambahAgenda',
    components: {
       
    },
    data() {
        return {
            idNumber : 4,
            judul : ''
        }
    },
    methods: {
        tambahAgendaSubmit(e) {
            console.log('masuk methods tambahAgendaSubmit')
            e.preventDefault();
            const agendaBaru = {
                id: this.idNumber++,
                judul: this.judul,
                selesai: false
            }
            // kirim ke component di atasnya
            this.$emit('tambah-agenda', agendaBaru);

            this.judul = '';
        }
    }
}
</script>
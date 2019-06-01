<template>
    <div>
       <div class="input-group mb-3">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input v-on:change="tandaiSelesai()" type="checkbox">
                </div>
            </div>
            <p  class="form-control" 
                :class="{
                    'bg-success': dataAgendaBind.selesai,
                    'text-white': dataAgendaBind.selesai
                }" 
                style="height: 100%;">
                    {{ dataAgendaBind.judul }}
            </p>
            <div class="input-group-append">
                <button v-on:click="$emit('hapus-item-agenda', dataAgendaBind.id)" 
                        type="button" class="btn btn-danger">
                    x
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ItemAgenda',
    props: {
        'dataAgendaBind': ''
    },
    methods: {
        tandaiSelesai() {
            console.log('masuk fungsi tandaiselesai()')
            this.dataAgendaBind.selesai = !this.dataAgendaBind.selesai;
        }
    }
}
</script>